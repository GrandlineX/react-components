import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
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
        url: 'https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA',
        title: 'Earth',
      },
      {
        key: 'second',
        url: 'https://fastly.picsum.photos/id/909/300/200.jpg?hmac=KA_47FNe3iWg6PLVYLhWOoAQPkO6pByurD0_H_K2phA',
        title: 'Wave',
      },
      {
        key: 'third',
        url: 'https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA',
        title: 'Earth',
      },
      {
        key: 'fourth',
        url: 'https://fastly.picsum.photos/id/909/300/200.jpg?hmac=KA_47FNe3iWg6PLVYLhWOoAQPkO6pByurD0_H_K2phA',
        title: 'Wave',
      },
      {
        key: 'fifth',
        url: 'https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA',
        title: 'Earth',
      },
    ],
    selected: 'first',
    onChange: fn(),
  },
};
