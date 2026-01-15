'use client';

import { useEffect } from 'react';

export function useKeyboard(
  keys: string[] | string,
  onKeyDown: (event: KeyboardEvent) => void,
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return;
    const keyList = Array.isArray(keys) ? keys : [keys];

    function handler(event: KeyboardEvent) {
      if (!keyList.includes(event.key)) return;
      onKeyDown(event);
    }

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [keys, onKeyDown, enabled]);
}

