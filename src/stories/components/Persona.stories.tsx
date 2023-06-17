import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Persona } from '../../components';

const meta = {
  title: 'Components/Persona',
  component: Persona,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Persona>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    small: true,
    size: '64px',
    text: 'G X',
  },
};
