import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Dropdown } from '../design-system/components/Dropdown';
import { Button } from '../design-system/components/Button';

const meta = {
  title: 'Design System/Dropdown',
  component: Dropdown,
  args: {
    align: 'left',
    trigger: <Button variant="outline" size="sm">Abrir menu</Button>,
    items: [
      { label: 'Perfil', onSelect: () => {} },
      { label: 'Configurações', onSelect: () => {}, badge: 'Novo' },
      { type: 'separator' as const },
      { type: 'group' as const, label: 'Ações', items: [{ label: 'Sair', onSelect: () => {} }] },
    ],
  },
  argTypes: {
    align: { control: 'select', options: ['left', 'right'] },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

