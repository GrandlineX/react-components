import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { WizardStepper } from '../../components';

const meta = {
  title: 'Components/WizardStepper',
  component: WizardStepper,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof WizardStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    initStep: 0,
    steps: [
      {
        render: () => <p>First</p>,
        buttonText: 'Next',
      },
      {
        render: () => <p>Sec</p>,
        buttonText: 'Next',
        buttonTextBack: 'Last',
      },
      {
        render: () => <p>Th</p>,
        buttonText: 'Next',
      },
      {
        buttonText: 'Next',
        buttonTextBack: 'Last',
      },
    ],
    width: 608,
  },
};
