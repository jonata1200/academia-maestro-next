'use client';

import { useCallback, useState } from 'react';

export function useModal(initialOpen = false) {
  const [open, setOpen] = useState(initialOpen);
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  const onToggle = useCallback(() => setOpen((v) => !v), []);

  return { open, setOpen, onOpen, onClose, onToggle } as const;
}

