import React from 'react';
import Link from 'next/link';
import { cn } from '../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
  href?: string;
  asLink?: boolean;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-600 active:bg-primary-700',
  secondary: 'bg-secondary text-text-color border border-gray-200 hover:bg-light-gray',
  outline: 'border border-primary text-primary hover:bg-light-gray',
  ghost: 'text-text-color hover:bg-light-gray',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-5 text-base',
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  {
    className,
    variant = 'primary',
    size = 'md',
    fullWidth,
    loading,
    leftIcon,
    rightIcon,
    iconOnly,
    disabled,
    children,
    'aria-label': ariaLabel,
    href,
    asLink,
    ...props
  },
  ref
) {
  const isDisabled = disabled || loading;
  const computedAriaLabel = ariaLabel ?? (iconOnly ? 'Botão' : undefined);
  const classes = cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className);

  const content = loading ? (
    <span className="inline-flex items-center gap-2">
      <span
        className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        aria-hidden
      />
      {!iconOnly && <span>Carregando</span>}
    </span>
  ) : (
    <>
      {leftIcon && <span aria-hidden>{leftIcon}</span>}
      {!iconOnly && <span>{children}</span>}
      {rightIcon && <span aria-hidden>{rightIcon}</span>}
    </>
  );

  // Se href ou asLink for fornecido, renderiza como Link
  if (href || asLink) {
    return (
      <Link
        href={href || '#'}
        className={cn(classes, 'no-underline')}
        aria-label={computedAriaLabel}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  // Caso contrário, renderiza como button
  return (
    <button
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      className={classes}
      disabled={isDisabled}
      aria-disabled={isDisabled || undefined}
      aria-label={computedAriaLabel}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});
