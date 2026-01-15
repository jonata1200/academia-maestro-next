'use client';

import React, { useMemo, useState } from 'react';
import { cn } from '../../utils/cn';

export type TabItem = { id: string; label: string; content: React.ReactNode; disabled?: boolean };

export type TabsProps = {
  items: TabItem[];
  orientation?: 'horizontal' | 'vertical';
  defaultActiveId?: string;
  variant?: 'underline' | 'pill';
};

export function Tabs({ items, orientation = 'horizontal', defaultActiveId, variant = 'underline' }: TabsProps) {
  const firstEnabled = items.find((i) => !i.disabled)?.id;
  const [activeId, setActiveId] = useState(defaultActiveId ?? firstEnabled ?? items[0]?.id);

  const active = useMemo(() => items.find((i) => i.id === activeId) ?? items[0], [items, activeId]);
  const dirClass = orientation === 'vertical' ? 'flex-row' : 'flex-col';
  const listClass = orientation === 'vertical' ? 'flex-col w-56' : 'flex-row';

  return (
    <div className={cn('flex gap-4', dirClass)}>
      <div role="tablist" aria-orientation={orientation} className={cn('flex gap-2', listClass)}>
        {items.map((item) => {
          const selected = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${item.id}-panel`}
              disabled={item.disabled}
              tabIndex={selected ? 0 : -1}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info disabled:opacity-50',
                variant === 'underline' &&
                  cn(
                    'rounded-none border-b-2',
                    selected ? 'border-primary text-primary' : 'border-transparent text-text-color hover:text-primary'
                  ),
                variant === 'pill' &&
                  cn(selected ? 'bg-primary text-white' : 'bg-light-gray text-text-color hover:bg-gray-200')
              )}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(e) => {
                const enabledItems = items.filter((i) => !i.disabled);
                const index = enabledItems.findIndex((i) => i.id === activeId);
                const prev = enabledItems[(index - 1 + enabledItems.length) % enabledItems.length];
                const next = enabledItems[(index + 1) % enabledItems.length];

                const isHorizontal = orientation === 'horizontal';
                if ((isHorizontal && e.key === 'ArrowLeft') || (!isHorizontal && e.key === 'ArrowUp')) {
                  e.preventDefault();
                  setActiveId(prev.id);
                }
                if ((isHorizontal && e.key === 'ArrowRight') || (!isHorizontal && e.key === 'ArrowDown')) {
                  e.preventDefault();
                  setActiveId(next.id);
                }
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${active?.id}-panel`}
        role="tabpanel"
        aria-labelledby={active?.id}
        className="flex-1 rounded-md border border-gray-200 bg-white p-4"
      >
        {active?.content}
      </div>
    </div>
  );
}

