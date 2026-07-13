import { BarChart3, Shield, Users, Zap } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="features">
      <div className="mx-auto grid w-full max-w-7xl gap-10">
        <div className="mx-auto grid max-w-3xl justify-items-center gap-4 text-center">
          <Badge variant="outline" className="border-white/10 bg-white/5 text-white">
            Capacidades
          </Badge>
          <h2 className="max-w-[16ch] text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Tudo o que você precisa para seu negócio prosperar
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Um conjunto de serviços pensado para reduzir atrito, aumentar previsibilidade e deixar sua equipe mais produtiva.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-white/10 bg-slate-950/70 backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                <CardHeader className="gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-400">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
