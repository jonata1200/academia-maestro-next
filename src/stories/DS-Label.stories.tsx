import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Label } from '../design-system/components/Label';

const meta = {
  title: 'Design System/Label',
  component: Label,
  args: {
    children: 'Nome',
    size: 'sm',
    required: false,
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    required: { control: 'boolean' },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };

