import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { IOPlay } from '@grandlinex/react-icons';
import { NotificationElement } from '../../components';

const meta = {
  title: 'Components/Notification',
  component: NotificationElement,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof NotificationElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://www.grandlinex.com/favicon.ico',
    el: {
      key: '1',
      active: false,
      selected: false,
      title: 'Notification',
      message: 'Notification message',
      date: '2020-01-01',
    },
    menu: [
      {
        key: '1',
        label: 'Play',
      },
    ],
  },
};

export const FallbackIcon: Story = {
  args: {
    el: {
      key: '3',
      active: true,
      selected: false,
      title: 'Notification',
      message: 'Notification message',
      date: '2020-01-01',
    },
    menu: [
      {
        key: '1',
        label: 'Play',
      },
    ],
    fallbackIcon: {
      icon: 'IOMic',
      color: '#0f7a14',
    },
  },
};

export const Icon: Story = {
  args: {
    icon: <IOPlay />,
    el: {
      key: '3',
      active: true,
      selected: false,
      title: 'Notification',
      message: 'Notification message',
      date: '2020-01-01',
    },
    menu: [
      {
        key: '1',
        label: 'Play',
      },
    ],
  },
};

export const Menu: Story = {
  name: 'Notification with dropdown menu',
  args: {
    icon: <IOPlay />,
    el: {
      key: '3',
      active: true,
      selected: false,
      title: 'Notification',
      message: 'Notification message',
      date: '2020-01-01',
    },
    menu: [
      {
        key: '1',
        label: 'Play',
      },
      {
        key: '2',
        label: 'Play 2',
      },
    ],
  },
};

export const Button: Story = {
  name: 'Notification with button',
  args: {
    icon: <IOPlay />,
    el: {
      key: '3',
      active: true,
      selected: true,
      title: 'Notification',
      message: 'Notification message',
      date: '2020-01-01',
    },
    image: 'https://www.grandlinex.com/favicon.ico',

    button: [
      {
        onClick: async () => {},
        show: () => true,
        content: <IOPlay />,
        tooltip: 'Button 1 tooltip',
        key: '1',
      },
      {
        onClick: async () => {},
        show: () => true,
        content: <IOPlay />,
        tooltip: 'Button 1 tooltip',
        key: '2',
      },
      {
        onClick: async () => {},
        show: () => true,
        content: <IOPlay />,
        tooltip: 'Button 1 tooltip',
        key: '3',
      },
    ],
  },
};

export const Color: Story = {
  args: {
    icon: <IOPlay />,
    el: {
      key: '3',
      active: true,
      selected: true,
      title: 'Notification',
      message: 'Notification message',
      date: '2020-01-01',
    },
    image: 'https://www.grandlinex.com/favicon.ico',
    color: '#ff0000',
  },
};
