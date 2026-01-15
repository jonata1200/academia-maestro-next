import React from 'react';
import { cn } from '../../utils/cn';

type SpinnerSize = 'sm' | 'md' | 'lg';
type SpinnerVariant = 'primary' | 'neutral';

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
};

const sizeClasses: Record<SpinnerSize, string> = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-10 w-10 border-4',
};

const variantClasses: Record<SpinnerVariant, string> = {
  primary: 'text-primary',
  neutral: 'text-text-light',
};

export function Spinner({ size = 'md', variant = 'primary', label, className, ...props }: SpinnerProps) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)} {...props}>
      <div
        className={cn(
          'animate-spin rounded-full border-current border-t-transparent',
          sizeClasses[size],
          variantClasses[variant]
        )}
        role="status"
        aria-label={label ?? 'Carregando'}
      />
      {label ? <span className="text-sm text-text-light">{label}</span> : null}
    </div>
  );
}

