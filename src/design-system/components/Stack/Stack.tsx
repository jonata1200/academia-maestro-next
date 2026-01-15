import React from 'react';
import { cn } from '../../utils/cn';

type StackDirection = 'row' | 'column';

export type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: StackDirection;
  gap?: number;
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  wrap?: boolean;
};

export function Stack({
  direction = 'column',
  gap = 4,
  align,
  justify,
  wrap,
  className,
  style,
  ...props
}: StackProps) {
  return (
    <div
      className={cn('flex', direction === 'row' ? 'flex-row' : 'flex-col', wrap && 'flex-wrap', className)}
      style={{ gap, alignItems: align, justifyContent: justify, ...style }}
      {...props}
    />
  );
}

