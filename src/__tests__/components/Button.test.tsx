import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@design-system/components';

describe('Button', () => {
  it('renderiza o texto', () => {
    render(<Button>Salvar</Button>);
    expect(screen.getByRole('button', { name: 'Salvar' })).toBeInTheDocument();
  });

  it('fica desabilitado quando loading', () => {
    render(<Button loading>Salvar</Button>);
    expect(screen.getByRole('button', { name: /carregando/i })).toBeDisabled();
  });
});

