import React from 'react';
import { cn } from '../../utils/cn';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Text } from '../Text';

export type HeroProps = {
  title: string;
  subtitle?: string;
  backgroundImageUrl?: string;
  cta?: React.ReactNode;
  align?: 'left' | 'center';
};

export function Hero({ title, subtitle, backgroundImageUrl, cta, align = 'left' }: HeroProps) {
  return (
    <section
      className={cn(
        'relative py-16',
        backgroundImageUrl ? 'text-white' : 'bg-light-gray text-text-color'
      )}
      style={
        backgroundImageUrl
          ? { backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : undefined
      }
    >
      {backgroundImageUrl ? <div className="absolute inset-0 bg-black/50" aria-hidden /> : null}
      <Container className="relative">
        <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
          <Heading as={1} size="xl" colorClassName={backgroundImageUrl ? 'text-white' : 'text-dark-blue'}>
            {title}
          </Heading>
          {subtitle ? (
            <Text className="mt-4" colorClassName={backgroundImageUrl ? 'text-white/80' : 'text-text-light'}>
              {subtitle}
            </Text>
          ) : null}
          {cta ? <div className="mt-6">{cta}</div> : null}
        </div>
      </Container>
    </section>
  );
}

