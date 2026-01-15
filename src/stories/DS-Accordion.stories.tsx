import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Accordion } from '../design-system/components/Accordion';

const meta = {
  title: 'Design System/Accordion',
  component: Accordion,
  args: {
    multiple: false,
    items: [
      { id: 'a', title: 'Primeiro item', content: 'Conteúdo do primeiro item.' },
      { id: 'b', title: 'Segundo item', content: 'Conteúdo do segundo item.' },
      { id: 'c', title: 'Terceiro item', content: 'Conteúdo do terceiro item.' },
    ],
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {};
export const Multiple: Story = { args: { multiple: true } };

