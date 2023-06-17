import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IOSettings } from '@grandlinex/react-icons';
import { DropDownIconMenu, MenuItem } from '../../components';

const meta = {
  title: 'Components/Menu',
  component: DropDownIconMenu,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropDownIconMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const menu: MenuItem[] = [
  {
    key: 'Dot',
    icon: 'IOMoon',
    label: 'Moon',
  },
  {
    key: 'bag',
    icon: 'IOBag',
    label: 'Bag - Label',
    isLabel: true,
  },
  {
    key: 'ba2',
    icon: 'IOBag',
    label: 'Bag',
    checkBox: true,
    value: true,
  },
  {
    key: 'ba3',
    icon: 'IOBag',
    label: 'Bag',
    checkBox: true,
  },
];

export const Default: Story = {
  args: {
    menu,
    initialValue: { ba3: true },
  },
};

export const Left: Story = {
  args: {
    menu,
    initialValue: { ba3: true },
    left: true,
  },
};

export const Icon: Story = {
  args: {
    menu,
    initialValue: { ba3: true },
    children: <IOSettings />,
  },
};

export const SubMenu: Story = {
  args: {
    menu: [
      ...menu,
      {
        key: 'ba3',
        icon: 'IOBag',
        label: 'SubMenu',
        subMenu: [
          {
            key: 'ba4',
            icon: 'IOBag',
            label: 'Bag',
          },

          {
            key: 'ba5',
            icon: 'IOBag',
            label: 'Bag',
          },
        ],
      },
    ],
    initialValue: { ba3: true },
    children: <IOSettings />,
  },
};

export const SubMenuLeft: Story = {
  args: {
    menu: [
      ...menu,
      {
        key: 'ba3',
        icon: 'IOBag',
        label: 'SubMenu',
        subMenu: [
          {
            key: 'ba4',
            icon: 'IOBag',
            label: 'Bag',
          },

          {
            key: 'ba5',
            icon: 'IOBag',
            label: 'Bag',
          },
        ],
      },
    ],
    initialValue: { ba3: true },
    children: <IOSettings />,
    left: true,
  },
};

export const SubMenuTop: Story = {
  args: {
    menu: [
      ...menu,
      {
        key: 'ba3',
        icon: 'IOBag',
        label: 'SubMenu',
        subMenu: [
          {
            key: 'ba4',
            icon: 'IOBag',
            label: 'Bag',
          },

          {
            key: 'ba5',
            icon: 'IOBag',
            label: 'Bag',
          },
        ],
      },
    ],
    initialValue: { ba3: true },
    children: <IOSettings />,
    top: true,
  },
};
