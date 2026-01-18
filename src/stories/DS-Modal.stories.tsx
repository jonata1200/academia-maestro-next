import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Modal } from '../design-system/components/Modal';
import { Button } from '../design-system/components/Button';
import { useModal } from '../design-system/hooks/useModal';
import { Text } from '../design-system/components/Text';

function ModalDemo() {
  const { open, onOpen, onClose } = useModal(false);
  return (
    <div>
      <Button onClick={onOpen}>Abrir modal</Button>
      <Modal
        open={open}
        onClose={onClose}
        title="Título do modal"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={onClose}>Confirmar</Button>
          </div>
        }
      >
        <Text>Conteúdo do modal.</Text>
      </Modal>
    </div>
  );
}

const meta = {
  title: 'Design System/Componentes/Feedback/Modal',
  component: ModalDemo,
} satisfies Meta<typeof ModalDemo>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

