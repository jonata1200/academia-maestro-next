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
  'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-600 active:bg-primary-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:shadow-xl',
  secondary:
    'bg-white text-text-color border border-gray-300 hover:border-gray-400 hover:bg-gray-50 active:bg-gray-100 shadow-md hover:shadow-lg',
  outline:
    'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white active:bg-primary-700 active:border-primary-700 shadow-md hover:shadow-lg',
  ghost:
    'text-text-color bg-transparent hover:bg-gray-100 active:bg-gray-200 focus-visible:bg-gray-100',
};

// Tamanhos do botão com padding balanceado para bordas arredondadas
const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-6 text-sm',
  md: 'h-11 px-8 text-base',
  lg: 'h-12 px-10 text-base',
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
