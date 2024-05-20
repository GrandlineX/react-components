import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
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
  },
};

export const Colored: Story = {
  args: {
    text: 'Button',
    color: 'red',
    onClick: fn(),
  },
};

export const Disabeld: Story = {
  args: {
    text: 'Button',
    disabled: true,
    onClick: fn(),
  },
};

export const Half: Story = {
  args: {
    text: 'Button',
    half: true,
    onClick: fn(),
  },
};
