import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../../components';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const shortA: number[] = [];
const limit = 10;

for (let i = 1; i < limit; i++) {
  shortA.push(i);
}

export const Default: Story = {
  args: {
    text: 'Tooltip text',
    children: <span className="glx-underline">Tooltip</span>,
  },
};

export const Bottom: Story = {
  args: {
    text: 'Tooltip text bottom',
    children: <span className="glx-underline">Bottom</span>,
  },
};

export const Right: Story = {
  args: {
    text: 'Tooltip text right',
    position: 'right',
    children: <span className="glx-underline">Right</span>,
  },
};

export const Left: Story = {
  args: {
    text: 'Tooltip text left',
    position: 'left',
    children: <span className="glx-underline">Left</span>,
  },
};
