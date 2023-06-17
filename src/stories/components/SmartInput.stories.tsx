import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SmartInput } from '../../components';

const meta = {
  title: 'Components/SmartInput',
  component: SmartInput,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SmartInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'smart search',
    searchFC: async (s) => {
      return (
        [
          ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 10].map((x) => ({
            key: `0${x}`,
            icon: 'IOAlbums',
            title: `Album ${x}`,
            detail: x % 3 === 0 ? 'Detail' : undefined,
          })),
        ].find((e) => e.title.includes(s)) || null
      );
    },
  },
};
export const Limit: Story = {
  args: {
    placeholder: 'smart search',
    max: 5,
    list: [
      ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 10].map((x) => ({
        key: `0${x}`,
        icon: 'IOAlbums',
        title: `Album ${x}`,
        detail: x % 3 === 0 ? 'Detail' : undefined,
      })),
    ],
  },
};
