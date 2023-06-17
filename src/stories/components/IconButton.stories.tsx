import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../../components';

const meta = {
  title: 'Components/Button/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toolTip: {
      text: 'Button',
      position: 'right',
    },
    icon: 'IODownload',
  },
};

export const Blue: Story = {
  args: {
    toolTip: {
      text: 'Button',
      position: 'right',
    },
    icon: 'IODownload',
    color: 'blue',
  },
};
