import React, {
  CSSProperties,
  MouseEvent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Tooltip from '../tooltip/Tooltip';
import { IconButton } from '../button/IconButton';
import CheckBox from '../form/inputs/CheckBox';
import { FormErrorType } from '../form/FormTypes';
import { useUIContext } from '../../util';

export type BaseRowEvent<T = any> = {
  data: T;
  index: number;
};
export type SimpleCellEvent<T = any> = BaseRowEvent<T> & {
  value: any;
};
export type ChangeCellEvent<T = any> = SimpleCellEvent<T> & {
  newValue: any;
};
export type DefaultColumTableProps<T = any> = {
  headerName?: ReactNode;
  flex?: number;
  width?: number;
  minWidth?: number;
  editable?: boolean;
  style?: CSSProperties;
  dataType?: 'string' | 'number' | 'boolean' | 'date' | 'object' | 'array';
  cellRenderer?: (dat: SimpleCellEvent<T>) => React.ReactNode;
  sort?: (a: T, b: T) => number;
  filter?: (value: string, a: T) => boolean;
};
export type ColumTableProps<T = any> = DefaultColumTableProps<T> & {
  field: string;
};
//* **************************** TableAction ********************************************************

export type TableAction = {
  name: string;
  icon: React.ReactNode;
  onClick: (event: MouseEvent) => void;
  disabled?: boolean;
};
export type TableActionFc<T = any> = (dat: BaseRowEvent<T>) => TableAction;
//* **************************** TableAction ********************************************************
//* **************************** TableProps ********************************************************
export type TableProps<T = any> = {
  className?: string;
  rowData: T[] | null | undefined;
  isSelectable?: keyof T;
  fixedHeader?: boolean;
  onSelectionChange?: (selected: (string | number)[]) => void;
  columnDefs: ColumTableProps<T>[];
  sortable?: boolean;
  filter?: string | boolean;
  columnFilter?: string[];
  pagination?: {
    sizes?: number[];
    defaultSize?: number;
  };
  onClickRow?: (rowData: T) => void;
  defaultColDef?: DefaultColumTableProps<T>;
  onCellValueChanged?: (change: ChangeCellEvent<T>) => void;
  extendRowRenderer?: (dat: BaseRowEvent<T>) => React.ReactNode;
  rowAction?: TableActionFc<T>[];
  editMode?: (
    row: T,
    setError: (err: FormErrorType | null) => void,
    clear: () => void,
  ) => Promise<boolean>;
};
//* **************************** TableProps ********************************************************
//* **************************** TableRowProps *****************************************************
export type TableRowProps<T = any> = {
  rowData: T;
  api: ITableFc<T>;
  index: number;
  extendRowRenderer?: (dat: BaseRowEvent<T>) => React.ReactNode;
};
//* **************************** TableRowProps ******************************************************
export type ITableFc<T = any> = {
  editMode?: (
    row: T,
    setError: (err: FormErrorType | null) => void,
    clear: () => void,
  ) => Promise<boolean>;
  hasEditMode(): boolean;
  rowSelected(index: number | string | T): boolean;
  rowSelect(index: number | string | T): void;
  rowUnSelect(index: number | string | T): void;
  getColumDefs(add?: TableActionFc<T>[]): ColumTableProps<T>[];
  colFilter: string[] | null;
  setColFilter: (f: string[] | null) => void;
  maxPages: number;
  page: number;
  setPage: (f: number) => void;
  pageSize: number;
  setPageSize: (f: number) => void;
  sort: ITableSort<T> | null;
  setSort: (f: ITableSort<T> | null) => void;
  pageSizes: number[];
};

export type ITableSort<T> = {
  key: keyof T;
  order: 'ASC' | 'DSC';
};

export function useTableStore<T extends Record<string, any>>(
  props: TableProps<T>,
): {
  data: {
    rowData: T[];
  };
  api: ITableFc<T>;
} {
  const ui = useUIContext();
  const { extendRowRenderer, editMode, columnFilter, sortable, pagination } =
    props;
  const isSelectable = (props.isSelectable as string) ?? null;
  const [rowData, setRowData] = useState<T[]>(props.rowData || []);
  const [columnDefs] = useState<ColumTableProps<T>[]>(props.columnDefs || []);
  const [rowAction] = useState<TableActionFc<T>[]>(props.rowAction || []);
  const [selection, setSelection] = useState<(number | string)[]>([]);
  const [page, setPage] = useState<number>(0);

  const pageSizes = useMemo(() => {
    return pagination?.sizes || [10, 25, 50];
  }, [pagination?.sizes]);
  const [pageSize, setPageSize] = useState<number>(
    pagination?.defaultSize || pageSizes[0],
  );
  const maxPages = useMemo(() => {
    return Math.ceil((props.rowData?.length || 0) / pageSize);
  }, [pageSize, props.rowData?.length]);
  const [hasExtend] = useState<boolean>(!!extendRowRenderer);
  const [colFilter, setColFilter] = useState<string[] | null>(
    columnFilter ?? null,
  );
  const [sort, setSort] = useState<ITableSort<T> | null>(null);

  function getKey(index: number | string | T): number | string {
    if (!isSelectable) {
      throw new Error('TableStore: isSelectable is not set');
    }
    return typeof index === 'number' || typeof index === 'string'
      ? index
      : (index as any)[isSelectable];
  }
  function rowSelected(index: number | string | T): boolean {
    const ind = getKey(index);
    return selection.includes(ind);
  }
  function rowSelect(index: number | string | T) {
    const ind = getKey(index);
    if (!selection.includes(ind)) {
      props.onSelectionChange?.([...selection, ind]);
      setSelection([...selection, ind]);
    }
  }
  function rowUnSelect(index: number | string | T) {
    const ind = getKey(index);
    setSelection(selection.filter((i) => i !== ind));
  }
  function hasEditMode() {
    return !!editMode;
  }
  function getColumDefs(add?: TableActionFc<T>[]): ColumTableProps<T>[] {
    const def: ColumTableProps<T>[] = [];

    if (isSelectable) {
      def.push({
        headerName: ui.translation.get('glx.table.header.sel'),
        field: '',
        cellRenderer: (dat) => (
          <div className="glx-flex-row glx-flex-g-2">
            <CheckBox
              onChange={() => {
                if (rowSelected(dat.data)) {
                  rowUnSelect(dat.data);
                } else {
                  rowSelect(dat.data);
                }
              }}
              checked={rowSelected(dat.data)}
            />
          </div>
        ),
      });
    }
    function injectCol(x: ColumTableProps<T>): ColumTableProps<T> {
      switch (x.dataType) {
        case 'string':
          return {
            sort: sortable
              ? (a, b) => {
                  const ax = a[x.field];
                  const bx = b[x.field];
                  if (typeof ax === 'string' && typeof bx === 'string') {
                    return ax.localeCompare(bx);
                  }
                  return 0;
                }
              : undefined,
            ...x,
          };
        case 'number':
          return {
            sort: sortable
              ? (a, b) => {
                  const ax = a[x.field];
                  const bx = b[x.field];
                  if (typeof ax === 'number' && typeof bx === 'number') {
                    return ax - bx;
                  }
                  return 0;
                }
              : undefined,
            ...x,
          };
        case 'boolean':
          return {
            sort: sortable
              ? (a, b) => {
                  const ax = a[x.field] ? 1 : 0;
                  const bx = b[x.field] ? 1 : 0;
                  return ax - bx;
                }
              : undefined,
            ...x,
          };
        default:
          return x;
      }
    }
    if (colFilter) {
      def.push(
        ...columnDefs
          .filter((i) => colFilter.includes(i.field))
          .map((e) => injectCol(e)),
      );
    } else {
      def.push(...columnDefs.map((e) => injectCol(e)));
    }

    if (rowAction.length > 0 || hasExtend || editMode) {
      const rows = [...rowAction];
      if (add) {
        rows.push(...add);
      }

      def.push({
        headerName: ui.translation.get('glx.table.header.action'),
        field: '',
        cellRenderer: (dat) => (
          <div className="glx-flex-row glx-flex-g-2">
            {rows.map((act) => {
              const x = act(dat);
              if (x.disabled) {
                return null;
              }
              return (
                <Tooltip text={x.name} position="left">
                  <IconButton onClick={x.onClick}>{x.icon}</IconButton>
                </Tooltip>
              );
            })}
          </div>
        ),
      });
    }
    return def;
  }
  useEffect(() => {
    setRowData(props.rowData || []);
  }, [props.rowData]);
  return {
    data: {
      rowData,
    },
    api: {
      rowSelected,
      rowSelect,
      rowUnSelect,
      getColumDefs,
      editMode,
      hasEditMode,
      colFilter,
      setColFilter,
      sort,
      setSort,
      page,
      setPage,
      pageSize,
      setPageSize,
      pageSizes,
      maxPages,
    },
  };
}

export function getCellValue<T = any>(rot: T | any, col: ColumTableProps<T>) {
  const path = col.field.split('.');
  let value = rot;
  for (const cur of path) {
    value = value[cur];
    if (value === undefined || value === null) {
      return '';
    }
  }
  return value;
}
