import React from 'react';
import { render } from '@testing-library/react';
import GoogleAnalytics from '@/components/GoogleAnalytics';

describe('GoogleAnalytics', () => {
  it('renderiza scripts do GA', () => {
    const { container } = render(<GoogleAnalytics />);
    const scripts = container.querySelectorAll('script');
    expect(scripts.length).toBeGreaterThan(0);
  });

  it('renderiza script com ID válido', () => {
    const { container } = render(<GoogleAnalytics />);
    const scripts = container.querySelectorAll('script');
    const hasGtagScript = Array.from(scripts).some(
      (script) => script.getAttribute('src')?.includes('googletagmanager.com') || script.textContent?.includes('gtag')
    );
    expect(hasGtagScript).toBe(true);
  });
});
