import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Grid } from '../design-system/components/Grid';
import { Badge } from '../design-system/components/Badge';

const meta = {
  title: 'Design System/Componentes/Layout/Grid',
  component: Grid,
  args: {
    columns: 3,
    gap: 12,
  },
  argTypes: {
    columns: { control: 'select', options: [1, 2, 3, 4, 5, 6, 12] },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={{ background: '#f4f4f4', padding: 12, borderRadius: 8 }}>
          <Badge>Item {i + 1}</Badge>
        </div>
      ))}
    </Grid>
  ),
};

