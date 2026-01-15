'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../utils/cn';
import { useClickOutside } from '../../hooks/useClickOutside';

export type NavItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
};

export type NavProps = {
  items: NavItem[];
  orientation?: 'horizontal' | 'vertical';
};

export function Nav({ items, orientation = 'horizontal' }: NavProps) {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  useClickOutside(wrapperRef, () => setOpenIndex(null), openIndex !== null);

  const isHorizontal = orientation === 'horizontal';

  const activeHref = useMemo(() => pathname ?? '', [pathname]);

  return (
    <div ref={wrapperRef} className={cn('relative', isHorizontal ? '' : 'w-full')}>
      <ul className={cn('flex gap-2', isHorizontal ? 'flex-row items-center' : 'flex-col')}>
        {items.map((item, idx) => {
          const isActive = item.href ? activeHref === item.href : false;
          const hasChildren = !!item.children?.length;
          return (
            <li key={`${item.label}-${idx}`} className="relative">
              {item.href ? (
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition-colors',
                    isActive ? 'text-primary' : 'text-text-color hover:text-primary hover:bg-light-gray'
                  )}
                >
                  {item.icon ? <span aria-hidden>{item.icon}</span> : null}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-text-color hover:bg-light-gray"
                  onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
                  aria-expanded={openIndex === idx}
                >
                  {item.icon ? <span aria-hidden>{item.icon}</span> : null}
                  <span>{item.label}</span>
                  {hasChildren ? <span aria-hidden className="text-text-light">▾</span> : null}
                </button>
              )}

              {hasChildren && openIndex === idx ? (
                <ul
                  className={cn(
                    'absolute z-50 mt-2 min-w-[200px] rounded-md border border-gray-200 bg-white p-2 shadow-md',
                    isHorizontal ? 'left-0' : 'left-0'
                  )}
                  role="menu"
                >
                  {item.children!.map((child, cIdx) => (
                    <li key={`${child.label}-${cIdx}`}>
                      {child.href ? (
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-text-color hover:bg-light-gray"
                          role="menuitem"
                          onClick={() => setOpenIndex(null)}
                        >
                          {child.label}
                        </Link>
                      ) : (
                        <span className="block px-3 py-2 text-sm text-text-light">{child.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

