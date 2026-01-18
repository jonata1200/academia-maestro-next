import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Button } from '../design-system/components/Button';
import { ToastViewport } from '../design-system/components/Toast';
import { ToastProvider, useToast } from '../design-system/hooks/useToast';

function ToastDemo() {
  const { toasts, push, remove, clear } = useToast();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 flex-wrap">
        <Button
          size="sm"
          onClick={() => push({ variant: 'info', title: 'Info', description: 'Exemplo de toast.', durationMs: 2500 })}
        >
          Info
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => push({ variant: 'success', title: 'Sucesso', description: 'Tudo certo!', durationMs: 2500 })}
        >
          Success
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => push({ variant: 'warning', title: 'Atenção', description: 'Confira os dados.', durationMs: 0 })}
        >
          Warning (sem auto-dismiss)
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => push({ variant: 'error', title: 'Erro', description: 'Algo deu errado.', durationMs: 2500 })}
        >
          Error
        </Button>
        <Button size="sm" variant="ghost" onClick={clear}>
          Limpar
        </Button>
      </div>

      <ToastViewport toasts={toasts} onDismiss={remove} position="top-right" />
    </div>
  );
}

function WrappedToastDemo() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  );
}

const meta = {
  title: 'Design System/Componentes/Feedback/Toast',
  component: WrappedToastDemo,
} satisfies Meta<typeof WrappedToastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

