import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from '../../components';

const meta = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        key: 'l01',
        type: 'label',
        label: 'Label',
      },
      {
        key: 'd01',
        type: 'divider',
      },
      {
        key: 't01',
        type: 'button',
        label: 'Button 01',
      },
      {
        key: 't02',
        type: 'button',
        label: 'Button 02',
      },
      {
        key: 't02',
        type: 'button',
        label: 'Button 02',
      },
    ],
    children: (
      <div
        style={{
          width: 300,
          height: 300,
          backgroundColor: 'gray',
        }}
        className="glx-default-text"
      >
        Right Click to Open
      </div>
    ),
  },
};
