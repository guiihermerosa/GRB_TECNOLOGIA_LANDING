import { motion } from 'framer-motion';

const partners = ['Grupo Empresarial', 'Instituto de Treinamento', 'Operadora Local', 'Lojista de Informática'];

export default function PartnersSection() {
  return (
    <section className="section section--partners" aria-labelledby="parceiros-title">
      <div className="layout-container">
        <div className="section-heading">
          <p className="eyebrow">Parceiros</p>
          <h2 id="parceiros-title">Parceiros e empresas atendidas</h2>
        </div>
        <div className="partner-grid">
          {partners.map((name, index) => (
            <motion.div
              key={name}
              className="partner-card"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <strong>{name}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
