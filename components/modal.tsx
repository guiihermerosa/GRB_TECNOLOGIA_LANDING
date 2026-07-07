'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

type ModalProps = {
  open: boolean;
  title: string;
  description: string;
  actions?: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ open, title, description, actions, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <motion.div
        className="modal-panel"
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 24 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className="modal-header">
          <div>
            <p className="eyebrow">Atenção</p>
            <h3 id="modal-title">{title}</h3>
          </div>
          <button onClick={onClose} aria-label="Fechar modal" className="button button--secondary">
            <X size={18} />
          </button>
        </div>
        <p>{description}</p>
        {actions && <div className="modal-actions">{actions}</div>}
      </motion.div>
    </div>
  );
}
