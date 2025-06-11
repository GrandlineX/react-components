import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
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
        {/* @ts-expect-error Missing Types from Storybook for React 19 */}
        <Story />
      </div>
    ),
  ],
};
