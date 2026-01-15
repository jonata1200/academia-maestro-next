import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Section } from '../design-system/components/Section';
import { Text } from '../design-system/components/Text';

const meta = {
  title: 'Design System/Section',
  component: Section,
  args: {
    title: 'Título da seção',
    description: 'Descrição opcional da seção.',
    variant: 'light',
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'light', 'dark'] },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Section {...args}>
      <Text>Conteúdo da seção.</Text>
    </Section>
  ),
};

