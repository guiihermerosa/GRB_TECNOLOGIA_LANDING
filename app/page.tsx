'use client';

import ContactForm from '@/components/contact-form';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero';
import FeaturesSection from '@/components/features';
import ScrollTopButton from '@/components/scroll-top';
import WhatsAppFloat from '@/components/whatsapp-float';
import ToastProvider from '@/components/toast-provider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <ToastProvider>
      <main className="relative">
        <HeroSection />
        <FeaturesSection />

        <section className="px-4 py-20 sm:px-6 lg:px-8" id="contato">
          <div className="mx-auto grid w-full max-w-7xl gap-8">
            <div className="mx-auto grid max-w-3xl justify-items-center gap-4 text-center">
              <Badge variant="outline" className="border-white/10 bg-white/5 text-white">
                Vamos começar
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Transforme sua infraestrutura de TI agora
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Entre em contato para uma conversa sem compromisso com a nossa equipe técnica.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[0.86fr_1.14fr]">
              <Card className="border-white/10 bg-slate-950/70 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white">Conecte-se conosco</CardTitle>
                  <CardDescription className="text-slate-300">
                    Atendimento consultivo, com retorno rápido e foco no próximo passo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 text-slate-200">
                  <div>
                    <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">Telefone</span>
                    <strong className="text-white">(18) 3341-3450</strong>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">Email</span>
                    <strong className="text-white">grbtecnologia.cm@gmail.com</strong>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">Localização</span>
                    <strong className="text-white">Cândido Mota, SP</strong>
                  </div>
                </CardContent>
              </Card>

              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
        <ScrollTopButton />
      </main>
    </ToastProvider>
  );
}
