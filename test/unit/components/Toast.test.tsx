import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToastViewport } from '@design-system/components/Toast';
import type { ToastItem } from '@design-system/hooks/useToast';

describe('ToastViewport', () => {
  const mockToasts: ToastItem[] = [
    { id: '1', title: 'Sucesso', description: 'Operação realizada', variant: 'success' },
    { id: '2', title: 'Erro', description: 'Algo deu errado', variant: 'error' },
  ];

  it('renderiza toasts', () => {
    render(<ToastViewport toasts={mockToasts} onDismiss={() => {}} />);
    expect(screen.getByText('Sucesso')).toBeInTheDocument();
    expect(screen.getByText('Operação realizada')).toBeInTheDocument();
    expect(screen.getByText('Erro')).toBeInTheDocument();
  });

  it('chama onDismiss ao clicar no botão fechar', async () => {
    const handleDismiss = jest.fn();
    const user = userEvent.setup();
    render(<ToastViewport toasts={mockToasts} onDismiss={handleDismiss} />);
    
    const closeButtons = screen.getAllByRole('button', { name: 'Fechar notificação' });
    await user.click(closeButtons[0]);
    expect(handleDismiss).toHaveBeenCalledWith('1');
  });

  it('tem role="status" para acessibilidade', () => {
    render(<ToastViewport toasts={mockToasts} onDismiss={() => {}} />);
    const statusElements = screen.getAllByRole('status');
    expect(statusElements.length).toBeGreaterThan(0);
  });
});
