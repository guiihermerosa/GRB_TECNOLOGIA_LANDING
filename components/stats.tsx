const stats = [
  { label: 'Clientes Atendidos', value: '200+' },
  { label: 'Anos de Experiência', value: '10+' },
  { label: 'Serviços Especializados', value: '15+' },
  { label: 'Taxa de Satisfação', value: '98%' }
];

export default function StatsSection() {
  return (
    <section className="section section--stats">
      <div className="layout-container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
