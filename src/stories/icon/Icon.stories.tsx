import React from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Icon } from '../../components';

const meta = {
  title: 'Components/Icon/IconComponent',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'IOLogoNodejs',
    size: 64,
  },
  decorators: [
    (Story: StoryFn) => (
      <div className="glx-default-text">
        <Story />
      </div>
    ),
  ],
};
