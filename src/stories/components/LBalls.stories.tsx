import type { Meta, StoryObj } from '@storybook/react';
import { LBalls } from '../../components';

const meta = {
  title: 'Components/Loading/Balls',
  component: LBalls,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LBalls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
