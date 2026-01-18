import React from 'react';
import { render, screen } from '@testing-library/react';
import ContatoPageClient from '@/app/contato/ContatoPageClient';

describe('ContatoPageClient', () => {
  it('renderiza página de contato', () => {
    render(<ContatoPageClient />);
    expect(screen.getByText('Nossas Unidades')).toBeInTheDocument();
  });

  it('renderiza UnitsMap', () => {
    render(<ContatoPageClient />);
    expect(screen.getByText('Maestro Ceilândia')).toBeInTheDocument();
  });
});
