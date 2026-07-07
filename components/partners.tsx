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
          {partners.map((name) => (
            <div key={name} className="partner-card">
              <strong>{name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
