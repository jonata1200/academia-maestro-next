'use client';

import React from 'react';
import { cn } from '../../utils/cn';

export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  onSubmit?: (event: React.FormEvent) => void;
};

export function Form({ className, ...props }: FormProps) {
  return <form className={cn('w-full', className)} {...props} />;
}

