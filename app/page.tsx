import { AnimatePresence, motion } from 'framer-motion';
import ContactForm from '@/components/contact-form';
import Footer from '@/components/footer';
import FaqSection from '@/components/faq';
import HeroSection from '@/components/hero';
import PartnersSection from '@/components/partners';
import ScrollTopButton from '@/components/scroll-top';
import ServicesSection from '@/components/services';
import TestimonialsSection from '@/components/testimonials';
import WhatsAppFloat from '@/components/whatsapp-float';
import ToastProvider from '@/components/toast-provider';
import ChatWidget from '@/components/chat-widget';

export default function HomePage() {
  return (
    <ToastProvider>
      <div className="page-shell">
        <AnimatePresence mode="wait">
          <main className="layout-container">
            <HeroSection />
            <ServicesSection />
            <motion.section
              className="section section--contact"
              id="contato"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="section__content grid--2">
                <div>
                  <p className="eyebrow">Contato comercial</p>
                  <h2>Pronto para receber um atendimento técnico premium?</h2>
                  <p>
                    Envie sua demanda e receba uma proposta personalizada para manutenção, suporte,
                    telecomunicações ou treinamento em informática.
                  </p>
                  <div className="contact-card">
                    <p><strong>Telefone:</strong> (18) 3341-3450</p>
                    <p><strong>Email:</strong> grbtecnologia.cm@gmail.com</p>
                    <p><strong>Endereço:</strong> R. Vicente Marroni, 60, Casa B, Jardim Bela Vista, Cândido Mota - SP</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </motion.section>
            <TestimonialsSection />
            <PartnersSection />
            <FaqSection />
            <ChatWidget />
            <section className="section section--cta">
              <div className="section__content cta-panel">
                <div>
                  <p className="eyebrow">GRB Tecnologia</p>
                  <h2>Transforme sua infraestrutura com suporte confiável e atendimento rápido.</h2>
                </div>
                <a className="button button--primary" href="#form-contato">
                  Fale conosco agora
                </a>
              </div>
            </section>
          </main>
          <Footer />
          <WhatsAppFloat />
          <ScrollTopButton />
        </AnimatePresence>
      </div>
    </ToastProvider>
  );
}
