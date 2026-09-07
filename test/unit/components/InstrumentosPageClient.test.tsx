import React from 'react';
import { render } from '@testing-library/react';
import InstrumentosPageClient from '@/app/instrumentos/InstrumentosPageClient';

describe('InstrumentosPageClient', () => {
  it('renderiza página de instrumentos', () => {
    const { container } = render(<InstrumentosPageClient />);
    expect(container).toBeInTheDocument();
  });
});
