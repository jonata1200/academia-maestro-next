import React from 'react';
import { render, screen } from '@testing-library/react';
import SobrePageClient from '@/app/sobre/SobrePageClient';

describe('SobrePageClient', () => {
  it('renderiza conteúdo da página', () => {
    render(<SobrePageClient />);
    expect(screen.getByText('Nossa Trajetória')).toBeInTheDocument();
  });
});
