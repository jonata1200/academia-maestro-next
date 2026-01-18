import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Nav } from '../design-system/components/Nav';

const meta = {
  title: 'Design System/Componentes/Navegação/Nav',
  component: Nav,
  args: {
    orientation: 'horizontal',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Sobre', href: '/sobre' },
      {
        label: 'Mais',
        children: [
          { label: 'Instrumentos', href: '/instrumentos' },
          { label: 'Contato', href: '/contato' },
        ],
      },
    ],
  },
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

