'use client';

import { FormEvent, useMemo, useState } from 'react';
import InputMask from 'react-input-mask';
import { sendContactEmail } from '@/services/contact-client';
import { isValidEmail, isValidPhone, sanitizeInput } from '@/utils/validators';
import { useToast } from '@/components/toast-provider';
import Modal from '@/components/modal';

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

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [modalOpen, setModalOpen] = useState(false);
  const { pushToast } = useToast();

  const isFormValid = useMemo(() => {
    return (
      formData.name.trim().length >= 3 &&
      isValidEmail(formData.email) &&
      isValidPhone(formData.phone) &&
      formData.city.trim().length >= 2 &&
      formData.state.trim().length >= 2 &&
      formData.subject.trim().length >= 5 &&
      formData.message.trim().length >= 15
    );
  }, [formData]);

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
    } catch (error) {
      setStatus('error');
      pushToast({ title: 'Erro no envio', message: 'Não foi possível enviar o formulário agora.', variant: 'error' });
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div>
      <form id="form-contato" className="card contact-form" onSubmit={handleSubmit} noValidate>
        <div className="section-heading">
          <p className="eyebrow">Fale com a GRB</p>
          <h2>Preencha o formulário e vamos cuidar do seu projeto.</h2>
        </div>

        {[
          { field: 'name', label: 'Nome', type: 'text', required: true },
          { field: 'company', label: 'Empresa', type: 'text', required: false },
          { field: 'email', label: 'Email', type: 'email', required: true },
          { field: 'city', label: 'Cidade', type: 'text', required: true },
          { field: 'state', label: 'Estado', type: 'text', required: true },
          { field: 'subject', label: 'Assunto', type: 'text', required: true }
        ].map(({ field, label, type, required }) => (
          <label className="label" key={field} htmlFor={field}>
            <span>{label}{required ? ' *' : ''}</span>
            <input
              id={field}
              name={field}
              type={type}
              value={(formData as any)[field]}
              onChange={(event) => setFormData((prev) => ({ ...prev, [field]: event.target.value }))}
              aria-invalid={Boolean(errors[field])}
              aria-describedby={errors[field] ? `${field}-error` : undefined}
              required={required}
            />
            {errors[field] && <span className="field-error" id={`${field}-error`}>{errors[field]}</span>}
          </label>
        ))}

        <label className="label" htmlFor="phone">
          <span>Telefone *</span>
          <InputMask
            id="phone"
            mask="(99) 99999-9999"
            value={formData.phone}
            onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          >
            {(inputProps: any) => <input {...inputProps} type="tel" required />}
          </InputMask>
          {errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}
        </label>

        <label className="label" htmlFor="message">
          <span>Mensagem *</span>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            required
          />
          {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
        </label>

        <div className="form-actions">
          <button className="button button--primary" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
          </button>
        </div>
      </form>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Obrigado pelo contato"
        description="Recebemos sua solicitação. Nossa equipe responderá em breve. Enquanto isso, você pode conhecer nossos serviços, falar pelo WhatsApp ou acessar nosso portfólio."
        actions={
          <div className="modal-actions">
            <a className="button button--secondary" href="#servicos">Conhecer serviços</a>
            <a className="button button--primary" href="https://api.whatsapp.com/send?phone=551833413450&text=Ol%C3%A1!%20Encontrei%20o%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </div>
        }
      />
    </div>
  );
}
