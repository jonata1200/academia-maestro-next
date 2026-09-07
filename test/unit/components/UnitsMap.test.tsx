import React from 'react';
import { render, screen } from '@testing-library/react';
import UnitsMap from '@/components/UnitsMap';

describe('UnitsMap', () => {
  it('renderiza ambas as unidades', () => {
    render(<UnitsMap />);
    expect(screen.getByText('Maestro Ceilândia')).toBeInTheDocument();
    expect(screen.getByText('Maestro Sobradinho')).toBeInTheDocument();
  });

  it('renderiza endereços das unidades', () => {
    render(<UnitsMap />);
    expect(screen.getByText(/St. M CNM 1 Bloco G Sala 315/)).toBeInTheDocument();
    expect(screen.getByText(/Quadra 08 Bloco 1 Lote 5 Loja 1/)).toBeInTheDocument();
  });

  it('renderiza mapas do Google Maps', () => {
    render(<UnitsMap />);
    const iframes = screen.getAllByTitle(/Mapa da localização/i);
    expect(iframes).toHaveLength(2);
    iframes.forEach((iframe) => {
      expect(iframe).toHaveAttribute('src');
      expect(iframe.getAttribute('src')).toContain('google.com/maps');
    });
  });

  it('renderiza links do WhatsApp', () => {
    render(<UnitsMap />);
    const whatsappLinks = screen.getAllByRole('link', { name: /Agendar Aula Experimental/i });
    expect(whatsappLinks).toHaveLength(2);
    whatsappLinks.forEach((link) => {
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).toContain('api.whatsapp.com');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
