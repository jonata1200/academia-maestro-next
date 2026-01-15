import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Card } from '../design-system/components/Card';
import { Button } from '../design-system/components/Button';
import { Heading } from '../design-system/components/Heading';
import { Text } from '../design-system/components/Text';

const meta = {
  title: 'Design System/Card',
  component: Card,
  args: {
    variant: 'outlined',
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'outlined', 'elevated'] },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 420 }}>
      <Card
        {...args}
        header={<Heading as={3} size="md">Card</Heading>}
        actions={<Button size="sm" variant="outline">Ação</Button>}
        footer={<Text size="sm">Rodapé</Text>}
      >
        <Text>Conteúdo do card.</Text>
      </Card>
    </div>
  ),
};

