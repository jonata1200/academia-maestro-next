import React from 'react';
import Link from 'next/link';
import { cn } from '../../utils/cn';

export type BreadcrumbItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  'aria-label'?: string;
  className?: string;
};

export function Breadcrumb({ items, separator = '/', className, 'aria-label': ariaLabel }: BreadcrumbProps) {
  return (
    <nav aria-label={ariaLabel ?? 'Breadcrumb'} className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const content = (
            <span className={cn('inline-flex items-center gap-1', isLast ? 'text-text-color' : 'text-text-light')}>
              {item.icon ? <span aria-hidden>{item.icon}</span> : null}
              <span>{item.label}</span>
            </span>
          );

          return (
            <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link className="hover:text-primary" href={item.href}>
                  {content}
                </Link>
              ) : (
                content
              )}
              {!isLast ? <span aria-hidden className="text-text-light">{separator}</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

