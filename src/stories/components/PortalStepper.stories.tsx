import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PortalStepper } from '../../components';

const meta = {
  title: 'Components/PortalStepper',
  component: PortalStepper,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PortalStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const shortA: number[] = [];
const limit = 20;

for (let i = 1; i < limit; i++) {
  shortA.push(i);
}

export const Default: Story = {
  args: {
    width: 600,
    height: 600,
    offset: 80,
    conf: shortA.map((e) => ({
      key: `p${e}`,
      name: `Very long name for demo #${e}`,
      render: <p>El_{e}</p>,
      hidden: e % 4 === 0,
    })),
  },
};
