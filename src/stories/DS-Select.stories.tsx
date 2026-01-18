import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Select } from '../design-system/components/Select';
import { Label } from '../design-system/components/Label';

const meta = {
  title: 'Design System/Componentes/Formulários/Select',
  component: Select,
  args: {
    id: 'instrumento',
    placeholder: 'Selecione um instrumento',
    size: 'md',
    options: [
      { value: 'violao', label: 'Violão' },
      { value: 'guitarra', label: 'Guitarra' },
      { value: 'teclado', label: 'Teclado' },
    ],
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    multiple: { control: 'boolean' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Label htmlFor={args.id}>Instrumento</Label>
      <Select {...args} />
    </div>
  ),
};

export const Error: Story = {
  args: { error: 'Selecione uma opção' },
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Label htmlFor={args.id} required>
        Instrumento
      </Label>
      <Select {...args} />
    </div>
  ),
};

