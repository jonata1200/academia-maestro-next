import React from 'react';
import { cn } from '../../utils/cn';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  size?: 'sm' | 'md';
  required?: boolean;
};

const sizeClasses: Record<NonNullable<LabelProps['size']>, string> = {
  sm: 'text-sm',
  md: 'text-base',
};

export function Label({ size = 'sm', required, className, children, ...props }: LabelProps) {
  return (
    <label className={cn('font-medium text-text-color', sizeClasses[size], className)} {...props}>
      {children}
      {required ? <span className="text-error ml-1" aria-hidden>*</span> : null}
    </label>
  );
}

