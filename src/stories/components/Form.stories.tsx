import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Form,
  FormConf,
  InputOption,
  InputOptionType,
  IUser,
} from '../../components';
import { sleep } from '../../util';

const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const fullConf: (inp: Partial<InputOption<any>>) => FormConf<any> = (
  inp: Partial<InputOption<any>>,
) =>
  [
    [
      {
        type: InputOptionType.TEXT,
        key: 'key01',
        label: '1. Text',
        help: 'Simple Help Text ',
        ...inp,
      },
    ],
    [
      {
        type: InputOptionType.ICON_TEXT,
        key: 'key01b',
        label: '1b. Icon Text',
        ...inp,
      },
    ],
    [
      {
        type: InputOptionType.PASSWORD,
        key: 'key02',
        label: '2. Password',
        help: 'Simple Help Text ',
        ...inp,
      },
    ],
    [
      {
        type: InputOptionType.TEXT,
        key: 'key03a',
        label: '3a. Text',
        help: 'Simple Help Text ',
        ...inp,
      },
      { type: InputOptionType.TEXT, key: 'key03b', label: '3b. Text', ...inp },
      {
        type: InputOptionType.TEXT,
        key: 'key03c',
        label: '3b. Text Disabeld',
        disabled: true,
        ...inp,
      },
    ],
    [
      {
        type: InputOptionType.NUMBER,
        key: 'key04',
        label: '4. Number',
        ...inp,
      },
      { type: InputOptionType.EMPTY, key: 'key04b', ...inp },
    ],
    [
      {
        type: InputOptionType.CHECKBOX,
        key: 'key05',
        label: '5. CheckBox',
        ...inp,
      },
    ],
    [
      {
        type: InputOptionType.DROPDOWN,
        items: [
          { key: 'first', name: 'First' },
          { key: 'sec', name: 'Second' },
          { key: 'third', name: 'Third', meta: { group: 'group1' } },
          {
            key: 'disabled',
            name: 'Disabled',
            meta: { group: 'group1' },
            disabled: true,
          },
        ],
        key: 'key06',
        label: '6. Dropdown',
        ...inp,
      },
    ],
    [
      {
        key: 'key07',
        type: InputOptionType.CUSTOM,
        customElement: {
          render: (key, form, updateForm) => {
            return (
              <input
                type="text"
                value={form[key]}
                onChange={(e) => {
                  updateForm({ key, value: e.target.value });
                }}
              />
            );
          },
          init: '',
        },
        label: '7. Custom',
        ...inp,
      },
    ],
    [{ type: InputOptionType.DATE, key: 'key08', label: '8. Date', ...inp }],
    [{ type: InputOptionType.TIME, key: 'key09', label: '9. Time', ...inp }],
    [
      {
        type: InputOptionType.DATE_TIME,
        key: 'key10',
        label: '10. DateTime',
        ...inp,
      },
    ],
    [{ type: InputOptionType.COLOR, key: 'key11', label: '11. Color', ...inp }],
    [{ type: InputOptionType.RANGE, key: 'key12', label: '12. Range', ...inp }],
    [
      {
        type: InputOptionType.CHECKBOX,
        key: 'key13',
        label: '13. CheckBox with numeric value',
        beforeSubmit: (v) => (v ? 1 : 0),
        ...inp,
      },
    ],
    [
      [
        {
          type: InputOptionType.TAG_SELECTOR,
          key: 'key14',
          label: '14. Tag Selector',
          items: [
            {
              key: 'first',
              name: 'First',
              meta: 'red',
              icon: 'IOGlobe',
            },
            {
              key: 'second',
              name: 'Second',
              meta: 'green',
              icon: 'IOBug',
            },
            {
              key: 'third',
              name: 'Third',
              meta: 'yellow',
            },
            {
              key: 'x1',
              name: 'X1-Badge',
              meta: 'black',
            },
            {
              key: 'x2',
              name: 'X2-Badge',
              meta: 'black',
            },
            {
              key: 'x3',
              name: 'X3-Badge',
              meta: '!#306d33&#ffffff!',
            },
            {
              key: 'x4',
              name: 'X4-Badge',
              meta: '!#7e1fe9&#ffffff!',
            },
          ],
          onChange: async (fields: string[], change: any) => {
            console.log(fields, change);
          },
          ...inp,
        },
      ],
      null,
    ],
    [
      {
        type: InputOptionType.USER_SELECTOR,
        key: 'key15',
        label: '15. User Selector',
        preload: async (s: string) => {
          return {
            userId: '1',
            subTitle: s,
            firstName: 'Random',
            lastName: 'User',
            gravatarEmail: s,
          };
        },
        onChange: async (user: IUser | null) => {
          console.log(user);
        },
        ...inp,
      },
    ],
    [
      {
        type: InputOptionType.USER_SELECTOR,
        key: 'key16',
        label: '16. User Selector',
        items: [
          {
            key: '1',
            name: 'Random User',
            meta: {
              userId: '1',
              subTitle: "Random User's Subtitle",
              firstName: 'Random',
              lastName: 'User',
              gravatarEmail: 'randon@email.com',
            },
          },
          {
            key: '2',
            name: 'Random User 2',
            meta: {
              userId: '12',
              subTitle: "Random User's Subtitle 2",
              firstName: 'Random2',
              lastName: 'User2',
              gravatarEmail: 'randon2@email.com',
            },
          },
        ],
        onChange: async (user: IUser | null) => {
          console.log(user);
        },
        ...inp,
      },
    ],
    [{ type: InputOptionType.FILE, key: 'key17', label: '17. File', ...inp }],
    [{ type: InputOptionType.ICON, key: 'key18', label: '18. Icon', ...inp }],
    [
      {
        type: InputOptionType.CONTENT_SWITCH,
        key: 'key19',
        label: '19. ContentSwitch',
        items: [
          {
            key: 'first',
            name: 'First',
          },
          {
            key: 'sec',
            name: 'Second',
          },
          {
            key: 'third',
            name: 'Third',
          },
        ],
        ...inp,
      },
    ],
    [
      {
        type: InputOptionType.IMAGE_SELECT,
        key: 'key20',
        label: '20. Image Select',
        items: [
          {
            key: 'first',
            meta: {
              url: 'https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA',
            },
            name: 'Earth',
          },
          {
            key: 'second',
            meta: {
              url: 'https://fastly.picsum.photos/id/909/300/200.jpg?hmac=KA_47FNe3iWg6PLVYLhWOoAQPkO6pByurD0_H_K2phA',
            },
            name: 'Wave',
          },
          {
            key: 'third',
            meta: {
              url: 'https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA',
            },
            name: 'Earth',
          },
          {
            key: 'fourth',
            meta: {
              url: 'https://fastly.picsum.photos/id/909/300/200.jpg?hmac=KA_47FNe3iWg6PLVYLhWOoAQPkO6pByurD0_H_K2phA',
            },
            name: 'Wave',
          },
          {
            key: 'fifth',
            meta: {
              url: 'https://fastly.picsum.photos/id/116/300/200.jpg?hmac=ClzWzI5KCHng0l6Vyokcw5nYWjgwtkClN0T-tZP7XIA',
            },
            name: 'Earth',
          },
        ],
        ...inp,
      },
    ],
    [
      {
        type: InputOptionType.BADGE_COLOR_SELECTOR,
        key: 'key21',
        label: '21. Badge Select',
        ...inp,
      },
    ],
  ] as FormConf<any>;

