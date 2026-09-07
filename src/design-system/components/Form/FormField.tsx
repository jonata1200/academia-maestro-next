'use client';

import React from 'react';
import { Label } from '../Label';
import { Text } from '../Text';
import { cn } from '../../utils/cn';

export type FormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
};

export function FormField({ label, htmlFor, required, helperText, error, children, className }: FormFieldProps) {
  return (
    <div className={cn('w-full', className)}>
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>
      <div className="mt-1">{children}</div>
      {error ? (
        <Text as="p" size="sm" colorClassName="text-error" className="mt-1">
          {error}
        </Text>
      ) : helperText ? (
        <Text as="p" size="sm" className="mt-1">
          {helperText}
        </Text>
      ) : null}
    </div>
  );
}

