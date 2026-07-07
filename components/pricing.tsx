import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Sob orçamento',
    description: 'Ideal para pequenos negócios e residências',
    features: [
      'Suporte técnico por email',
      'Atendimento em até 48h',
      'Diagnóstico remoto',
      'Documentação de problemas'
    ],
    cta: 'Começar'
  },
  {
    name: 'Professional',
    price: 'Sob orçamento',
    description: 'Para empresas com demandas regulares',
    features: [
      'Suporte técnico priorizado',
      'Atendimento em até 4h',
      'Consultoria de infraestrutura',
      'Manutenção preventiva',
      'Treinamento da equipe',
      'Relatórios mensais'
    ],
    cta: 'Solicitar orçamento',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    description: 'Soluções completas e customizadas',
    features: [
      'Suporte 24/7 dedicado',
      'Atendimento imediato',
      'Infraestrutura gerenciada',
      'Projeto de telecom',
      'Treinamento contínuo',
      'SLA garantido',
      'Consultoria estratégica'
    ],
    cta: 'Conversar com especialista'
  }
];

export default function PricingSection() {
  return (
    <section className="section section--pricing" id="pricing">
      <div className="layout-container">
        <div className="section-heading">
          <p className="eyebrow">Planos</p>
          <h2>Escolha o plano ideal para seu negócio</h2>
          <p>Flexibilidade e escalabilidade em cada nível de serviço</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.highlighted ? 'pricing-card--highlighted' : ''}`}>
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <p className="pricing-desc">{plan.description}</p>
              </div>
              <div className="pricing-price">
                <span className="price-value">{plan.price}</span>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contato" className={`button ${plan.highlighted ? 'button--primary' : 'button--secondary'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
