import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
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
        {/* @ts-expect-error Missing Types from Storybook for React 19 */}
        <Story />
      </div>
    ),
  ],
};
