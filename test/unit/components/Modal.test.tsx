import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '@design-system/components';
import { useModal } from '@design-system/hooks/useModal';

function ModalTestWrapper() {
  const { open, onOpen, onClose } = useModal(false);
  return (
    <div>
      <button onClick={onOpen}>Abrir</button>
      <Modal open={open} onClose={onClose} title="Teste">
        Conteúdo
      </Modal>
    </div>
  );
}

describe('Modal', () => {
  it('não renderiza quando fechado', () => {
    render(<Modal open={false} onClose={() => {}} title="Teste">Conteúdo</Modal>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renderiza quando aberto', () => {
    render(<Modal open={true} onClose={() => {}} title="Teste">Conteúdo</Modal>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Teste')).toBeInTheDocument();
    expect(screen.getByText('Conteúdo')).toBeInTheDocument();
  });

  it('fecha ao clicar no botão X', async () => {
    const handleClose = jest.fn();
    const user = userEvent.setup();
    render(<Modal open={true} onClose={handleClose} title="Teste">Conteúdo</Modal>);
    
    const closeButton = screen.getByRole('button', { name: 'Fechar modal' });
    await user.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });

  it('fecha ao pressionar ESC', async () => {
    const handleClose = jest.fn();
    const user = userEvent.setup();
    render(<Modal open={true} onClose={handleClose} title="Teste">Conteúdo</Modal>);
    
    await user.keyboard('{Escape}');
    expect(handleClose).toHaveBeenCalled();
  });

  it('tem aria-modal e aria-labelledby', () => {
    render(<Modal open={true} onClose={() => {}} title="Título">Conteúdo</Modal>);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby');
  });

  it('bloqueia scroll do body quando aberto', () => {
    render(<Modal open={true} onClose={() => {}} title="Teste">Conteúdo</Modal>);
    expect(document.body.style.overflow).toBe('hidden');
  });
});
