'use client';

import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export type AccordionItem = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpenIds?: string[];
};

export function Accordion({ items, multiple, defaultOpenIds = [] }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (multiple) return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
      return isOpen ? [] : [id];
    });
  };

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white">
      {items.map((item, idx) => {
        const isOpen = openIds.includes(item.id);
        const regionId = `${item.id}-region`;
        const buttonId = `${regionId}-btn`;

        return (
          <div key={item.id} className={cn(idx !== 0 && 'border-t border-gray-200')}>
            <button
              id={buttonId}
              type="button"
              className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-light-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info"
              aria-expanded={isOpen}
              aria-controls={regionId}
              onClick={() => toggle(item.id)}
              onKeyDown={(e) => {
                if (e.key === 'Escape' && isOpen) {
                  e.preventDefault();
                  toggle(item.id);
                }
              }}
            >
              <span className="font-semibold text-text-color">{item.title}</span>
              <span className="text-text-light" aria-hidden>
                {item.icon ?? (isOpen ? '−' : '+')}
              </span>
            </button>
            <div
              id={regionId}
              role="region"
              aria-labelledby={buttonId}
              className={cn('px-4 pb-4 text-text-light text-sm', !isOpen && 'hidden')}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

