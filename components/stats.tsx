import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { label: 'Clientes Atendidos', value: '200+' },
  { label: 'Anos de Experiência', value: '10+' },
  { label: 'Serviços Especializados', value: '15+' },
  { label: 'Taxa de Satisfação', value: '98%' }
];

export default function StatsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-white/10 bg-slate-950/70 backdrop-blur">
              <CardContent className="grid gap-2 p-6">
                <div className="text-3xl font-semibold tracking-[-0.04em] text-white">{stat.value}</div>
                <div className="text-sm uppercase tracking-[0.18em] text-slate-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
