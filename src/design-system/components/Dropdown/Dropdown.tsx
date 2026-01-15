'use client';

import React, { useMemo, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Badge } from '../Badge';

export type DropdownItem =
  | { type?: 'item'; label: string; onSelect?: () => void; icon?: React.ReactNode; badge?: string; disabled?: boolean }
  | { type: 'separator' }
  | { type: 'group'; label: string; items: DropdownItem[] };

export type DropdownProps = {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
};

export function Dropdown({ trigger, items, align = 'left' }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => setOpen(false), open);

  const renderedItems = useMemo(() => {
    const renderList = (list: DropdownItem[], level = 0) =>
      list.map((item, idx) => {
        if (item.type === 'separator') return <div key={`sep-${level}-${idx}`} className="my-1 h-px bg-gray-200" />;
        if (item.type === 'group') {
          return (
            <div key={`grp-${level}-${idx}`} className="py-1">
              <p className="px-3 py-1 text-xs font-semibold text-text-light">{item.label}</p>
              {renderList(item.items, level + 1)}
            </div>
          );
        }
        const disabled = item.disabled;
        return (
          <button
            key={`it-${level}-${idx}`}
            type="button"
            role="menuitem"
            disabled={disabled}
            className={cn(
              'w-full px-3 py-2 rounded-md text-sm flex items-center justify-between gap-3 text-text-color hover:bg-light-gray',
              disabled && 'opacity-50 pointer-events-none'
            )}
            onClick={() => {
              item.onSelect?.();
              setOpen(false);
            }}
          >
            <span className="inline-flex items-center gap-2">
              {item.icon ? <span aria-hidden>{item.icon}</span> : null}
              {item.label}
            </span>
            {item.badge ? <Badge size="sm">{item.badge}</Badge> : null}
          </button>
        );
      });
    return renderList(items);
  }, [items]);

  return (
    <div className="relative inline-flex" ref={ref}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex"
      >
        {trigger}
      </button>
      {open ? (
        <div
          role="menu"
          className={cn(
            'absolute z-50 mt-2 min-w-[220px] rounded-md border border-gray-200 bg-white p-2 shadow-md',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          {renderedItems}
        </div>
      ) : null}
    </div>
  );
}

