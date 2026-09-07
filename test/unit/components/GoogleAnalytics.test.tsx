import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from '@/lib/site';

describe('GoogleAnalytics', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('não renderiza scripts sem consentimento (LGPD)', () => {
    const { container } = render(<GoogleAnalytics />);
    expect(container.querySelectorAll('script')).toHaveLength(0);
  });

  it('renderiza scripts quando já há consentimento salvo', async () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    const { container } = render(<GoogleAnalytics />);

    await waitFor(() => {
      expect(container.querySelectorAll('script').length).toBeGreaterThan(0);
    });

    const scripts = Array.from(container.querySelectorAll('script'));
    const hasGtagScript = scripts.some(
      (script) =>
        script.getAttribute('src')?.includes('googletagmanager.com') ||
        script.textContent?.includes('gtag')
    );
    expect(hasGtagScript).toBe(true);
  });

  it('renderiza scripts quando o consentimento é dado após a montagem', async () => {
    const { container } = render(<GoogleAnalytics />);
    expect(container.querySelectorAll('script')).toHaveLength(0);

    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    act(() => {
      window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT));
    });

    await waitFor(() => {
      expect(container.querySelectorAll('script').length).toBeGreaterThan(0);
    });
  });

  it('não renderiza scripts quando o consentimento foi recusado', () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
    const { container } = render(<GoogleAnalytics />);
    expect(container.querySelectorAll('script')).toHaveLength(0);
  });

  it('não renderiza quando o GA é desativado por ambiente (id "0")', () => {
    const prevEnv = process.env.NEXT_PUBLIC_GA_ID;
    process.env.NEXT_PUBLIC_GA_ID = '0';
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');

    const { container } = render(<GoogleAnalytics />);
    expect(container.querySelectorAll('script')).toHaveLength(0);

    process.env.NEXT_PUBLIC_GA_ID = prevEnv;
  });
});