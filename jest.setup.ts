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

// swiper mock
jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: ReactNode }) =>
    React.createElement('div', { 'data-testid': 'swiper' }, children),
  SwiperSlide: ({ children }: { children: ReactNode }) =>
    React.createElement('div', { 'data-testid': 'swiper-slide' }, children),
}));

jest.mock('swiper/modules', () => ({
  Navigation: {},
  Pagination: {},
  Autoplay: {},
}));

jest.mock('swiper/css', () => ({}));
jest.mock('swiper/css/pagination', () => ({}));
jest.mock('swiper/css/navigation', () => ({}));

// next/script mock
jest.mock('next/script', () => ({
  __esModule: true,
  default: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) =>
    React.createElement('script', props as Record<string, unknown>, children),
}));

