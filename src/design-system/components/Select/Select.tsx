import React from 'react';
import { cn } from '../../utils/cn';

type SelectSize = 'sm' | 'md' | 'lg';

export type SelectOption = { value: string; label: string; disabled?: boolean };

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> & {
  size?: SelectSize;
  error?: string;
  helperText?: string;
  placeholder?: string;
  options: SelectOption[];
};

const sizeClasses: Record<SelectSize, string> = {
  sm: 'h-9 text-sm px-3',
  md: 'h-10 text-base px-3',
  lg: 'h-12 text-base px-4',
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, id, size = 'md', error, helperText, placeholder, options, multiple, ...props },
  ref
) {
  const describedByIds = [helperText ? `${id}-help` : null, error ? `${id}-error` : null].filter(Boolean) as string[];

  return (
    <div className={cn('w-full', className)}>
      <select
        ref={ref}
        id={id}
        multiple={multiple}
        className={cn(
          'w-full rounded-md border bg-white outline-none focus-visible:ring-2 focus-visible:ring-info disabled:opacity-50',
          error ? 'border-error' : 'border-gray-200',
          sizeClasses[size]
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedByIds.length ? describedByIds.join(' ') : undefined}
        {...props}
      >
        {!multiple && placeholder ? (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        ) : null}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
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

