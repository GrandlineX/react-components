import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import AnimateBox from '../../components/box/AnimateBox';
import { Card } from '../../components';

const meta = {
  title: 'Components/AnimateBox',
  component: AnimateBox,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AnimateBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'glow',
    children: (
      <Card
        style={{
          width: 'calc(100% - 10px)',
        }}
        icon="IOCard"
        iconCover
        color="black"
        title="Content"
        noIcon
      />
    ),
  },
};
export const GlowBox: Story = {
  args: {
    type: 'glow',
    children: (
      <Card
        style={{
          width: 'calc(100% - 10px)',
        }}
        icon="IOCard"
        iconCover
        color="black"
        title="Content"
        noIcon
      />
    ),
  },
};

export const RotateBox: Story = {
  args: {
    type: 'rotate',
    children: (
      <Card
        style={{
          width: 'calc(100% - 10px)',
        }}
        icon="IOCard"
        iconCover
        color="black"
        title="Content"
        noIcon
      />
    ),
  },
};
