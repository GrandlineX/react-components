import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Usage } from '../../components';

const meta = {
  title: 'Components/Usage/SingleUsage',
  component: Usage,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Usage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '10%',
    value: 10,
    width: 200,
  },
};

export const Usage00: Story = {
  name: 'Usage 0%',
  args: {
    label: '0%',
    value: 0,
    width: 200,
  },
};

export const Usage50: Story = {
  name: 'Usage 50%',
  args: {
    label: '50%',
    value: 50,
    width: 200,
  },
};

export const Usage85: Story = {
  name: 'Usage 85%',
  args: {
    label: '85%',
    value: 85,
    width: 200,
  },
};

export const Usage100: Story = {
  name: 'Usage 100%',
  args: {
    label: '100%',
    value: 100,
    width: 200,
  },
};

export const UsageC: Story = {
  name: 'Custom label',
  args: {
    label: 'Some label',
    value: 66,
    width: 200,
  },
};
