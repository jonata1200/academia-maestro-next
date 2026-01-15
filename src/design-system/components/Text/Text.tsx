import React from 'react';
import { cn } from '../../utils/cn';

type TextSize = 'sm' | 'base' | 'lg';
type TextWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  as?: 'p' | 'span' | 'div';
  size?: TextSize;
  weight?: TextWeight;
  colorClassName?: string;
  truncate?: boolean;
  lineClamp?: 2 | 3 | 4 | 5 | 6;
};

const sizeClasses: Record<TextSize, string> = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
};

const weightClasses: Record<TextWeight, string> = {
  light: 'font-light',
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const clampClasses: Record<NonNullable<TextProps['lineClamp']>, string> = {
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
  6: 'line-clamp-6',
};

export function Text({
  as = 'p',
  size = 'base',
  weight = 'regular',
  colorClassName = 'text-text-light',
  truncate,
  lineClamp,
  className,
  ...props
}: TextProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        colorClassName,
        truncate && 'truncate',
        lineClamp && clampClasses[lineClamp],
        className
      )}
      {...props}
    />
  );
}

