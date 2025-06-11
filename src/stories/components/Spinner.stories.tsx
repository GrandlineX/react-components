import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Spinner } from '../../components';

const meta = {
  title: 'Components/Loading/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
