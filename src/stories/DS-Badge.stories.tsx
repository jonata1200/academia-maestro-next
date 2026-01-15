import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from '../design-system/components/Badge';

const meta = {
  title: 'Design System/Badge',
  component: Badge,
  args: {
    children: 'Novo',
    variant: 'neutral',
    size: 'sm',
  },
  argTypes: {
    variant: { control: 'select', options: ['neutral', 'info', 'success', 'warning', 'error'] },
    size: { control: 'select', options: ['sm', 'md'] },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Info: Story = { args: { variant: 'info' } };
export const Success: Story = { args: { variant: 'success' } };
export const Warning: Story = { args: { variant: 'warning' } };
export const Error: Story = { args: { variant: 'error' } };

