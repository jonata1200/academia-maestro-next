import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';
import { RadioGroup } from '../design-system/components/Radio';

const meta = {
  title: 'Design System/Componentes/Formulários/Radio',
  component: RadioGroup,
  args: {
    name: 'unidade',
    value: 'ceilandia',
    onChange: () => {},
    options: [
      { value: 'ceilandia', label: 'Ceilândia' },
      { value: 'sobradinho', label: 'Sobradinho' },
    ],
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'unidade',
    value: 'ceilandia',
    onChange: () => {},
    options: [
      { value: 'ceilandia', label: 'Ceilândia' },
      { value: 'sobradinho', label: 'Sobradinho' },
    ],
  },
  render: () => {
    const [value, setValue] = useState('ceilandia');
    return (
      <RadioGroup
        name="unidade"
        value={value}
        onChange={setValue}
        options={[
          { value: 'ceilandia', label: 'Ceilândia' },
          { value: 'sobradinho', label: 'Sobradinho' },
        ]}
      />
    );
  },
};

