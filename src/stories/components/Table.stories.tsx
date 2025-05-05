import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IOText, IOTrash } from '@grandlinex/react-icons';
import { ColumTableProps, Table } from '../../components';
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
    rowData: [],
    columnDefs: defaultProps as ColumTableProps[],
  },
};

export const Selection: Story = {
  name: 'Simple Selection Table',
  args: {
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    isSelectable: 'id',
    onSelectionChange: (x) => console.log(x),
  },
};

export const Filterd: Story = {
  name: 'Simple Column filter for Table',
  args: {
    rowData: shortA,
    columnFilter: ['id', 'idd'],
    columnDefs: defaultProps as ColumTableProps[],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    isSelectable: 'id',
    onSelectionChange: (x) => console.log(x),
  },
};

export const Selection2: Story = {
  name: 'Simple Selection Table - key string',
  args: {
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    isSelectable: 'idd',
    onSelectionChange: (x) => console.log(x),
  },
};
export const Fixed: Story = {
  name: 'Sticky Header Table',
  args: {
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    fixedHeader: true,
  },
};

export const Action: Story = {
  name: 'Table with row action',
  args: {
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
      (row) => {
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
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    pagination: {
      defaultSize: 25,
    },
    sortable: true,
  },
};

export const Nested: Story = {
  name: 'Nested Table',
  args: {
    rowData: shortA,
    columnDefs: defaultProps as ColumTableProps[],
    extendRowRenderer: () => {
      return (
        <Table
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
