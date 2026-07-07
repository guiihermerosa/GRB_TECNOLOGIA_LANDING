'use client';

export default function HeroSection() {
  return (
    <section className="section section--hero" aria-label="Apresentação da GRB Tecnologia">
      <div className="layout-container">
        <div className="hero-panel">
          <p className="eyebrow">GRB Tecnologia</p>
          <h1>Suporte técnico e infraestrutura TI sem complicações</h1>
          <p>Focamos em resolver seus problemas de TI, telecom e infraestrutura com agilidade, deixando você livre para focar no seu negócio.</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#pricing">Ver planos</a>
            <a className="button button--secondary" href="#features">Saiba mais</a>
          </div>
        </div>
      </div>
    </section>
  );
}
