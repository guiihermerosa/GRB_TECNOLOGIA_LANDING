import { Check } from 'lucide-react';

import Button from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: 'Starter',
    price: 'Sob orçamento',
    description: 'Ideal para pequenos negócios e residências',
    features: ['Suporte técnico por email', 'Atendimento em até 48h', 'Diagnóstico remoto', 'Documentação de problemas'],
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
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="pricing">
      <div className="mx-auto grid w-full max-w-7xl gap-10">
        <div className="mx-auto grid max-w-3xl justify-items-center gap-4 text-center">
          <Badge variant="outline" className="border-white/10 bg-white/5 text-white">
            Planos
          </Badge>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">Flexibilidade e escalabilidade em cada nível de serviço</p>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={[
                'border-white/10 bg-slate-950/70 backdrop-blur',
                plan.highlighted ? 'border-cyan-400/30 shadow-[0_24px_80px_rgba(6,182,212,0.18)]' : ''
              ].join(' ')}
            >
              <CardHeader className="gap-3">
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <CardDescription className="text-slate-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="text-3xl font-semibold tracking-[-0.04em] text-white">{plan.price}</div>
                <ul className="grid gap-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="#contato"
                  variant={plan.highlighted ? 'default' : 'secondary'}
                  className={plan.highlighted ? '' : 'border-white/10 bg-white/5 text-white hover:bg-white/10'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
