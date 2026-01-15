import React from 'react';
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
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-info disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-[#0000E6] active:bg-[#0000CC]',
  secondary: 'bg-secondary text-text-color border border-gray-200 hover:bg-light-gray',
  outline: 'border border-primary text-primary hover:bg-light-gray',
  ghost: 'text-text-color hover:bg-light-gray',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-5 text-base',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
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
    ...props
  },
  ref
) {
  const isDisabled = disabled || loading;
  const computedAriaLabel = ariaLabel ?? (iconOnly ? 'Botão' : undefined);

  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
      disabled={isDisabled}
      aria-disabled={isDisabled || undefined}
      aria-label={computedAriaLabel}
      {...props}
    >
      {loading ? (
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
      )}
    </button>
  );
});

