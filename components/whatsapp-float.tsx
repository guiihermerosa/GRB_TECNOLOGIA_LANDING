'use client';

import { ArrowUpRight } from 'lucide-react';

export default function WhatsAppFloat() {
  const message = encodeURIComponent('Olá! Encontrei o site de vocês e gostaria de solicitar um orçamento.');
  return (
    <div className="floating-card" aria-label="Abrir conversa no WhatsApp">
      <a
        className="floating-button"
        href={`https://api.whatsapp.com/send?phone=5518988085156&text=${message}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <ArrowUpRight size={24} aria-hidden="true" />
        <span className="sr-only">Abrir conversa no WhatsApp</span>
      </a>
    </div>
  );
}
