import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const partners = ['Grupo Empresarial', 'Instituto de Treinamento', 'Operadora Local', 'Lojista de Informática'];

export default function PartnersSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="parceiros-title">
      <div className="mx-auto grid w-full max-w-7xl gap-10">
        <div className="mx-auto grid max-w-3xl justify-items-center gap-4 text-center">
          <Badge variant="outline" className="border-white/10 bg-white/5 text-white">
            Parceiros
          </Badge>
          <h2 id="parceiros-title" className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Parceiros e empresas atendidas
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((name) => (
            <Card key={name} className="border-white/10 bg-slate-950/70 backdrop-blur">
              <CardContent className="p-6">
                <strong className="text-white">{name}</strong>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
