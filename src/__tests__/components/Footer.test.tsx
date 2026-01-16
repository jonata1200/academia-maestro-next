import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renderiza o logo', () => {
    render(<Footer />);
    const logo = screen.getByAltText('Logo Academia Maestro');
    expect(logo).toBeInTheDocument();
  });

  it('renderiza links de navegação', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Sobre Nós' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Instrumentos' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Manutenção' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contato' })).toBeInTheDocument();
  });

  it('renderiza informações de contato', () => {
    render(<Footer />);
    expect(screen.getByText(/Ceilândia: \(61\) 3371-5434/)).toBeInTheDocument();
    expect(screen.getByText(/Sobradinho: \(61\) 3387-1834/)).toBeInTheDocument();
  });

  it('renderiza link do Instagram', () => {
    render(<Footer />);
    const instagramLink = screen.getByRole('link', { name: 'Instagram' });
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/academiamaestroceilandia/');
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renderiza links legais', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Política de Privacidade' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Termos de Uso' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Política de Cookies' })).toBeInTheDocument();
  });

  it('renderiza botão voltar ao topo', () => {
    render(<Footer />);
    expect(screen.getByRole('button', { name: 'Voltar ao topo' })).toBeInTheDocument();
  });
});
