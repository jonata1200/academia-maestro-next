import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from '../design-system/components/Input';
import { Label } from '../design-system/components/Label';

const meta = {
  title: 'Design System/Componentes/Formulários/Input',
  component: Input,
  args: {
    id: 'nome',
    placeholder: 'Digite seu nome',
    size: 'md',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Label htmlFor={args.id} required>
        Nome
      </Label>
      <Input {...args} />
    </div>
  ),
};

export const Error: Story = {
  args: { error: 'Campo obrigatório' },
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Label htmlFor={args.id} required>
        Nome
      </Label>
      <Input {...args} />
    </div>
  ),
};

