import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './renderWithProviders';
import { useToast } from '@design-system/hooks/useToast';

function TestComponent() {
  const toast = useToast();
  return (
    <div>
      <button onClick={() => toast.push({ title: 'Test' })}>Add Toast</button>
    </div>
  );
}

describe('renderWithProviders', () => {
  it('renderiza componente com ToastProvider', () => {
    renderWithProviders(<TestComponent />);
    expect(screen.getByRole('button', { name: 'Add Toast' })).toBeInTheDocument();
  });

  it('permite usar useToast dentro do componente renderizado', () => {
    renderWithProviders(<TestComponent />);
    const button = screen.getByRole('button', { name: 'Add Toast' });
    expect(button).toBeInTheDocument();
    // Se não houver erro, significa que o ToastProvider está funcionando
  });

  it('aceita opções de render', () => {
    const { container } = renderWithProviders(<div data-testid="test">Test</div>);
    expect(container.querySelector('[data-testid="test"]')).toBeInTheDocument();
  });
});
