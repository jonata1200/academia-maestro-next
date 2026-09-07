import React from 'react';
import { cn } from '../../utils/cn';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingWeight = 'light' | 'regular' | 'semibold' | 'bold';

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingLevel;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: HeadingWeight;
  colorClassName?: string;
};

const sizeClasses: Record<NonNullable<HeadingProps['size']>, string> = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
};

const weightClasses: Record<HeadingWeight, string> = {
  light: 'font-light',
  regular: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export function Heading({
  as = 2,
  size = 'lg',
  weight = 'semibold',
  colorClassName = 'text-dark-blue',
  className,
  ...props
}: HeadingProps) {
  const Tag = (`h${as}` as unknown) as React.ElementType;
  return (
    <Tag className={cn(colorClassName, sizeClasses[size], weightClasses[weight], className)} {...props} />
  );
}

