import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Como solicito um orçamento para manutenção de computadores?',
    answer: 'Preencha o formulário de contato com suas informações ou clique no botão do WhatsApp para falar diretamente com nossa equipe.'
  },
  {
    question: 'Vocês fazem instalação elétrica e telecom junto?',
    answer: 'Sim. Atendemos projetos que envolvem infraestrutura elétrica, cabeamento de rede e equipamentos de telecomunicação.'
  },
  {
    question: 'Vocês oferecem treinamento para empresas e estudantes?',
    answer: 'Sim. Desenvolvemos treinamentos de informática adaptados a necessidades corporativas e individuais.'
  },
  {
    question: 'Como funciona o primeiro atendimento após o contato?',
    answer: 'Você recebe uma confirmação automática, nossos especialistas avaliam a solicitação e entram em contato para agendar ou apresentar a melhor solução.'
  }
];

export default function FaqSection() {
  return (
    <section className="section section--faq" id="faq" aria-labelledby="faq-title">
      <div className="layout-container">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Dúvidas frequentes</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
