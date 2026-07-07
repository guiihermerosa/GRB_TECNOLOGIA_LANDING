'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chat-widget" aria-live="polite">
      <button className="chat-toggle button button--secondary" onClick={() => setOpen((prev) => !prev)} aria-label="Abrir chat de atendimento">
        {open ? <X size={18} /> : <MessageCircle size={18} />} {open ? 'Fechar chat' : 'Atendimento online'}
      </button>
      {open && (
        <div className="chat-panel">
          <p><strong>Olá!</strong> Em breve sua solicitação será respondida. Enquanto isso, clique no botão abaixo para falar pelo WhatsApp.</p>
          <a className="button button--primary" href="https://api.whatsapp.com/send?phone=5518988085156&text=Ol%C3%A1!%20Encontrei%20o%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noreferrer">
            Abrir WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
