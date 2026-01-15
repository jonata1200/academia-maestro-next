import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Tooltip } from '../design-system/components/Tooltip';
import { Button } from '../design-system/components/Button';

const meta = {
  title: 'Design System/Tooltip',
  component: Tooltip,
  args: {
    content: 'Conteúdo do tooltip',
    side: 'top',
    delayMs: 200,
    children: (
      <Button variant="outline" size="sm">
        Passe o mouse
      </Button>
    ),
  },
  argTypes: {
    side: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

