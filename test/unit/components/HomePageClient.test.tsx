import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePageClient from '@/app/HomePageClient';

describe('HomePageClient', () => {
  it('renderiza hero section', () => {
    render(<HomePageClient />);
    expect(screen.getByText(/A Música Transforma Vidas/i)).toBeInTheDocument();
  });

  it('renderiza seção "Por que escolher a Maestro?"', () => {
    render(<HomePageClient />);
    expect(screen.getByText('Por que escolher a Maestro?')).toBeInTheDocument();
    expect(screen.getByText('Tradição e Experiência')).toBeInTheDocument();
    expect(screen.getByText('Professores Qualificados')).toBeInTheDocument();
  });

  it('renderiza carrossel de instrumentos', () => {
    render(<HomePageClient />);
    const violoes = screen.getAllByAltText('Violão');
    expect(violoes.length).toBeGreaterThan(0);
    expect(screen.getAllByAltText('Guitarra').length).toBeGreaterThan(0);
  });
});
