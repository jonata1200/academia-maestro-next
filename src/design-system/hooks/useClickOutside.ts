'use client';

import { useEffect } from 'react';

export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  onOutside: (event: MouseEvent | TouchEvent) => void,
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return;

    function handler(event: MouseEvent | TouchEvent) {
      const el = ref.current;
      if (!el) return;
      if (event.target instanceof Node && el.contains(event.target)) return;
      onOutside(event);
    }

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [ref, onOutside, enabled]);
}

