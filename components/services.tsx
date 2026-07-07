const serviceEntries = [
  {
    title: 'Manutenção de computadores',
    description: 'Reparo, otimização e suporte para desktops, notebooks e redes internas.'
  },
  {
    title: 'Telecomunicações',
    description: 'Instalação e reparo de sistemas de internet, cabeamento e equipamentos de comunicação.'
  },
  {
    title: 'Comércio especializado',
    description: 'Venda de material elétrico, equipamentos de telefonia, informática e instrumentos musicais.'
  },
  {
    title: 'Treinamento em informática',
    description: 'Cursos práticos para uso de software, periféricos e conceitos de TI.'
  }
];

export default function ServicesSection() {
  return (
    <section className="section section--services" id="servicos" aria-labelledby="servicos-title">
      <div className="layout-container">
        <div className="section-heading">
          <p className="eyebrow">Serviços</p>
          <h2 id="servicos-title">Soluções completas para seu equipamento e seu negócio</h2>
        </div>
        <div className="service-grid">
          {serviceEntries.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
