import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '../../components';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    fullscreen: true,
  },
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Grid -2-2',
  args: {
    className: 'glx-default-text',
    flex: true,
    flexMobile: true,
    fullWidth: true,
    style: { width: '600px' },
    gap: 12,
    children: (
      <>
        <Grid layOut="1-2"> A</Grid>
        <Grid layOut="1-2"> B</Grid>
      </>
    ),
  },
};

export const L1_3: Story = {
  name: 'Grid 1-3 + 2-3',
  args: {
    className: 'glx-default-text',
    flex: true,
    flexMobile: true,
    fullWidth: true,
    style: { width: '600px' },
    gap: 12,
    children: (
      <>
        <Grid layOut="1-3"> A</Grid>
        <Grid layOut="2-3"> B</Grid>
      </>
    ),
  },
};

export const L3_3: Story = {
  name: 'Grid 3x 1-3',
  args: {
    className: 'glx-default-text',
    flex: true,
    flexMobile: true,
    fullWidth: true,
    style: { width: '600px' },
    gap: 12,
    children: (
      <>
        <Grid layOut="1-3"> A</Grid>
        <Grid layOut="1-3"> B</Grid>
        <Grid layOut="1-3"> C</Grid>
      </>
    ),
  },
};
