'use client';

import { ArrowUpRight } from 'lucide-react';

export default function WhatsAppFloat() {
  const message = encodeURIComponent('Olá! Encontrei o site de vocês e gostaria de solicitar um orçamento.');

  return (
    <div className="fixed bottom-5 right-5 z-30 sm:bottom-6 sm:right-6">
      <a
        className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-transform hover:-translate-y-0.5 hover:scale-105"
        href={`https://api.whatsapp.com/send?phone=5518988085156&text=${message}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Abrir conversa no WhatsApp"
      >
        <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
