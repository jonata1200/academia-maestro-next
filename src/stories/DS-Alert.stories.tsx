import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Alert } from '../design-system/components/Alert';

const meta = {
  title: 'Design System/Alert',
  component: Alert,
  args: {
    variant: 'info',
    title: 'Aviso',
    description: 'Este é um alerta do Design System.',
  },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    icon: { control: false },
    onClose: { control: false },
    action: { control: false },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};
export const Success: Story = { args: { variant: 'success', title: 'Sucesso' } };
export const Warning: Story = { args: { variant: 'warning', title: 'Atenção' } };
export const Error: Story = { args: { variant: 'error', title: 'Erro' } };

