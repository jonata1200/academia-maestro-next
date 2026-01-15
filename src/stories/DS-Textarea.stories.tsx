import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';
import { Textarea } from '../design-system/components/Textarea';
import { Label } from '../design-system/components/Label';

const meta = {
  title: 'Design System/Textarea',
  component: Textarea,
  args: {
    id: 'mensagem',
    placeholder: 'Digite sua mensagem',
    size: 'md',
    resize: 'vertical',
    showCount: true,
    maxLength: 200,
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    resize: { control: 'select', options: ['none', 'vertical', 'both'] },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <div style={{ maxWidth: 520 }}>
        <Label htmlFor={args.id}>Mensagem</Label>
        <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    );
  },
};

