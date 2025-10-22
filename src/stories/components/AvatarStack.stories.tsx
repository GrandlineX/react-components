import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AvatarStack } from '../../components';

const meta = {
  title: 'Components/AvatarStack',
  component: AvatarStack,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AvatarStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: [
      '/example01.jpg',
      '/example02.jpg',
      '/example01.jpg',
      '/example02.jpg',
      '/example01.jpg',
      '/example02.jpg',
    ],
  },
};
export const Click: Story = {
  args: {
    url: [
      '/example01.jpg',
      '/example02.jpg',
      '/example01.jpg',
      '/example02.jpg',
      '/example01.jpg',
      '/example02.jpg',
    ],
    onClick: (i: number) => {
      console.log(i);
    },
  },
};
