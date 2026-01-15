import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Text } from '../design-system/components/Text';

const meta = {
  title: 'Design System/Text',
  component: Text,
  args: {
    children:
      'Texto do componente. Este texto serve para demonstrar tamanhos, pesos e truncamento.',
    size: 'base',
    weight: 'regular',
  },
  argTypes: {
    as: { control: 'select', options: ['p', 'span', 'div'] },
    size: { control: 'select', options: ['sm', 'base', 'lg'] },
    weight: { control: 'select', options: ['light', 'regular', 'medium', 'semibold', 'bold'] },
    truncate: { control: 'boolean' },
    lineClamp: { control: 'select', options: [undefined, 2, 3, 4, 5, 6] },
    colorClassName: { control: false },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };
export const Truncate: Story = {
  args: { truncate: true },
  render: (args) => (
    <div style={{ width: 280 }}>
      <Text {...args} />
    </div>
  ),
};

