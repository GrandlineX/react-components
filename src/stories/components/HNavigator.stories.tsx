import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid, HNavigator } from '../../components';

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
        ].map((e) => (
          <img width={300} height={200} alt={e.title} src={e.url} />
        ))}
      </>
    ),
  },
};
