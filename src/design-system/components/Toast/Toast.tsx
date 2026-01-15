'use client';

import React from 'react';
import { cn } from '../../utils/cn';
import type { ToastItem, ToastVariant } from '../../hooks/useToast';

export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type ToastViewportProps = {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
  position?: ToastPosition;
};

const variantClasses: Record<ToastVariant, string> = {
  info: 'border-info/30 bg-info/5',
  success: 'border-success/30 bg-success/5',
  warning: 'border-warning/30 bg-warning/5',
  error: 'border-error/30 bg-error/5',
};

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-4 right-4 items-end',
  'top-left': 'top-4 left-4 items-start',
  'bottom-right': 'bottom-4 right-4 items-end',
  'bottom-left': 'bottom-4 left-4 items-start',
};

export function ToastViewport({ toasts, onDismiss, position = 'top-right' }: ToastViewportProps) {
  return (
    <div className={cn('fixed z-[100001] flex flex-col gap-2', positionClasses[position])} aria-live="polite">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            'w-[min(420px,calc(100vw-2rem))] rounded-md border p-3 shadow-md bg-white',
            variantClasses[(t.variant ?? 'info') as ToastVariant]
          )}
          role="status"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              {t.title ? <p className="font-semibold text-text-color">{t.title}</p> : null}
              {t.description ? <p className="mt-0.5 text-sm text-text-light">{t.description}</p> : null}
            </div>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-text-light hover:bg-light-gray"
              onClick={() => onDismiss(t.id)}
              aria-label="Fechar notificação"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

