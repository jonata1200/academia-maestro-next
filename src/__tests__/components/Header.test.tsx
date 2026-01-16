import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

describe('Header', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  it('renderiza o logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('Logo Academia Maestro');
    expect(logo).toBeInTheDocument();
  });

  it('renderiza os links de navegação', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sobre Nós' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Instrumentos' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Manutenção' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contato' })).toBeInTheDocument();
  });

  it('abre e fecha o menu mobile', async () => {
    const user = userEvent.setup();
    render(<Header />);
    
    const menuButton = screen.getByRole('button', { name: 'Abrir menu' });
    expect(menuButton).toBeInTheDocument();

    await user.click(menuButton);
    await waitFor(() => {
      expect(document.body.style.overflow).toBe('hidden');
    });

    await user.click(menuButton);
    await waitFor(() => {
      expect(document.body.style.overflow).toBe('');
    });
  });

  it('fecha o menu ao clicar em um link', async () => {
    const user = userEvent.setup();
    render(<Header />);
    
    const menuButton = screen.getByRole('button', { name: 'Abrir menu' });
    await user.click(menuButton);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    await user.click(homeLink);

    await waitFor(() => {
      expect(document.body.style.overflow).toBe('');
    });
  });

  it('muda estilo ao fazer scroll', async () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    
    expect(header).toHaveClass('bg-transparent');

    Object.defineProperty(window, 'scrollY', { value: 20, writable: true });
    fireEvent.scroll(window);

    await waitFor(() => {
      expect(header).toHaveClass('bg-white');
    });
  });

  it('tem aria-label no botão do menu', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toBeInTheDocument();
  });
});
