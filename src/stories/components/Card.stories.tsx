import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../components';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: 'disabled',
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;
const hover = [
  {
    onClick: () => {},
    icon: 'IOEnterOutline',
  },
  {
    onClick: () => {},
    icon: 'IOPlayCircleOutline',
    tooltip: {
      text: 'Play',
    },
  },
  {
    onClick: () => {},
    icon: 'IOAddOutline',
  },
];
export const Default: Story = {
  args: {
    title: 'Card Title',
    icon: 'IOLogoYoutube',
    color: 'red',
    hoverButton: hover,
    iconCover: true,
    badges: [
      {
        icon: 'IOLogoYoutube',
        text: 'Default Badge',
      },
      {
        icon: 'IOBag',
        text: 'Default Badge',
        color: 'red',
      },
      {
        icon: 'IOLogoPlaystation',
        text: 'PS',
        color: 'green',
      },
      {
        icon: 'IOLogoWindows',
        text: 'WIN',
        color: 'orange',
      },
      {
        icon: 'IOLogoXbox',
        text: 'Xbox',
        color: 'yellow',
      },
      {
        text: 'Default Badge',
      },
      {
        icon: 'IOLogoNodejs',
        color: 'black',
      },
    ],
  },
};

export const Skeleton: Story = {
  args: {
    skeleton: true,
  },
};
export const Empty: Story = {
  args: {},
};
export const Menu: Story = {
  name: 'Card with menu',
  args: {
    title: 'Card Title',
    icon: 'IOLogoYoutube',
    color: 'red',
    hoverButton: hover,
    iconCover: true,
    badges: [
      {
        icon: 'IOLogoYoutube',
        text: 'Default Badge',
      },
    ],
    menu: [
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
  },
};

export const WithDate: Story = {
  name: 'Card with date field',
  args: {
    title: 'Card Title',
    icon: 'IOLogoYoutube',
    color: 'red',
    hoverButton: hover,
    iconCover: true,
    date: '- 1 Day ago',
    badges: [
      {
        icon: 'IOLogoYoutube',
        text: 'Default Badge',
      },
    ],
  },
};
export const WithText: Story = {
  name: 'Card with text field',
  args: {
    title: 'Card Title',
    icon: 'IOLogoYoutube',
    color: 'red',
    hoverButton: hover,
    iconCover: true,
    badges: [
      {
        icon: 'IOLogoYoutube',
        text: 'Default Badge',
      },
    ],
    children: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.`,
  },
};

export const WithButton: Story = {
  name: 'Card with button',
  args: {
    title: 'Card Title',
    icon: 'IOLogoYoutube',
    color: 'red',
    hoverButton: hover,
    iconCover: true,

    button: {
      onClick: () => {},
      content: 'Button',
    },
  },
};

export const WithBaseImg: Story = {
  name: 'Card with base64 Image',
  args: {
    title: 'Card Title',
    color: 'red',
    hoverButton: hover,
    imgBase:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABNCAYAAAArZQNmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKuSURBVHhe7ZzPShxBEMZ7XSF6SzQggYAixEOexntArwl5APMI5gn0qg/lIQGJEBBBE28qKJst2Q5jY2b7S3fXVFfX77IzO9/pR1HMfPtntP3h88QZbCzMXg0mTDgzJpwZE86MCWfGhDNjwpkx4cwkP/gcHey70Wg0O5vPzse92ZE8rn9fuV+XF+7u9ubx/MXSslt5veZevlp9PA9B84RN+JSHh3t3+v3Enf/88VceQcf0Hl2jjAfNdzHhU85Ovz0RF0LXKONB812aF95dCX1QJlwhffh8SPPCn5PyL0g2mg9pXnjMtHooi+ZDbIcz07xwupWLhbJoPqR54X33zCHz7rFDKB/SvHCSEjO1lCHZaD7EdviU9c2tXol0jTIeNN/FhE8Zjxfd5rv37s3bjSci6Zjeo2uU8aD5LuwfIh8ffp0dxZHSvfxP11EalROe0nWURqXwlK6jNOqEp3YdpVEnPLXrKI064THT7UGyuVC5wyWjTnj3vngeSDYX6oSndh2lUSc8tesojcodntJ1lEal8JSuozRVfSFfYjeCUsWES+5GUKoQLrkbQREvXHo3giJeuPRuBEW88Jjp9iDZoahih2tCvPC+B5gQJDsU4oVL70ZQxAuX3o2gVLHDJXcjKFUIl9yNoAzapZToRtDfHO1++uImEz4Fg0y4pm4EZRDhmroRFHbh2roRFHbh2roRFHbhMdPtQbK1MMgObxl24X0PMCFIthbYhWvrRlDYhWvrRlAG2eGauhGUQYRr6kZQsnYpJbqR0nD/30uWCW+5G0HJIrzlbgQlWXjr3QhKsvDWuxGUZOEx0+1BslrJssONeJKF9z3AhCBZrSQLb70bQUkW3no3gpJlh7fcjaBkEd5yN4JS1W98NJBlwo14TDgzJpwZE86MCWfGhDNjwllx7g9atrw2ifxZogAAAABJRU5ErkJggg==',
  },
};
