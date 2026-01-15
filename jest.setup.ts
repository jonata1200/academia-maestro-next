import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import React, { type ReactNode } from 'react';

afterEach(() => {
  cleanup();
});

// next/image -> img
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => React.createElement('img', props),
}));

// next/link -> <a>
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string | { pathname?: string };
    children: ReactNode;
  }) =>
    React.createElement(
      'a',
      { href: typeof href === 'string' ? href : href?.pathname ?? '', ...(rest as Record<string, unknown>) },
      children
    ),
}));

// next/navigation mocks (App Router)
jest.mock('next/navigation', () => ({
  __esModule: true,
  usePathname: () => '/',
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
}));

// matchMedia for responsive tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});

