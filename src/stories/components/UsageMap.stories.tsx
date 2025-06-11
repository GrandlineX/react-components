import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { UsageMap } from '../../components';

const meta = {
  title: 'Components/Usage/UsageMap',
  component: UsageMap,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UsageMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: Array.from(new Array(150).keys()).map(() => {
      return Math.trunc(Math.random() * 100);
    }),
    label: 'Usage',
    width: 400,
  },
};

export const Colors: Story = {
  name: 'Custom Colors',
  args: {
    value: Array.from(new Array(150).keys()).map(() => {
      return Math.trunc(Math.random() * 100);
    }),
    label: 'Custom Colors',
    colors: ['#f00', '#0f0', '#00f'],
    width: 400,
  },
};

export const ColorsF: Story = {
  name: 'Full Custom Colors',
  args: {
    value: Array.from(new Array(150).keys()).map((x) => {
      return {
        val: [0, 33, 66, 100, 66, 33][x % 6],
        color: ['#f00', '#0f0', '#00f'][x % 3],
      };
    }),
    label: 'Custom Colors',
    width: 400,
  },
};
