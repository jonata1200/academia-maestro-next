import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../Button';

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function Pagination({ page, totalPages, onPageChange, className }: PaginationProps) {
  const safePage = clamp(page, 1, totalPages);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visible = pages.filter((p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 1);

  const withEllipsis: (number | '…')[] = [];
  for (const p of visible) {
    const last = withEllipsis[withEllipsis.length - 1];
    if (typeof last === 'number' && p - last > 1) withEllipsis.push('…');
    withEllipsis.push(p);
  }

  return (
    <nav aria-label="Paginação" className={cn('flex items-center gap-2', className)}>
      <Button size="sm" variant="outline" onClick={() => onPageChange(1)} disabled={safePage === 1} aria-label="Primeira página">
        «
      </Button>
      <Button size="sm" variant="outline" onClick={() => onPageChange(safePage - 1)} disabled={safePage === 1} aria-label="Página anterior">
        ‹
      </Button>

      <div className="flex items-center gap-1">
        {withEllipsis.map((p, idx) =>
          p === '…' ? (
            <span key={`e-${idx}`} className="px-2 text-text-light" aria-hidden>
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              className={cn(
                'h-9 min-w-9 rounded-md px-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info',
                p === safePage ? 'bg-primary text-white' : 'hover:bg-light-gray text-text-color'
              )}
              aria-current={p === safePage ? 'page' : undefined}
              onClick={() => onPageChange(p)}
            >
              {p}
            </button>
          )
        )}
      </div>

      <Button size="sm" variant="outline" onClick={() => onPageChange(safePage + 1)} disabled={safePage === totalPages} aria-label="Próxima página">
        ›
      </Button>
      <Button size="sm" variant="outline" onClick={() => onPageChange(totalPages)} disabled={safePage === totalPages} aria-label="Última página">
        »
      </Button>
    </nav>
  );
}

