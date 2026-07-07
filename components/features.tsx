import { BarChart3, Zap, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Atendimento Rápido',
    description: 'Resposta ágil para emergências de TI e telecom. Resolução em poucas horas.'
  },
  {
    icon: Shield,
    title: 'Infraestrutura Segura',
    description: 'Proteção de dados, backup automático e recuperação de desastres garantida.'
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais certificados em suporte, telecom e treinamento corporativo.'
  },
  {
    icon: BarChart3,
    title: 'Relatórios Detalhados',
    description: 'Acompanhamento de performance, custos e recomendações de melhoria.'
  }
];

export default function FeaturesSection() {
  return (
    <section className="section section--features" id="features">
      <div className="layout-container">
        <div className="section-heading">
          <p className="eyebrow">Capacidades</p>
          <h2>Tudo que você precisa para seu negócio prosperar</h2>
        </div>
        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
