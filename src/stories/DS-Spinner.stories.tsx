import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Spinner } from '../design-system/components/Spinner';

const meta = {
  title: 'Design System/Spinner',
  component: Spinner,
  args: {
    size: 'md',
    variant: 'primary',
    label: '',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['primary', 'neutral'] },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithLabel: Story = { args: { label: 'Carregando...' } };

