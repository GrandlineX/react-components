import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import React from 'react';
import ImageSel from '../../components/form/inputs/ImageSel';

const meta = {
  title: 'Components/FormComponents/ImageSelector',
  component: ImageSel,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story: StoryFn) => (
      <div className="glx-form--input">
        {/* @ts-expect-error Missing Types from Storybook for React 19 */}
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ImageSel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
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
    ],
    selected: 'first',
    onChange: fn(),
  },
};
