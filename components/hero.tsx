'use client';

export default function HeroSection() {
  return (
    <section className="section section--hero" aria-label="Apresentação da GRB Tecnologia">
      <div className="layout-container">
        <div className="hero-panel">
          <p className="eyebrow">GRB Tecnologia</p>
          <h1>Suporte técnico, telecomunicações e soluções de informática para quem busca atendimento premium.</h1>
          <p>
            Empresas e residências contam com manutenção de computadores, instalação elétrica, reparo de
            equipamentos, telecom e treinamentos em informática com foco em resultado e experiência agradável.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#form-contato">Solicitar orçamento</a>
            <a className="button button--secondary" href="#servicos">Conhecer serviços</a>
          </div>
          <div className="hero-highlights">
            <div>
              <strong>Atendimento rápido</strong>
              <p>Resposta ágil para emergências de TI e telecom.</p>
            </div>
            <div>
              <strong>Equipe especializada</strong>
              <p>Suporte técnico, reparo e treinamento com padrão profissional.</p>
            </div>
            <div>
              <strong>Mais de 10 atividades</strong>
              <p>Do comércio eletrônico à manutenção residencial e corporativa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
