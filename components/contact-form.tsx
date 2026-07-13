'use client';

import { FormEvent, useState } from 'react';
import InputMask from 'react-input-mask';

import { sendContactEmail } from '@/services/contact-client';
import { isValidEmail, isValidPhone, sanitizeInput } from '@/utils/validators';
import { useToast } from '@/components/toast-provider';
import Modal from '@/components/modal';
import Button from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  subject: '',
  message: ''
};

const fields = [
  { field: 'name', label: 'Nome', type: 'text', required: true },
  { field: 'company', label: 'Empresa', type: 'text', required: false },
  { field: 'email', label: 'Email', type: 'email', required: true },
  { field: 'city', label: 'Cidade', type: 'text', required: true },
  { field: 'state', label: 'Estado', type: 'text', required: true },
  { field: 'subject', label: 'Assunto', type: 'text', required: true }
] as const;

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [modalOpen, setModalOpen] = useState(false);
  const { pushToast } = useToast();

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (formData.name.trim().length < 3) nextErrors.name = 'Informe seu nome completo.';
    if (!isValidEmail(formData.email)) nextErrors.email = 'Informe um email válido.';
    if (!isValidPhone(formData.phone)) nextErrors.phone = 'Informe um telefone válido com DDD.';
    if (formData.city.trim().length < 2) nextErrors.city = 'Informe sua cidade.';
    if (formData.state.trim().length < 2) nextErrors.state = 'Informe seu estado.';
    if (formData.subject.trim().length < 5) nextErrors.subject = 'O assunto precisa ter pelo menos 5 caracteres.';
    if (formData.message.trim().length < 15) nextErrors.message = 'A mensagem precisa ser mais detalhada.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      pushToast({ title: 'Atenção', message: 'Verifique os campos e tente novamente.', variant: 'warning' });
      return;
    }

    setStatus('loading');
    try {
      await sendContactEmail({
        name: sanitizeInput(formData.name),
        company: sanitizeInput(formData.company),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        city: sanitizeInput(formData.city),
        state: sanitizeInput(formData.state),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message)
      });
      setStatus('success');
      setFormData(initialState);
      setModalOpen(true);
      pushToast({ title: 'Mensagem enviada', message: 'Recebemos seu contato com sucesso.', variant: 'success' });
    } catch {
      setStatus('error');
      pushToast({ title: 'Erro no envio', message: 'Não foi possível enviar o formulário agora.', variant: 'error' });
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div>
      <form id="form-contato" onSubmit={handleSubmit} noValidate>
        <Card className="border-white/10 bg-slate-950/70 backdrop-blur">
          <CardHeader className="gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Fale com a GRB</p>
            <CardTitle className="text-2xl text-white">Preencha o formulário e vamos cuidar do seu projeto.</CardTitle>
            <CardDescription className="text-slate-300">
              Responderemos com rapidez e atenção ao cenário real da sua empresa.
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              {fields.map(({ field, label, type, required }) => (
                <div className="grid gap-2" key={field}>
                  <Label htmlFor={field} className="text-slate-100">
                    {label}{required ? ' *' : ''}
                  </Label>
                  <Input
                    id={field}
                    name={field}
                    type={type}
                    value={(formData as any)[field]}
                    onChange={(event) => setFormData((prev) => ({ ...prev, [field]: event.target.value }))}
                    aria-invalid={Boolean(errors[field])}
                    aria-describedby={errors[field] ? `${field}-error` : undefined}
                    required={required}
                    className="border-white/10 bg-white/[0.03] text-white placeholder:text-slate-500"
                  />
                  {errors[field] && <span className="text-sm text-rose-300" id={`${field}-error`}>{errors[field]}</span>}
                </div>
              ))}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-slate-100">Telefone *</Label>
              <InputMask
                id="phone"
                mask="(99) 99999-9999"
                value={formData.phone}
                onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              >
                {(inputProps: any) => (
                  <Input {...inputProps} type="tel" required className="border-white/10 bg-white/[0.03] text-white placeholder:text-slate-500" />
                )}
              </InputMask>
              {errors.phone && <span className="text-sm text-rose-300" id="phone-error">{errors.phone}</span>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message" className="text-slate-100">Mensagem *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
                className="border-white/10 bg-white/[0.03] text-white placeholder:text-slate-500"
              />
              {errors.message && <span className="text-sm text-rose-300" id="message-error">{errors.message}</span>}
            </div>

            <div className="flex justify-end pt-1">
              <Button type="submit" size="lg" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Obrigado pelo contato"
        description="Recebemos sua solicitação. Nossa equipe responderá em breve. Enquanto isso, você pode conhecer nossos serviços ou falar direto com a equipe pelo WhatsApp."
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#servicos" variant="secondary" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
              Conhecer serviços
            </Button>
            <Button
              href="https://api.whatsapp.com/send?phone=551833413450&text=Ol%C3%A1!%20Encontrei%20o%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </Button>
          </div>
        }
      />
    </div>
  );
}
