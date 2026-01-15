import React from 'react';
import { cn } from '../../utils/cn';

type InputSize = 'sm' | 'md' | 'lg';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: InputSize;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const sizeClasses: Record<InputSize, string> = {
  sm: 'h-9 text-sm px-3',
  md: 'h-10 text-base px-3',
  lg: 'h-12 text-base px-4',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, size = 'md', error, helperText, leftIcon, rightIcon, id, ...props },
  ref
) {
  const describedByIds = [
    helperText ? `${id}-help` : null,
    error ? `${id}-error` : null,
  ].filter(Boolean) as string[];

  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          'flex items-center gap-2 rounded-md border bg-white',
          error ? 'border-error' : 'border-gray-200',
          'focus-within:ring-2 focus-within:ring-info'
        )}
      >
        {leftIcon ? <span className="pl-3 text-text-light" aria-hidden>{leftIcon}</span> : null}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full bg-transparent outline-none placeholder:text-text-light disabled:opacity-50',
            sizeClasses[size],
            leftIcon && 'pl-0',
            rightIcon && 'pr-0'
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedByIds.length ? describedByIds.join(' ') : undefined}
          {...props}
        />
        {rightIcon ? <span className="pr-3 text-text-light" aria-hidden>{rightIcon}</span> : null}
      </div>
      {helperText ? (
        <p id={`${id}-help`} className="mt-1 text-sm text-text-light">
          {helperText}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
});

