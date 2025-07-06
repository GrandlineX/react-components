import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ImageNavigator } from '../../components';

const meta = {
  title: 'Components/ImageNavigator',
  component: ImageNavigator,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ImageNavigator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: [
      '/example01.jpg',
      '/example02.jpg',
      '/example01.jpg',
      '/example02.jpg',
      '/example01.jpg',
      '/example02.jpg',
    ],
  },
};
