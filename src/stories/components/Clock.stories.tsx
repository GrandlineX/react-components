import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Clock, ClockEnum } from '../../components';
import { pad } from '../../components/clock/type';

const meta = {
  title: 'Components/Clock',
  component: Clock,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Clock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: ClockEnum.ANALOG,
  },
};

export const Cube: Story = {
  args: {
    mode: ClockEnum.CUBE,
  },
};

export const Analog: Story = {
  args: {
    mode: ClockEnum.ANALOG,
  },
};

export const Numeric: Story = {
  args: {
    mode: ClockEnum.NUMERIC,
  },
};

export const Custom: Story = {
  args: {
    custom: ({ h, m, s }) => (
      <span className="glx-default-text">
        {pad(h)}:{pad(m)}:{pad(s)}
      </span>
    ),
  },
};
