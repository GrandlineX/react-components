import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import BadgeColorSelector from '../../components/form/inputs/BadgeColorSelector';

const meta = {
  title: 'Components/FormComponents/BadgeColorSelector',
  component: BadgeColorSelector,
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
} satisfies Meta<typeof BadgeColorSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormPrefill: Story = {
  args: {
    onChange: () => {},
  },
};
