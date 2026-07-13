import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl items-start px-4 py-16 sm:px-6 lg:px-8">
      <Card className="border-white/10 bg-slate-950/70 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Política de Privacidade</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 text-slate-300">
          <p>Esta política descreve como a GRB Tecnologia coleta, utiliza e protege suas informações pessoais.</p>
          <p>Utilizamos dados de contato apenas para responder requisições e melhorar a comunicação com clientes.</p>
          <p>Não compartilhamos dados com terceiros sem consentimento, exceto quando exigido por lei.</p>
        </CardContent>
      </Card>
    </main>
  );
}
