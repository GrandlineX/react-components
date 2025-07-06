import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { UserSelector } from '../../components';

const meta = {
  title: 'Components/UserSelector',
  component: UserSelector,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UserSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchFC: async (s) => {
      return {
        userId: '1',
        subTitle: 'Subtitle',
        firstName: 'Dount',
        lastName: 'Exist',
        gravatarEmail: 'dount@exist.io',
      };
    },
  },
};

export const List: Story = {
  args: {
    list: [
      {
        userId: '1',
        subTitle: 'Subtitle',
        firstName: 'Dount',
        lastName: 'Exist',
        gravatarEmail: 'dount@exist.io',
      },
      {
        userId: '2',
        subTitle: 'Subtitle2',
        firstName: 'Dount2',
        lastName: 'Exist2',
        gravatarEmail: 'dount2@exist.io',
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    searchFC: async (s) => {
      return null;
    },
  },
};
