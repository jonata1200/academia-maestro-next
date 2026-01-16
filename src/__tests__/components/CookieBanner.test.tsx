import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CookieBanner from '@/components/CookieBanner';

describe('CookieBanner', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renderiza quando cookies não foram aceitos', async () => {
    render(<CookieBanner />);
    await waitFor(() => {
      expect(screen.getByText(/utilizamos cookies/i)).toBeInTheDocument();
    });
  });

  it('não renderiza quando cookies foram aceitos', async () => {
    localStorage.setItem('cookie_consent', 'true');
    render(<CookieBanner />);
    await waitFor(() => {
      expect(screen.queryByText(/utilizamos cookies/i)).not.toBeInTheDocument();
    });
  });

  it('salva consentimento no localStorage ao aceitar', async () => {
    const user = userEvent.setup();
    render(<CookieBanner />);
    
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /aceitar/i })).toBeInTheDocument();
    });

    const acceptButton = screen.getByRole('button', { name: /aceitar/i });
    await user.click(acceptButton);

    await waitFor(() => {
      expect(localStorage.getItem('cookie_consent')).toBe('true');
      expect(screen.queryByText(/utilizamos cookies/i)).not.toBeInTheDocument();
    });
  });

  it('renderiza link para política de cookies', async () => {
    render(<CookieBanner />);
    await waitFor(() => {
      const link = screen.getByRole('link', { name: 'Política de Cookies' });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/politica-de-cookies');
    });
  });
});
