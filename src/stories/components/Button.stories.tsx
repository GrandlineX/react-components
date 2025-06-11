import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { IOApps } from '@grandlinex/react-icons';
import { Button } from '../../components';

const meta = {
  title: 'Components/Button/DefaultButton',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Button',
    onClick: fn(),
    icon: <IOApps />,
  },
};
export const FadeIn: Story = {
  args: {
    text: 'Button',
    onClick: fn(),
    fadeIn: true,
  },
};

export const DefaultBubble: Story = {
  args: {
    text: 'Button',
    bubble: 'red',
    onClick: fn(),
  },
};
export const ColoredBubble: Story = {
  args: {
    text: 'Button',
    bubble: 'red',
    onClick: fn(),
  },
};

export const DisabledBubble: Story = {
  args: {
    text: 'Button',
    bubble: 'blue',
    disabled: true,
    onClick: fn(),
  },
};

export const BubbleHalf: Story = {
  args: {
    text: 'Button',
    bubble: 'blue',
    half: true,
    onClick: fn(),
  },
};
