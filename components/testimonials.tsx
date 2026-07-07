const testimonials = [
  {
    quote: 'Atendimento rápido, resolutivo e com excelente acompanhamento. Recomendo a GRB Tecnologia para qualquer necessidade de TI.',
    author: 'Cliente satisfeito'
  },
  {
    quote: 'A qualidade no suporte e o cuidado com os detalhes fizeram a diferença no nosso escritório. Profissionais confiáveis.',
    author: 'Empresário local'
  },
  {
    quote: 'Treinamento bem organizado, objetivo e esclarecedor. Minha equipe aprendeu a usar as ferramentas com segurança.',
    author: 'Gestor de projetos'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="section section--testimonials" id="depoimentos" aria-labelledby="depoimentos-title">
      <div className="layout-container">
        <div className="section-heading">
          <p className="eyebrow">Depoimentos</p>
          <h2 id="depoimentos-title">Clientes que encontraram mais eficiência com a GRB</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.author} className="testimonial-card">
              <p>“{item.quote}”</p>
              <strong>{item.author}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
