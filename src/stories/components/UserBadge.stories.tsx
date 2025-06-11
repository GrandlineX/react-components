import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { UserBadge } from '../../components';

const meta = {
  title: 'Components/UserBadge',
  component: UserBadge,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UserBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    small: true,
    size: '64px',
    item: {
      userId: '1',
      firstName: 'Max',
      lastName: 'Mustermann',
      subTitle: 'Subtitle',
    },
  },
};

export const Free: Story = {
  args: {
    small: true,
    size: '64px',
    item: {
      userId: '1',
      subTitle: 'Subtitle',
    },
  },
};

export const Img: Story = {
  args: {
    small: true,
    size: '64px',
    item: {
      userId: '1',
      subTitle: 'Subtitle',
      img: 'https://www.gravatar.com/avatar/',
    },
  },
};

export const Gravatar: Story = {
  args: {
    small: true,
    size: '64px',
    item: {
      userId: '1',
      subTitle: 'Subtitle',
      firstName: 'Dount',
      lastName: 'Exist',
      gravatarEmail: 'dount@exist.io',
    },
  },
};
