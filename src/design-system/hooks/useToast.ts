'use client';

import React, { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';

export type ToastItem = {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  durationMs?: number; // 0 = não fecha automaticamente
};

type ToastContextValue = {
  toasts: ToastItem[];
  push: (toast: Omit<ToastItem, 'id'>) => string;
  remove: (id: string) => void;
  clear: () => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef(new Map<string, number>());

  const remove = useCallback((id: string) => {
    const t = timers.current.get(id);
    if (t) window.clearTimeout(t);
    timers.current.delete(id);
    setToasts((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const clear = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current.clear();
    setToasts([]);
  }, []);

  const push = useCallback(
    (toast: Omit<ToastItem, 'id'>) => {
      const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const durationMs = toast.durationMs ?? 4000;

      setToasts((prev) => [...prev, { ...toast, id }]);

      if (durationMs > 0) {
        const timeout = window.setTimeout(() => remove(id), durationMs);
        timers.current.set(id, timeout);
      }

      return id;
    },
    [remove]
  );

  const value = useMemo<ToastContextValue>(() => ({ toasts, push, remove, clear }), [toasts, push, remove, clear]);

  return React.createElement(ToastContext.Provider, { value }, children as ReactNode);
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast deve ser usado dentro de <ToastProvider />');
  }
  return ctx;
}

