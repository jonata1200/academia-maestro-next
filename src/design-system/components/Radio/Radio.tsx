'use client';

import React from 'react';
import { cn } from '../../utils/cn';

export type RadioOption = { value: string; label: React.ReactNode; helperText?: string; disabled?: boolean };

export type RadioGroupProps = {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  options: RadioOption[];
  className?: string;
};

export function RadioGroup({ name, value, onChange, options, className }: RadioGroupProps) {
  return (
    <div role="radiogroup" className={cn('flex flex-col gap-2', className)}>
      {options.map((opt) => (
        <label key={opt.value} className={cn('flex items-start gap-2', opt.disabled && 'opacity-50')}>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            disabled={opt.disabled}
            onChange={() => onChange?.(opt.value)}
            className="mt-1 h-4 w-4 text-primary focus-visible:ring-2 focus-visible:ring-info"
            aria-checked={value === opt.value}
          />
          <span className="min-w-0">
            <span className="text-sm font-medium text-text-color">{opt.label}</span>
            {opt.helperText ? <span className="block text-sm text-text-light">{opt.helperText}</span> : null}
          </span>
        </label>
      ))}
    </div>
  );
}