export const Default: Story = {
  args: {
    className: 'glx-pb-8',
    options: fullConf({}),
    onSubmit: async (form) => {
      console.log(form);
      await sleep(4000);
    },
    loadingMessage: 'Loading...',
    loading: true,
  },
};

export const CompactForm: Story = {
  args: {
    className: 'glx-pb-8',
    options: fullConf({}),
    onSubmit: async (form) => {
      console.log(form);
      await sleep(4000);
    },
    loadingMessage: 'Loading...',
    loading: true,
    compact: true,
  },
};
export const UnderlinesDecoration: Story = {
  args: {
    className: 'glx-pb-8',
    options: fullConf({ decorationType: 'underline' }),
    onSubmit: async (form) => {
      console.log(form);
      await sleep(4000);
    },
    loadingMessage: 'Loading...',
    loading: true,
  },
};

export const BoxDecoration: Story = {
  args: {
    className: 'glx-pb-8',
    options: fullConf({ decorationType: 'box' }),
    onSubmit: async (form) => {
      console.log(form);
      await sleep(4000);
    },
    loadingMessage: 'Loading...',
    loading: true,
  },
};

export const FormPrefill: Story = {
  args: {
    className: 'glx-pb-8',
    options: fullConf({}),
    onSubmit: async (form) => {
      console.log(form);
      await sleep(4000);
    },
    loadingMessage: 'Loading...',
    loading: true,
    defaultState: {
      key01: 'Simple Text',
      key01b: {
        text: 'Simple Text',
        icon: 'IODiamond',
      },
      key02: 'Simple Password',
      key03a: 'Simple',
      key03b: 'Text',
      key03c: 'Disabeld',
      key04: '123',
      key05: true,
      key06: 'first',
      key07: 'custom field',
      key08: '2020-01-01',
      key09: '22:22',
      key10: '2020-01-01 22:22',
      key11: '#ff0000',
      key12: 20,
      key13: true,
      key14: ['first', 'third'],
      key15: {
        userId: '1',
        subTitle: 'Random User',
        firstName: 'Random',
        lastName: 'User',
        gravatarEmail: 'test@user.de',
      },
      key19: 1,
      key20: 'first',
    },
  },
};
export const FormError: Story = {
  args: {
    className: 'glx-pb-8',
    options: [
      [{ type: InputOptionType.TEXT, key: 'key01', label: '1. Text' }],
      [
        {
          type: InputOptionType.PASSWORD,
          key: 'key02',
          label: '2. Password',
        },
      ],
    ],
    onSubmit: async (form) => {
      console.log(form);
      await sleep(4000);
    },
    loadingMessage: 'Loading...',
    loading: true,
    compact: true,
    defaultError: {
      global: [
        'Global error #1 ',
        'Global error #2 ',
        'Global error #2 ',
        'Global error #2 ',
        'Global error #2 ',
        'Global error #2 ',
        'Very very long error message',
      ],
      field: [
        {
          key: 'key01',
          message: 'Error #1 ',
        },
        {
          key: 'key02',
          message: 'Error #2 witch is very very long ',
        },
      ],
    },
  },
};
export const FormCustomSubmit: Story = {
  args: {
    className: 'glx-pb-8',
    options: [
      [
        {
          type: InputOptionType.TEXT,
          key: 'key01',
          label: '1. Text',
          required: true,
        },
      ],
      [
        {
          type: InputOptionType.PASSWORD,
          key: 'key02',
          label: '2. Password',
          required: true,
        },
      ],
    ],

    onSubmit: async ({ validateRequired }) => {
      await sleep(4000);
      validateRequired(true);
    },
    buttonCenter: true,
    loadingMessage: 'Loading...',
    loading: true,
    buttonNode: (submit) => <button onClick={submit}>Custom Submit</button>,
    compact: true,
  },
};
export const Multy: Story = {
  name: 'Multiple fields write',
  args: {
    className: 'glx-pb-8',
    options: [
      [{ type: InputOptionType.TEXT, key: 'key01', label: '1. Text' }],
      [
        {
          type: InputOptionType.TEXT,
          key: 'key02',
          label: '2. Text',
        },
      ],
    ],
    onSubmit: async () => {
      await sleep(4000);
    },
    buttonCenter: true,
    loadingMessage: 'Loading...',
    loading: true,
    buttonNode: (submit) => <button onClick={submit}>Custom Submit</button>,
    compact: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setForm] = useState<any>(undefined);
    return (
      <Form
        defaultState={formData}
        options={args.options}
        className={args.className}
        onSubmit={args.onSubmit}
        buttonCenter={args.buttonCenter}
        loadingMessage={args.loadingMessage}
        loading={args.loading}
        buttonNode={args.buttonNode}
        compact={args.compact}
        onChange={({ changed, update }) => {
          const [change] = changed!;
          const { value } = change;
          const out = {
            key01: value,
            key02: value,
          };
          setForm(out);
          update(out);
        }}
      />
    );
  },
};
export const FormConditional: Story = {
  args: {
    className: 'glx-pb-8',
    options: [
      [
        {
          type: InputOptionType.CHECKBOX,
          key: 'key01',
          label: 'Conditional Form',
        },
      ],
      [
        {
          type: InputOptionType.PASSWORD,
          key: 'key02',
          label: 'Second field',
          showOn: (form) => form.key01,
        },
      ],
    ],
    onSubmit: async (form) => {
      console.log(form);
      await sleep(4000);
    },
    loadingMessage: 'Loading...',
    loading: true,
    compact: true,
  },
};
