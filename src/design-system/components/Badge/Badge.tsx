import React from 'react';
import { cn } from '../../utils/cn';

type BadgeVariant = 'neutral' | 'info' | 'success' | 'warning' | 'error';
type BadgeSize = 'sm' | 'md';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'bg-light-gray text-text-color',
  info: 'bg-info/10 text-info',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  error: 'bg-error/10 text-error',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
};

export function Badge({
  variant = 'neutral',
  size = 'sm',
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-semibold',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {leftIcon ? <span aria-hidden>{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span aria-hidden>{rightIcon}</span> : null}
    </span>
  );
}

