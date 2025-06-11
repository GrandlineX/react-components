import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { IOText, IOTrash } from '@grandlinex/react-icons';
import { Button, ColumTableProps, Table } from '../../components';
import { sid, sleep } from '../../util';

const meta = {
  title: 'Components/Table',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: Table,
  tags: ['autodocs'],
  /*  parameters: {
    docs: {
      description: {
        component: 'Table component',
      },
    },
  }, */
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Table>;

export default meta;

type data = {
  id: number;
  idd: string;
  date: string;
  str: string | undefined;
  boolean: boolean;
  json?: { name: string } | null;
};
const shortA: data[] = [];
for (let i = 1; i < 100; i++) {
  shortA.push({
    id: i,
    idd: sid(),
    date: new Date().toISOString().substring(0, 16),
    boolean: true,
    str: i % 2 === 0 ? 'txt' : undefined,
    json: i % 2 === 0 ? { name: 'test' } : null,
  });
}
const defaultProps: ColumTableProps<data>[] = [
  {
    field: 'id',
    headerName: 'ID',
    dataType: 'number',
  },
  {
    field: 'idd',
    headerName: 'IDD',
    dataType: 'string',
    editable: true,
  },
  {
    field: 'str',
    headerName: 'Str',
    dataType: 'string',
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    editable: true,
    dataType: 'date',
  },
  {
    field: 'boolean',
    headerName: 'Boolean',
    dataType: 'boolean',
    editable: true,
  },
  {
    field: 'json.name',
    headerName: 'Json field',
    style: { color: 'cyan' },
  },
];

const nestedProps: ColumTableProps<data>[] = [
  {
    field: 'id',
    headerName: 'ID',
  },
  {
    field: 'boolean',
    headerName: 'Boolean',
  },
];

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rowKey: 'idd',
    rowData: shortA,
    sortable: true,
    columnDefs: defaultProps as ColumTableProps[],
    editMode: (form) => {
      return new Promise((resolve) => {
        sleep(4000).then(() => {
          console.log(form);
          resolve(true);
        });
      });
    },
  },
};

export const Empty: Story = {
  name: 'Empty Table',
  args: {
    rowKey: 'idd',
    rowData: [],
    columnDefs: defaultProps as ColumTableProps[],
  },
};

export const Selection: Story = {
  name: 'Simple Selection Table',
  args: {
    rowKey: 'idd',
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    isSelectable: true,
    onSelectionChange: (x) => console.log(x),
  },
};

export const Filterd: Story = {
  name: 'Simple Column filter for Table',
  args: {
    rowKey: 'idd',
    rowData: shortA,
    columnFilter: ['id', 'idd'],
    columnDefs: defaultProps as ColumTableProps[],
    isSelectable: true,
    onSelectionChange: (x) => console.log(x),
  },
};

export const Selection2: Story = {
  name: 'Simple Selection Table - key string',
  args: {
    rowKey: 'idd',
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    isSelectable: true,
    onSelectionChange: (x) => console.log(x),
  },
};
export const Fixed: Story = {
  name: 'Sticky Header Table',
  args: {
    rowKey: 'idd',
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    fixedHeader: true,
  },
};

export const Action: Story = {
  name: 'Table with row action',
  args: {
    rowKey: 'idd',
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    rowAction: [
      (row) => {
        return {
          icon: <IOText />,
          name: 'Text',
          onClick: () => {},
          disabled: !row.data.json,
        };
      },
      () => {
        return {
          icon: <IOTrash />,
          name: 'Delete',
          onClick: () => {},
        };
      },
    ],
  },
};

export const Pagination: Story = {
  name: 'Table with pagination',
  args: {
    rowKey: 'idd',
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    pagination: {
      defaultSize: 25,
    },
    sortable: true,
  },
};

export const Search: Story = {
  name: 'Table with search',
  args: {
    rowKey: 'idd',
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    filter: true,
    sortable: true,
    pagination: {
      defaultSize: 25,
    },
    children: <Button onClick={() => {}}>Example</Button>,
  },
};

export const Nested: Story = {
  name: 'Nested Table',
  args: {
    rowKey: 'idd',
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    extendRowRenderer: () => {
      return (
        <Table
          rowKey="idd"
          rowData={shortA}
          columnDefs={nestedProps}
          rowAction={[
            (row) => {
              return {
                icon: <IOTrash />,
                name: 'Delete',
                onClick: (e) => {
                  if (e.shiftKey) {
                    console.log('shift');
                  }
                },
              };
            },
          ]}
        />
      );
    },
  },
};
