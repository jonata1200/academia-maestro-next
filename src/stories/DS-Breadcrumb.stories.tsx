import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Breadcrumb } from '../design-system/components/Breadcrumb';

const meta = {
  title: 'Design System/Breadcrumb',
  component: Breadcrumb,
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Instrumentos', href: '/instrumentos' },
      { label: 'Violão' },
    ],
    separator: '›',
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

