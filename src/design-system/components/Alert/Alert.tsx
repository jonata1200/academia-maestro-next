import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../Button';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  action?: { label: string; onClick: () => void };
};

const variantClasses: Record<AlertVariant, string> = {
  info: 'border-info/30 bg-info/5 text-text-color',
  success: 'border-success/30 bg-success/5 text-text-color',
  warning: 'border-warning/30 bg-warning/5 text-text-color',
  error: 'border-error/30 bg-error/5 text-text-color',
};

const defaultIcons: Record<AlertVariant, string> = {
  info: 'i',
  success: '✓',
  warning: '!',
  error: '×',
};

export function Alert({
  variant = 'info',
  title,
  description,
  icon,
  onClose,
  action,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn('w-full rounded-md border p-4', variantClasses[variant], className)}
      {...props}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            'mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border text-sm font-bold',
            variant === 'info' && 'border-info/40 text-info',
            variant === 'success' && 'border-success/40 text-success',
            variant === 'warning' && 'border-warning/40 text-warning',
            variant === 'error' && 'border-error/40 text-error'
          )}
          aria-hidden
        >
          {icon ?? defaultIcons[variant]}
        </div>

        <div className="min-w-0 flex-1">
          {title ? <p className="font-semibold text-text-color">{title}</p> : null}
          {description ? <p className="mt-1 text-sm text-text-light">{description}</p> : null}
          {action ? (
            <div className="mt-3">
              <Button variant="outline" size="sm" onClick={action.onClick}>
                {action.label}
              </Button>
            </div>
          ) : null}
        </div>

        {onClose ? (
          <button
            type="button"
            className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-text-light hover:bg-light-gray"
            onClick={onClose}
            aria-label="Fechar alerta"
          >
            ×
          </button>
        ) : null}
      </div>
    </div>
  );
}

