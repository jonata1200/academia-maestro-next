import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Container } from '../design-system/components/Container';

const meta = {
  title: 'Design System/Container',
  component: Container,
  args: {
    padded: true,
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Container {...args} style={{ background: '#f4f4f4', paddingTop: 16, paddingBottom: 16 }}>
      Conteúdo dentro do container
    </Container>
  ),
};

