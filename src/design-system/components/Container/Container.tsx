import React from 'react';
import { cn } from '../../utils/cn';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: 'div' | 'section' | 'main';
  padded?: boolean;
};

export function Container({ as = 'div', padded = true, className, ...props }: ContainerProps) {
  const Tag = as;
  return (
    <Tag className={cn('mx-auto w-full max-w-container', padded && 'px-5', className)} {...props} />
  );
}

