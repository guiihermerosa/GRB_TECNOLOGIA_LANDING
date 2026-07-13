'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import Button from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ModalProps = {
  open: boolean;
  title: string;
  description: string;
  actions?: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ open, title, description, actions, onClose }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(nextOpen) => !nextOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,36rem)] -translate-x-1/2 -translate-y-1/2">
          <Card className="border-white/10 bg-slate-950/95 shadow-[0_24px_80px_rgba(2,6,23,0.55)]">
            <CardHeader className="flex-row items-start justify-between gap-4">
              <div className="grid gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Atenção</p>
                <CardTitle id="modal-title" className="text-2xl text-white">
                  {title}
                </CardTitle>
                <CardDescription className="text-slate-300">{description}</CardDescription>
              </div>

              <Dialog.Close asChild>
                <Button variant="secondary" size="icon" className="shrink-0 border-white/10 bg-white/5 text-white hover:bg-white/10">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Fechar modal</span>
                </Button>
              </Dialog.Close>
            </CardHeader>

            {actions && <CardContent className="flex flex-col gap-3 sm:flex-row">{actions}</CardContent>}
          </Card>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
