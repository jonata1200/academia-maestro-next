import React from 'react';
import { render } from '@testing-library/react';
import ManutencaoPageClient from '@/app/manutencao/ManutencaoPageClient';

describe('ManutencaoPageClient', () => {
  it('renderiza página de manutenção', () => {
    const { container } = render(<ManutencaoPageClient />);
    expect(container).toBeInTheDocument();
  });
});
