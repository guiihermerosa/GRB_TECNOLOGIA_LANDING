import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GRB Tecnologia',
  url: 'https://grbtecnologia.com.br',
  logo: 'https://grbtecnologia.com.br/favicon.svg',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+55-18-3341-3450',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: ['Português']
    }
  ],
  sameAs: [
    'https://www.linkedin.com/',
    'https://www.facebook.com/'
  ]
};

export const metadata: Metadata = {
  title: 'GRB Tecnologia | Soluções em TI, Telecom e Informática',
  description: 'GRB Tecnologia oferece suporte técnico, manutenção de computadores, telecomunicações e soluções em informática com foco em atendimento premium e geração de leads.',
  metadataBase: new URL('https://grbtecnologia.com.br'),
  alternates: {
    canonical: 'https://grbtecnologia.com.br'
  },
  keywords: [
    'GRB Tecnologia',
    'manutenção de computadores',
    'telecomunicações',
    'treinamento em informática',
    'suporte técnico',
    'Cândido Mota'
  ],
  openGraph: {
    title: 'GRB Tecnologia | Soluções em TI, Telecom e Informática',
    description: 'Suporte técnico, manutenção, comércio e treinamentos em informática para empresas e clientes residenciais.',
    url: 'https://grbtecnologia.com.br',
    siteName: 'GRB Tecnologia',
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GRB Tecnologia',
    description: 'Acelere sua rotina de TI com soluções completas para computadores, telecom e treinamento em informática.'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  },
  manifest: '/manifest.json'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-50`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
