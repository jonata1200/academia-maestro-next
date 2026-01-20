import React from 'react';
import { cn } from '../../utils/cn';

type CardVariant = 'default' | 'outlined' | 'elevated';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
};

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-white',
  outlined: 'bg-white border border-gray-200',
  elevated: 'bg-white shadow-md',
};

export function Card({
  variant = 'outlined',
  header,
  footer,
  imageSrc,
  imageAlt,
  actions,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div className={cn('rounded-lg overflow-hidden', variantClasses[variant], className)} {...props}>
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageSrc} alt={imageAlt ?? ''} className="w-full h-auto block" />
      ) : null}

      {header || actions ? (
        <div className="p-4 border-b border-gray-100 flex items-start justify-between gap-3">
          <div className="min-w-0">{header}</div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      ) : null}

      {children && (
        <div className={cn(
          // Aplica padding padrão sempre, a menos que seja sobrescrito por className
          'p-6'
        )}>
          {children}
        </div>
      )}

      {footer ? <div className="p-4 border-t border-gray-100">{footer}</div> : null}
    </div>
  );
}

