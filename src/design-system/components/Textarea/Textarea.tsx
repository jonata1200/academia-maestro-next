import React from 'react';
import { cn } from '../../utils/cn';

type TextareaSize = 'sm' | 'md' | 'lg';
type TextareaResize = 'none' | 'vertical' | 'both';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  size?: TextareaSize;
  error?: string;
  helperText?: string;
  resize?: TextareaResize;
  showCount?: boolean;
  maxLength?: number;
};

const sizeClasses: Record<TextareaSize, string> = {
  sm: 'min-h-[88px] text-sm px-3 py-2',
  md: 'min-h-[104px] text-base px-3 py-2',
  lg: 'min-h-[132px] text-base px-4 py-3',
};

const resizeClasses: Record<TextareaResize, string> = {
  none: 'resize-none',
  vertical: 'resize-y',
  both: 'resize',
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, id, size = 'md', error, helperText, resize = 'vertical', showCount, maxLength, value, ...props },
  ref
) {
  const describedByIds = [
    helperText ? `${id}-help` : null,
    error ? `${id}-error` : null,
    showCount ? `${id}-count` : null,
  ].filter(Boolean) as string[];

  const length =
    typeof value === 'string' ? value.length : typeof value === 'number' ? String(value).length : undefined;

  return (
    <div className={cn('w-full', className)}>
      <textarea
        ref={ref}
        id={id}
        className={cn(
          'w-full rounded-md border bg-white outline-none placeholder:text-text-light focus-visible:ring-2 focus-visible:ring-info disabled:opacity-50',
          error ? 'border-error' : 'border-gray-200',
          sizeClasses[size],
          resizeClasses[resize]
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedByIds.length ? describedByIds.join(' ') : undefined}
        maxLength={maxLength}
        value={value}
        {...props}
      />
      <div className="mt-1 flex items-center justify-between gap-3">
        <div className="min-w-0">
          {helperText ? (
            <p id={`${id}-help`} className="text-sm text-text-light">
              {helperText}
            </p>
          ) : null}
          {error ? (
            <p id={`${id}-error`} className="text-sm text-error">
              {error}
            </p>
          ) : null}
        </div>
        {showCount ? (
          <p id={`${id}-count`} className="text-sm text-text-light tabular-nums">
            {length ?? 0}
            {typeof maxLength === 'number' ? `/${maxLength}` : null}
          </p>
        ) : null}
      </div>
    </div>
  );
});

