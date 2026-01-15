import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';
import { Pagination } from '../design-system/components/Pagination';

const meta = {
  title: 'Design System/Pagination',
  component: Pagination,
  args: {
    page: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    page: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={10} onPageChange={setPage} />;
  },
};

