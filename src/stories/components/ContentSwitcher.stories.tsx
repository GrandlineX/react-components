import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { ContentSwitcher } from '../../components';

const meta = {
  title: 'Components/ContentSwitcher',
  component: ContentSwitcher,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContentSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

const shortA: number[] = [];
const limit = 10;
const longA: number[] = [];

for (let i = 1; i < 20; i++) {
  if (i < limit) {
    shortA.push(i);
  }
  longA.push(i);
}

export const Default: Story = {
  args: {
    onChange: fn(),
    items: shortA.map((e) => ({
      key: `${e}`,
      name: `name-${e}`,
    })),
  },
};

export const Boolean_No: Story = {
  args: {
    onChange: fn(),
    items: [
      {
        key: `false`,
        name: `no`,
      },
      {
        key: `true`,
        name: `yes`,
      },
    ],
  },
};

export const Boolean_Yes: Story = {
  args: {
    onChange: fn(),
    items: [
      {
        key: `false`,
        name: `no`,
      },
      {
        key: `true`,
        name: `yes`,
      },
    ],
    selectedIndex: 1,
  },
};
