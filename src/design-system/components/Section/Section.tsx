import React from 'react';
import { cn } from '../../utils/cn';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Text } from '../Text';

type SectionVariant = 'default' | 'light' | 'dark';

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  title?: string;
  description?: string;
  variant?: SectionVariant;
  padded?: boolean;
};

const variantClasses: Record<SectionVariant, string> = {
  default: 'bg-white',
  light: 'bg-light-gray',
  dark: 'bg-dark-blue text-white',
};

export function Section({
  title,
  description,
  variant = 'default',
  padded = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(variantClasses[variant], padded && 'py-10', className)} {...props}>
      <Container>
        {title ? (
          <div className="mb-6">
            <Heading as={2} size="xl" colorClassName={variant === 'dark' ? 'text-white' : 'text-dark-blue'}>
              {title}
            </Heading>
            {description ? (
              <Text colorClassName={variant === 'dark' ? 'text-white/80' : 'text-text-light'}>
                {description}
              </Text>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}

