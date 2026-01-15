import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Tabs } from '../design-system/components/Tabs';
import { Text } from '../design-system/components/Text';

const meta = {
  title: 'Design System/Tabs',
  component: Tabs,
  args: {
    orientation: 'horizontal',
    variant: 'underline',
    items: [
      { id: 'tab-1', label: 'Aba 1', content: <Text>Conteúdo da Aba 1</Text> },
      { id: 'tab-2', label: 'Aba 2', content: <Text>Conteúdo da Aba 2</Text> },
      { id: 'tab-3', label: 'Aba 3', content: <Text>Conteúdo da Aba 3</Text> },
    ],
  },
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    variant: { control: 'select', options: ['underline', 'pill'] },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Pill: Story = { args: { variant: 'pill' } };
export const Vertical: Story = { args: { orientation: 'vertical' } };

