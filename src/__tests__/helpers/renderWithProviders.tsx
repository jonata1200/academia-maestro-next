import React, { type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { ToastProvider } from '@design-system/hooks';

export function renderWithProviders(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <ToastProvider>{children}</ToastProvider>;
  }
  return render(ui, { wrapper: Wrapper, ...options });
}

