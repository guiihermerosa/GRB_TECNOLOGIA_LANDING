'use client';

import { ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="layout-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ Infraestrutura TI sem complicações</span>
          </div>
          
          <h1 className="hero-title">
            Suporte técnico que cresce com seu negócio
          </h1>
          
          <p className="hero-subtitle">
            Deixe a complexidade da TI com a gente. Nós cuidamos da sua infraestrutura, segurança e performance enquanto você cresce.
          </p>

          <div className="hero-cta">
            <a href="#pricing" className="button button--primary">
              Ver planos
              <ArrowRight size={18} />
            </a>
            <a href="#contato" className="button button--secondary">
              Conversar com especialista
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-number">200+</div>
              <div className="stat-text">Clientes confiando</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-text">Uptime garantido</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">24/7</div>
              <div className="stat-text">Suporte ativo</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-grid">
              <div className="grid-item item-1"></div>
              <div className="grid-item item-2"></div>
              <div className="grid-item item-3"></div>
              <div className="grid-item item-4"></div>
              <div className="grid-item item-5"></div>
              <div className="grid-item item-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
