import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import IconList from './IconList';

const meta = {
  title: 'Components/Icon/All Icon',
  component: IconList,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story: StoryFn) => (
      <div className="glx-default-text">
        <Story />
      </div>
    ),
  ],
};
