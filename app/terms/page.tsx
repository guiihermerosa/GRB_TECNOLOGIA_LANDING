import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl items-start px-4 py-16 sm:px-6 lg:px-8">
      <Card className="border-white/10 bg-slate-950/70 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Termos de Uso</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 text-slate-300">
          <p>Os termos de uso regulam o acesso e uso do site da GRB Tecnologia.</p>
          <p>Ao utilizar este site, você concorda com as condições de uso e com nossa política de privacidade.</p>
          <p>Nos reservamos o direito de alterar estes termos a qualquer momento, com aviso prévio em nosso site.</p>
        </CardContent>
      </Card>
    </main>
  );
}
