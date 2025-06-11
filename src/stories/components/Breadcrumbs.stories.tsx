import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Breadcrumbs } from '../../components';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ['Home', 'User', 'Profile'].map((x, i) => ({
      key: x.toLowerCase(),
      name: x,
      active: i % 2 === 0,
    })),
  },
};
