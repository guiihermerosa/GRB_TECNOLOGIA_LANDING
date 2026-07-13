'use client';

import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Sparkles } from 'lucide-react';

import Button from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { number: '200+', text: 'Clientes atendidos', icon: CheckCircle2 },
  { number: '99.9%', text: 'Disponibilidade', icon: ShieldCheck },
  { number: '24/7', text: 'Suporte ativo', icon: Clock3 }
];

const tiles = [
  { title: 'Monitoramento', label: 'Tempo real', description: 'Saúde dos serviços, tickets e alertas em um só lugar.', accent: true },
  { title: 'SLA', label: 'Prioridade alta', description: 'Fluxo de atendimento rápido para incidentes críticos.' },
  { title: 'Backup', label: 'Rotina segura', description: 'Backup, proteção e recuperação com mais previsibilidade.' },
  { title: 'Segurança', label: 'Camadas ativas', description: 'Boas práticas para proteger dados e acesso.' },
  { title: 'Atendimento', label: 'Equipe próxima', description: 'Suporte consultivo com comunicação clara.' },
  { title: 'Resultado', label: 'Mais estabilidade', description: 'Menos interrupções e mais foco no negócio.', accent: true }
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="grid gap-6">
          <Badge variant="secondary" className="w-fit gap-2 border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] tracking-[0.22em] text-slate-100">
            <Sparkles className="h-3.5 w-3.5" />
            Infraestrutura TI sem complicações
          </Badge>

          <div className="grid gap-4">
            <h1 className="max-w-[11ch] text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Suporte técnico que cresce com o seu negócio
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Deixe a complexidade da TI com a gente. Cuidamos da sua infraestrutura,
              segurança e performance enquanto sua operação evolui.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#contato" size="lg" className="shadow-lg shadow-cyan-500/20">
              Solicitar orçamento
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contato" variant="secondary" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
              Conversar com especialista
            </Button>
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.text} className="border-white/10 bg-slate-950/70 backdrop-blur">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-2xl font-semibold tracking-[-0.04em] text-white">{stat.number}</div>
                      <div className="text-sm text-slate-400">{stat.text}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="overflow-hidden border-white/10 bg-slate-950/70 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur">
          <CardContent className="p-4 sm:p-5">
            <div className="grid min-h-[32rem] grid-cols-1 gap-3 sm:grid-cols-2">
              {tiles.map((tile, index) => (
                <div
                  key={tile.title}
                  className={[
                    'grid gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4',
                    index === 0 ? 'sm:row-span-2 sm:min-h-[19.5rem] bg-cyan-400/10' : '',
                    tile.accent ? 'bg-violet-500/10' : ''
                  ].join(' ')}
                >
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {tile.label}
                  </span>
                  <strong className="text-lg text-white">{tile.title}</strong>
                  <p className="text-sm leading-6 text-slate-400">{tile.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
