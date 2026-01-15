import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Heading } from '../design-system/components/Heading';

const meta = {
  title: 'Design System/Heading',
  component: Heading,
  args: {
    children: 'Título do componente',
    as: 2,
    size: 'lg',
    weight: 'semibold',
  },
  argTypes: {
    as: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    weight: { control: 'select', options: ['light', 'regular', 'semibold', 'bold'] },
    colorClassName: { control: false },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const H1: Story = { args: { as: 1, size: 'xl' } };
export const Light: Story = { args: { weight: 'light' } };

