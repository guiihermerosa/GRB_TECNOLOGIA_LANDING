'use client';

import ContactForm from '@/components/contact-form';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero';
import FeaturesSection from '@/components/features';
import StatsSection from '@/components/stats';
import PricingSection from '@/components/pricing';
import ScrollTopButton from '@/components/scroll-top';
import WhatsAppFloat from '@/components/whatsapp-float';
import ToastProvider from '@/components/toast-provider';

export default function HomePage() {
  return (
    <ToastProvider>
      <div className="page-shell">
        <main>
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <PricingSection />
          <section className="section section--contact" id="contato">
            <div className="layout-container">
              <div className="section-heading">
                <p className="eyebrow">Vamos começar</p>
                <h2>Pronto para otimizar sua infraestrutura de TI?</h2>
                <p>Entre em contato conosco e agende uma reunião gratuita com nossos especialistas</p>
              </div>
              <div className="section__content grid--2">
                <div>
                  <h3>Conecte-se conosco</h3>
                  <p><strong>Telefone:</strong> (18) 3341-3450</p>
                  <p><strong>Email:</strong> grbtecnologia.cm@gmail.com</p>
                  <p><strong>Localização:</strong> Cândido Mota, SP</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollTopButton />
      </div>
    </ToastProvider>
  );
}
