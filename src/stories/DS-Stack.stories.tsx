import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Stack } from '../design-system/components/Stack';
import { Badge } from '../design-system/components/Badge';

const meta = {
  title: 'Design System/Stack',
  component: Stack,
  args: {
    direction: 'row',
    gap: 12,
    align: 'center',
  },
  argTypes: {
    direction: { control: 'select', options: ['row', 'column'] },
    align: { control: false },
    justify: { control: false },
    wrap: { control: 'boolean' },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Stack {...args}>
      <Badge>Item 1</Badge>
      <Badge variant="info">Item 2</Badge>
      <Badge variant="success">Item 3</Badge>
    </Stack>
  ),
};

