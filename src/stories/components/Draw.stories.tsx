import type { Meta, StoryObj } from '@storybook/react';
import { Draw } from '../../components';

const meta = {
  title: 'Components/Draw',
  component: Draw,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Draw>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 700,
    height: 500,
  },
};
