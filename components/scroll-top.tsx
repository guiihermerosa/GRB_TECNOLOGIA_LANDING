'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

import Button from '@/components/ui/button';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      variant="secondary"
      size="icon"
      className="fixed bottom-5 right-5 z-40 border-white/10 bg-slate-950/90 text-white shadow-lg shadow-black/25 hover:bg-white/10"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </Button>
  );
}
