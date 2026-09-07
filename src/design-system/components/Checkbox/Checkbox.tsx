'use client';

import React from 'react';
import { cn } from '../../utils/cn';

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: React.ReactNode;
  helperText?: string;
  indeterminate?: boolean;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { id, label, helperText, indeterminate, className, ...props },
  ref
) {
  const innerRef = React.useRef<HTMLInputElement | null>(null);
  React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

  React.useEffect(() => {
    if (innerRef.current) innerRef.current.indeterminate = !!indeterminate;
  }, [indeterminate]);

  return (
    <div className={cn('flex items-start gap-2', className)}>
      <input
        ref={innerRef}
        id={id}
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus-visible:ring-2 focus-visible:ring-info"
        {...props}
      />
      {label || helperText ? (
        <div className="min-w-0">
          {label ? (
            <label htmlFor={id} className="text-sm font-medium text-text-color">
              {label}
            </label>
          ) : null}
          {helperText ? <p className="text-sm text-text-light">{helperText}</p> : null}
        </div>
      ) : null}
    </div>
  );
});

