import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LgpdPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl items-start px-4 py-16 sm:px-6 lg:px-8">
      <Card className="border-white/10 bg-slate-950/70 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-3xl text-white">LGPD</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 text-slate-300">
          <p>A GRB Tecnologia conduz o tratamento de dados em conformidade com a LGPD.</p>
          <p>Coletamos apenas os dados necessários para tratar solicitações de contato e prestar serviços.</p>
          <p>Os titulares dos dados podem solicitar acesso, correção ou exclusão mediante contato.</p>
        </CardContent>
      </Card>
    </main>
  );
}
