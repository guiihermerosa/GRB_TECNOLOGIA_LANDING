'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

import Button from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-30" aria-live="polite">
      <Button
        variant="secondary"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Abrir chat de atendimento"
        className="border-white/10 bg-slate-950/90 text-white shadow-lg shadow-black/20 hover:bg-white/10"
      >
        {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
        {open ? 'Fechar chat' : 'Atendimento online'}
      </Button>

      {open && (
        <Card className="mt-3 w-[20rem] border-white/10 bg-slate-950/95 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur">
          <CardContent className="grid gap-4 p-4 text-slate-300">
            <p>
              <strong className="text-white">Olá!</strong> Em breve sua solicitação será respondida. Enquanto isso, clique no botão abaixo para falar pelo WhatsApp.
            </p>
            <Button
              href="https://api.whatsapp.com/send?phone=5518988085156&text=Ol%C3%A1!%20Encontrei%20o%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
            >
              Abrir WhatsApp
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
