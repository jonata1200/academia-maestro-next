import React from 'react';
import { cn } from '../../utils/cn';

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: number;
};

export function Grid({ columns = 3, gap = 16, className, style, ...props }: GridProps) {
  return (
    <div
      className={cn('grid', className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap, ...style }}
      {...props}
    />
  );
}

