import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HNavigator } from '../../components';

const meta = {
  title: 'Components/HNavigator',
  component: HNavigator,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: 'disabled',
      },
    },
  },
} satisfies Meta<typeof HNavigator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '500px',
    className: 'glx-default-text',
    children: (
      <>
        {[
          {
            key: 'first',
            url: '/example01.jpg',
            title: 'Earth',
          },
          {
            key: 'second',
            url: '/example02.jpg',
            title: 'Wave',
          },
          {
            key: 'third',
            url: '/example01.jpg',
            title: 'Earth',
          },
          {
            key: 'fourth',
            url: '/example02.jpg',
            title: 'Wave',
          },
          {
            key: 'fifth',
            url: '/example01.jpg',
            title: 'Earth',
          },
        ].map((e) => (
          <img width={300} height={200} alt={e.title} src={e.url} />
        ))}
      </>
    ),
  },
};
