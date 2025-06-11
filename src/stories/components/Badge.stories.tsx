import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Badge } from '../../components';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'IOLogoNodejs',
    text: 'Default Badge',
  },
};
export const Colored: Story = {
  args: {
    icon: 'IOLogoNodejs',
    text: 'Default Badge',
    color: 'red',
  },
};
export const CloseButton: Story = {
  name: 'With close button',
  args: {
    icon: 'IOLogoNodejs',
    text: 'Default Badge',
    color: 'red',
    close: () => {},
  },
};

export const TextOnly: Story = {
  args: {
    text: 'Default Badge',
    color: 'black',
  },
};

export const IconOnly: Story = {
  args: {
    icon: 'IOLogoNodejs',
    color: 'green',
  },
};
