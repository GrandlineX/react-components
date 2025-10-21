import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Progress } from '../../components';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cur: 20,
    max: 100,
    width: 300,
  },
};

export const Empty: Story = {
  args: {
    cur: 0,
    max: 100,
    width: 300,
  },
};
export const Full: Story = {
  args: {
    cur: 100,
    max: 100,
    width: 300,
  },
};
