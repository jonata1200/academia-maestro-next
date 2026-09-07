'use client';

import React, { useEffect, useId, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useKeyboard } from '../../hooks/useKeyboard';
import { Button } from '../Button';

type ModalSize = 'sm' | 'md' | 'lg' | 'fullscreen';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: ModalSize;
};

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
  fullscreen: 'max-w-none w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]',
};

export function Modal({ open, onClose, title, children, footer, size = 'md' }: ModalProps) {
  const titleId = useId();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const lastActiveEl = useRef<HTMLElement | null>(null);

  useClickOutside(contentRef, () => onClose(), open);
  useKeyboard('Escape', (e) => (e.preventDefault(), onClose()), open);

  const portalTarget = useMemo(() => (typeof document !== 'undefined' ? document.body : null), []);

  useEffect(() => {
    if (!open) return;
    lastActiveEl.current = document.activeElement as HTMLElement | null;
    // move foco para dentro do modal
    const t = window.setTimeout(() => {
      contentRef.current?.focus();
    }, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = '';
      lastActiveEl.current?.focus?.();
    };
  }, [open]);

  if (!open || !portalTarget) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100000] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 animate-in fade-in duration-200" aria-hidden />

      <div
        ref={contentRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        className={cn(
          'relative z-[1] max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] overflow-auto rounded-lg bg-white shadow-lg outline-none animate-in zoom-in-95 duration-200',
          sizeClasses[size]
        )}
      >
        <div className="flex items-start justify-between gap-3 border-b border-gray-100 p-4">
          {title ? <h2 id={titleId} className="text-lg font-semibold text-text-color">{title}</h2> : <span />}
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Fechar modal">
            ×
          </Button>
        </div>

        <div className="p-4">{children}</div>

        {footer ? <div className="border-t border-gray-100 p-4">{footer}</div> : null}
      </div>
    </div>,
    portalTarget
  );
}

