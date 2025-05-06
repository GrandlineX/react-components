import React, {
  CSSProperties,
  MouseEvent,
  ReactNode,
  useCallback,
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
  children?: ReactNode | ReactNode[];
  pagination?: {
    sizes?: number[];
    defaultSize?: number;
  };
  onClickRow?: (rowData: T) => void;
  defaultColDef?: DefaultColumTableProps<T>;
  onCellValueChanged?: (change: ChangeCellEvent<T>) => void;
  extendRowRenderer?: (dat: BaseRowEvent<T>) => React.ReactNode;
  rowAction?: TableActionFc<T>[];
  editMode?: (event: TableEditEvent<T>) => Promise<boolean>;
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
//* **************************** TableRowProps *****************************************************
export type TableEditEvent<T = any> = {
  row: T;
  setError: (err: FormErrorType | null) => void;
  clear: () => void;
  api: ITableFc<T>;
};
//* **************************** TableRowProps ******************************************************
export type ITableFc<T = any> = {
  editMode?: (event: TableEditEvent<T>) => Promise<boolean>;
  hasEditMode(): boolean;
  rowSelected(index: number | string | T): boolean;
  rowSelect(index: number | string | T): void;
  rowUnSelect(index: number | string | T): void;
  getColumDefs(add?: TableActionFc<T>[]): ColumTableProps<T>[];
  colFilter: string[] | null;
  setColFilter: (f: string[] | null) => void;

  page: number;
  setPage: (f: number) => void;
  pageSize: number;
  setPageSize: (f: number) => void;
  search: string;
  setSearch: (f: string) => void;
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
    pageButtonKeys: number[];
    maxPages: number;
  };
  api: ITableFc<T>;
} {
  const ui = useUIContext();
  const {
    extendRowRenderer,
    editMode,
    columnFilter,
    sortable,
    pagination,
    filter,
  } = props;
  const isSelectable = (props.isSelectable as string) ?? null;
  const [rowData, setRowData] = useState<T[]>(props.rowData || []);
  const [columnDefs] = useState<ColumTableProps<T>[]>(props.columnDefs || []);
  const [rowAction] = useState<TableActionFc<T>[]>(props.rowAction || []);
  const [selection, setSelection] = useState<(number | string)[]>([]);
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState('');

  const pageSizes = useMemo(() => {
    return pagination?.sizes || [10, 25, 50];
  }, [pagination?.sizes]);
  const [pageSize, setPageSize] = useState<number>(
    pagination?.defaultSize || pageSizes[0],
  );

  const [hasExtend] = useState<boolean>(!!extendRowRenderer);
  const [colFilter, setColFilter] = useState<string[] | null>(
    columnFilter ?? null,
  );
  const [sort, setSort] = useState<ITableSort<T> | null>(null);

  const getKey = useCallback(
    function getKey(index: number | string | T): number | string {
      if (!isSelectable) {
        throw new Error('TableStore: isSelectable is not set');
      }
      return typeof index === 'number' || typeof index === 'string'
        ? index
        : (index as any)[isSelectable];
    },
    [isSelectable],
  );

  const rowSelected = useCallback(
    function rowSelected(index: number | string | T): boolean {
      const ind = getKey(index);
      return selection.includes(ind);
    },
    [getKey, selection],
  );

  const rowSelect = useCallback(
    function rowSelect(index: number | string | T) {
      const ind = getKey(index);
      if (!selection.includes(ind)) {
        props.onSelectionChange?.([...selection, ind]);
        setSelection([...selection, ind]);
      }
    },
    [getKey, selection, props],
  );

  const rowUnSelect = useCallback(
    function rowUnSelect(index: number | string | T) {
      const ind = getKey(index);
      setSelection(selection.filter((i) => i !== ind));
    },
    [getKey, selection],
  );
  function hasEditMode() {
    return !!editMode;
  }
  const getColumDefs = useCallback(
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
                    if (typeof ax === 'string') {
                      return 1;
                    }
                    if (typeof bx === 'string') {
                      return -1;
                    }
                    return 0;
                  }
                : undefined,
              filter: filter
                ? (value, a) => {
                    const ax = a[x.field];
                    if (ax && typeof ax === 'string') {
                      return ax
                        .toLocaleLowerCase()
                        .includes(value.toLocaleLowerCase());
                    }
                    return false;
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
                    if (typeof ax === 'number') {
                      return 1;
                    }
                    if (typeof bx === 'number') {
                      return -1;
                    }
                    return 0;
                  }
                : undefined,
              filter: filter
                ? (value, a) => {
                    const ax = a[x.field];
                    if (ax && typeof ax === 'number') {
                      return ax.toString().includes(value);
                    }
                    return false;
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
          case 'date':
            return {
              sort: sortable
                ? (a, b) => {
                    const ax = a[x.field];
                    const bx = b[x.field];
                    if (ax instanceof Date && bx instanceof Date) {
                      return ax.getTime() - bx.getTime();
                    }
                    if (ax instanceof Date) {
                      return 1;
                    }
                    if (bx instanceof Date) {
                      return -1;
                    }
                    return 0;
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
    },
    [
      colFilter,
      columnDefs,
      editMode,
      filter,
      hasExtend,
      isSelectable,
      rowAction,
      rowSelect,
      rowSelected,
      rowUnSelect,
      sortable,
      ui.translation,
    ],
  );
  useEffect(() => {
    setRowData(props.rowData || []);
  }, [props.rowData]);

  const [pageData, maxPages] = useMemo(() => {
    let sx;

    if (!sort) {
      sx = rowData;
    } else {
      const sortFc = getColumDefs().find((e) => e.field === sort.key)?.sort;
      if (sortFc) {
        if (sort.order === 'DSC') {
          sx = rowData.sort(sortFc).reverse();
        } else {
          sx = rowData.sort(sortFc);
        }
      } else {
        sx = rowData;
      }
    }
    if (search) {
      const filters = getColumDefs().filter((x) => !!x.filter);
      sx = sx.filter((e) => filters.some((v) => v.filter!(search, e)));
    }
    const max = Math.ceil(sx.length / pageSize);
    if (pagination) {
      sx = sx.slice(page * pageSize, (page + 1) * pageSize);
    }

    return [sx, max];
  }, [getColumDefs, page, pageSize, pagination, rowData, search, sort]);

  const pageButtonKeys = useMemo(() => {
    const allPage = Array.from(new Array(maxPages).keys());
    if (maxPages <= 5) {
      return allPage;
    }
    if (page < 2) {
      return allPage.slice(0, 5);
    }
    if (page + 3 > maxPages) {
      return allPage.slice(maxPages - 5, maxPages + 1);
    }
    return allPage.slice(page - 2).slice(0, 5);
  }, [maxPages, page]);

  return {
    data: {
      rowData: pageData,
      pageButtonKeys,
      maxPages,
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
      search,
      setSearch,
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
