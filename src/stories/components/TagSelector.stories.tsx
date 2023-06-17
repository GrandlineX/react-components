import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TagSelector } from '../../components';

const meta = {
  title: 'Components/TagSelector',
  component: TagSelector,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TagSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: [],
    items: [
      { key: 'First', text: 'First', color: 'red' },
      { key: 'Second', text: 'Second', color: 'red' },
    ],
  },
};
