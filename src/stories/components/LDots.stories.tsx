import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { LDots } from '../../components';

const meta = {
  title: 'Components/Loading/Dots',
  component: LDots,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LDots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
