import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '../design-system/components/Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  args: {
    children: 'Botão',
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Outline: Story = { args: { variant: 'outline' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Loading: Story = { args: { loading: true } };
export const FullWidth: Story = { args: { fullWidth: true } };
export const IconOnly: Story = {
  args: { iconOnly: true, 'aria-label': 'Fechar', children: null, leftIcon: '×' },
};

