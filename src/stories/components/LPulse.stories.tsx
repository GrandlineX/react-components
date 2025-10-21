import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { LPulse } from '../../components';

const meta = {
  title: 'Components/Loading/Pulse',
  component: LPulse,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LPulse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
