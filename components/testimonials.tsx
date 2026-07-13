import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: 'Atendimento rápido, resolutivo e com excelente acompanhamento. Recomendo a GRB Tecnologia para qualquer necessidade de TI.',
    author: 'Cliente satisfeito'
  },
  {
    quote: 'A qualidade no suporte e o cuidado com os detalhes fizeram a diferença no nosso escritório. Profissionais confiáveis.',
    author: 'Empresário local'
  },
  {
    quote: 'Treinamento bem organizado, objetivo e esclarecedor. Minha equipe aprendeu a usar as ferramentas com segurança.',
    author: 'Gestor de projetos'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="depoimentos" aria-labelledby="depoimentos-title">
      <div className="mx-auto grid w-full max-w-7xl gap-10">
        <div className="mx-auto grid max-w-3xl justify-items-center gap-4 text-center">
          <Badge variant="outline" className="border-white/10 bg-white/5 text-white">
            Depoimentos
          </Badge>
          <h2 id="depoimentos-title" className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Clientes que encontraram mais eficiência com a GRB
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.author} className="border-white/10 bg-slate-950/70 backdrop-blur">
              <CardContent className="grid gap-4 p-6">
                <p className="text-slate-300">“{item.quote}”</p>
                <strong className="text-white">{item.author}</strong>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
