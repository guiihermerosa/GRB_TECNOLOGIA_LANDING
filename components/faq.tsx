import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const faqs = [
  {
    question: 'Como solicito um orçamento para manutenção de computadores?',
    answer: 'Preencha o formulário de contato com suas informações ou clique no botão do WhatsApp para falar diretamente com nossa equipe.'
  },
  {
    question: 'Vocês fazem instalação elétrica e telecom junto?',
    answer: 'Sim. Atendemos projetos que envolvem infraestrutura elétrica, cabeamento de rede e equipamentos de telecomunicação.'
  },
  {
    question: 'Vocês oferecem treinamento para empresas e estudantes?',
    answer: 'Sim. Desenvolvemos treinamentos de informática adaptados a necessidades corporativas e individuais.'
  },
  {
    question: 'Como funciona o primeiro atendimento após o contato?',
    answer: 'Você recebe uma confirmação automática, nossos especialistas avaliam a solicitação e entram em contato para agendar ou apresentar a melhor solução.'
  }
];

export default function FaqSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" id="faq" aria-labelledby="faq-title">
      <div className="mx-auto grid w-full max-w-7xl gap-10">
        <div className="mx-auto grid max-w-3xl justify-items-center gap-4 text-center">
          <Badge variant="outline" className="border-white/10 bg-white/5 text-white">
            FAQ
          </Badge>
          <h2 id="faq-title" className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.question} className="border-white/10 bg-slate-950/70 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl text-white">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
