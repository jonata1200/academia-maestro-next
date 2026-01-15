import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Hero } from '../design-system/components/Hero';
import { Button } from '../design-system/components/Button';

const meta = {
  title: 'Design System/Hero',
  component: Hero,
  args: {
    title: 'Academia Maestro',
    subtitle: 'Aprenda música com uma escola tradicional desde 1981.',
    align: 'left',
  },
  argTypes: {
    align: { control: 'select', options: ['left', 'center'] },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cta: <Button>Quero saber mais</Button>,
  },
};

export const WithBackground: Story = {
  args: {
    backgroundImageUrl: '/screenshots/home.png',
    cta: <Button>Agendar</Button>,
    align: 'center',
  },
};

