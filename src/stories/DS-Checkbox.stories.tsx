import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';
import { Checkbox } from '../design-system/components/Checkbox';

const meta = {
  title: 'Design System/Componentes/Formulários/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        id="ck1"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Aceito os termos"
        helperText="Você pode revogar depois."
      />
    );
  },
};

export const Indeterminate: Story = {
  render: () => <Checkbox id="ck2" indeterminate label="Seleção parcial" />,
};

