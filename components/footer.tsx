'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <Card className="border-white/10 bg-slate-950/70 backdrop-blur">
          <CardContent className="grid gap-4 p-6">
            <Badge variant="outline" className="border-white/10 bg-white/5 text-white">
              GRB Tecnologia
            </Badge>
            <div className="grid gap-3">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                Conectando seu negócio com tecnologia e confiança.
              </h3>
              <p className="text-slate-300">Empresa: 60.161.914 GUILHERME ROSA DE BRITO | CNPJ: 60.161.914/0001-66</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-3 rounded-xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur">
          {[
            ['Serviços', '#servicos'],
            ['Depoimentos', '#depoimentos'],
            ['FAQ', '#faq'],
            ['Contato', '#form-contato'],
            ['Política de Privacidade', '/privacy'],
            ['Termos de Uso', '/terms'],
            ['LGPD', '/lgpd']
          ].map(([label, href]) => (
            <a key={label} href={href} className="text-slate-300 transition-colors hover:text-white">
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-5 w-full max-w-7xl">
        <Separator />
      </div>

      <div className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 GRB Tecnologia. Todos os direitos reservados.</p>
        <p>Política de Privacidade | Termos de Uso | LGPD</p>
      </div>
    </footer>
  );
}
