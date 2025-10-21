import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { EndlessImageScroll } from '../../components';

const meta = {
  title: 'Components/EndlessImageScroll',
  component: EndlessImageScroll,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EndlessImageScroll>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: [
      { id: '001', url: '/example01.jpg' },
      { id: '002', url: '/example02.jpg' },
      { id: '003', url: '/example01.jpg' },
      { id: '004', url: '/example02.jpg' },
      { id: '005', url: '/example01.jpg' },
      { id: '006', url: '/example02.jpg' },
    ],
    containerProps: {
      style: {
        gap: '16px',
        maxWidth: '800px',
      },
    },
  },
};
