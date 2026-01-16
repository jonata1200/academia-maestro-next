import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '@design-system/components';

describe('Input', () => {
  it('renderiza input básico', () => {
    render(<Input id="test" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renderiza placeholder', () => {
    render(<Input id="test" placeholder="Digite aqui" />);
    expect(screen.getByPlaceholderText('Digite aqui')).toBeInTheDocument();
  });

  it('chama onChange ao digitar', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    render(<Input id="test" onChange={handleChange} />);
    
    await user.type(screen.getByRole('textbox'), 'teste');
    expect(handleChange).toHaveBeenCalled();
  });

  it('exibe mensagem de erro', () => {
    render(<Input id="test" error="Campo obrigatório" />);
    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('exibe helper text', () => {
    render(<Input id="test" helperText="Texto de ajuda" />);
    expect(screen.getByText('Texto de ajuda')).toBeInTheDocument();
  });

  it('fica desabilitado quando disabled', () => {
    render(<Input id="test" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('tem aria-describedby quando tem error ou helper', () => {
    const { rerender } = render(<Input id="test" helperText="Ajuda" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'test-help');

    rerender(<Input id="test" error="Erro" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'test-error');
  });
});
