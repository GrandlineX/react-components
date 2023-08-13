import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TagSelector } from '../../components';

const meta = {
  title: 'Components/FormComponents/TagSelector',
  component: TagSelector,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="glx-form--input">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TagSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormPrefill: Story = {
  args: {
    value: ['first'],
    items: [
      {
        key: 'first',
        text: 'First',
        color: 'red',
        icon: 'IOGlobe',
      },
      {
        key: 'second',
        text: 'Second',
        color: 'green',
        icon: 'IOBug',
      },
      {
        key: 'third',
        text: 'Third',
        color: 'yellow',
      },
      {
        key: 'x1',
        text: 'X1-Badge',
        color: 'black',
      },
      {
        key: 'x2',
        text: 'X2-Badge',
        color: 'black',
      },
      {
        key: 'x3',
        text: 'X3-Badge',
        color: 'black',
      },
      {
        key: 'x4',
        text: 'X4-Badge',
        color: 'black',
      },
    ],
  },
};
