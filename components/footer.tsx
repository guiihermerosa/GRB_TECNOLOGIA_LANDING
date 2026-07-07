'use client';

export default function Footer() {
  return (
    <footer className="section footer-section" aria-labelledby="footer-title">
      <div className="layout-container footer-grid">
        <div>
          <p className="eyebrow">GRB Tecnologia</p>
          <h3 id="footer-title">Conectando seu negócio com tecnologia e confiança.</h3>
          <p>Empresa: 60.161.914 GUILHERME ROSA DE BRITO | CNPJ: 60.161.914/0001-66</p>
        </div>
        <div className="footer-links">
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#faq">FAQ</a>
          <a href="#form-contato">Contato</a>
          <a href="/privacy">Política de Privacidade</a>
          <a href="/terms">Termos de Uso</a>
          <a href="/lgpd">LGPD</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 GRB Tecnologia. Todos os direitos reservados.</p>
        <p>Política de Privacidade | Termos de Uso | LGPD</p>
      </div>
    </footer>
  );
}
