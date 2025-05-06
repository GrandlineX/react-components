import React, { useMemo, useState } from 'react';
import {
  IOCaretBack,
  IOCaretForward,
  IOChevronDown,
  IOChevronForward,
  IOChevronUp,
  IOClose,
  IOPencil,
  IOPlaySkipBack,
  IOPlaySkipForward,
  IOSearch,
} from '@grandlinex/react-icons';
import { cnx, GLang, useUIContext } from '../../util';
import {
  ColumTableProps,
  getCellValue,
  TableActionFc,
  TableProps,
  TableRowProps,
  useTableStore,
} from './TableHook';
import Form from '../form/Form';
import { FormConf, InputOption, InputOptionType } from '../form/FormTypes';
import { Grid } from '../Grid/Grid';

function defaultCellrenderer(value: any, t: GLang) {
  if (typeof value === 'boolean') {
    return value
      ? t.get('glx.table.value.bool.true')
      : t.get('glx.table.value.bool.false');
  }
  if (typeof value === 'number' || typeof value === 'string') {
    return value;
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return '';
}
function TableRow<T extends Record<string, any>>(
  props: Readonly<TableRowProps<T>>,
) {
  const ui = useUIContext();
  const { api, rowData, index, extendRowRenderer } = props;
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [fEdit, setFEdit] = useState<T>(rowData);

  const ac = useMemo<TableActionFc<T>[]>(() => {
    const xc = [];
    if (api.hasEditMode()) {
      xc.push(() => ({
        name: ui.translation.get('glx.table.action.edit'),
        icon: edit ? <IOClose /> : <IOPencil />,
        onClick: () => {
          setEdit(!edit);
        },
      }));
    }
    if (extendRowRenderer) {
      xc.push(() => ({
        name: ui.translation.get('glx.table.action.more'),
        icon: open ? <IOChevronUp /> : <IOChevronDown />,
        onClick: () => {
          setOpen(!open);
        },
      }));
    }

    return xc;
  }, [extendRowRenderer, open, edit, setEdit, api, ui.translation]);
  const formC = useMemo<FormConf<T>>(() => {
    if (!edit) {
      return [];
    }
    const conf: ColumTableProps<T>[] = api
      .getColumDefs()
      .filter((e) => e.editable);

    const transForm: (inp: ColumTableProps<T>) => InputOption<T> = (inp) => {
      let type: InputOptionType;
      switch (inp.dataType) {
        case 'date':
          type = InputOptionType.DATE_TIME;
          break;
        case 'boolean':
          type = InputOptionType.CHECKBOX;
          break;
        case 'number':
          type = InputOptionType.NUMBER;
          break;
        default:
          type = InputOptionType.TEXT;
          break;
      }

      return {
        key: inp.field,
        label: inp.headerName,
        type,
      };
    };
    const out: FormConf<T> = [];
    for (let i = 0; i < conf.length; i += 2) {
      const f = conf[i];
      const s = conf[i + 1];
      if (f && s) {
        out.push([transForm(f), transForm(s)]);
      } else {
        out.push([transForm(f)]);
      }
    }
    return out;
  }, [api, edit]);
  return (
    <>
      <tr
        className={cnx('glx-table--row glx-table--row-hover', [
          index % 2 === 1,
          'glx-table--row-even',
        ])}
      >
        {api.getColumDefs(ac).map((h) => {
          const val = getCellValue(rowData, h);
          return (
            <td style={h.style}>
              {h.cellRenderer?.({
                data: rowData,
                index,
                value: val,
              }) || defaultCellrenderer(val, ui.translation)}
            </td>
          );
        })}
      </tr>

      {api.hasEditMode() && edit ? (
        <tr
          className={cnx('glx-table--row', [
            index % 2 === 1,
            'glx-table--row-even',
          ])}
        >
          <td colSpan={api.getColumDefs().length}>
            <Form<T>
              options={formC}
              defaultState={fEdit}
              onChange={({ form }) => {
                setFEdit(form);
              }}
              loading
              buttonText={ui.translation.get('glx.table.action.save')}
              onSubmit={async ({ form, setError, clear }) => {
                const res = await api.editMode?.({
                  row: form,
                  setError,
                  clear,
                  api,
                });
                if (res) {
                  setEdit(false);
                }
              }}
            />
          </td>
        </tr>
      ) : null}
      {extendRowRenderer && open ? (
        <tr
          className={cnx('glx-table--row', [
            index % 2 === 1,
            'glx-table--row-even',
          ])}
        >
          <td colSpan={api.getColumDefs().length}>
            {extendRowRenderer({ data: rowData, index })}
          </td>
        </tr>
      ) : null}
    </>
  );
}
function Table<T extends Record<string, any>>(props: TableProps<T>) {
  const { api, data } = useTableStore<T>(props);
  const {
    extendRowRenderer,
    className,
    fixedHeader,
    sortable,
    isSelectable = false,
    pagination,
    filter,
    children,
  } = props;

  const {
    sort,
    setSort,
    page,
    setPage,
    pageSize,
    setPageSize,
    pageSizes,
    search,
    setSearch,
  } = api;
  const ui = useUIContext();

  return (
    <Grid flex flexC gap={8} className="glx-table--container">
      {(children || filter === true) && (
        <Grid
          flex
          flexRow
          flexSpaceB
          vCenter
          style={{ alignItems: 'baseline' }}
          className="glx-table--command-bar glx-default-text"
        >
          {filter && (
            <Form
              defaultState={{
                search,
              }}
              options={[
                [
                  {
                    key: 'search',
                    type: InputOptionType.TEXT,
                    label: (
                      <span>
                        <IOSearch />
                        {ui.translation.get('glx.table.search.fiel')}
                      </span>
                    ),
                  },
                ],
              ]}
              onChange={({ form }) => {
                if (pagination) {
                  setPage(0);
                }
                setSearch(form.search);
              }}
              compact="full"
            />
          )}

          {children}
        </Grid>
      )}
      <div className="glx-table--wrapper">
        <table
          className={cnx('glx-table-root', className, [
            !!fixedHeader,
            'glx-table--fixed-header',
          ])}
        >
          <thead>
            <tr>
              {api.getColumDefs().map((h) => (
                <th key={`key_${h.headerName}`}>
                  <Grid
                    flex
                    flexR
                    center
                    gap={4}
                    className={cnx([!!sortable && !!h.sort, 'can-sort'])}
                    onClick={(e) => {
                      if (!!sortable && !!h.sort) {
                        e.preventDefault();

                        if (
                          sort &&
                          (sort.key !== h.field || sort.order === 'DSC')
                        ) {
                          setSort({
                            key: h.field,
                            order: 'ASC',
                          });
                        } else {
                          setSort({
                            key: h.field,
                            order: 'DSC',
                          });
                        }
                      }
                    }}
                  >
                    {h.headerName}
                    {sort && h.field === sort.key && sort.order === 'DSC' && (
                      <IOChevronUp />
                    )}
                    {sort && h.field === sort.key && sort.order === 'ASC' && (
                      <IOChevronDown />
                    )}
                    {h.field !== sort?.key && (
                      <span className="hover-sort">
                        <IOChevronDown />
                      </span>
                    )}
                    {h.field !== sort?.key && (
                      <span className="pending-sort">
                        <IOChevronForward />
                      </span>
                    )}
                  </Grid>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rowData.map((row, index) => (
              <TableRow<T>
                key={
                  isSelectable ? `row_${(row as any)[isSelectable]}` : undefined
                }
                api={api}
                rowData={row}
                index={index}
                extendRowRenderer={extendRowRenderer}
              />
            ))}
          </tbody>
        </table>
      </div>

      {pagination && (
        <Grid
          flex
          flexRow
          flexSpaceB
          className="glx-table--pager glx-default-text"
        >
          <Grid flex flexR gap={4}>
            {pageSizes.map((e) => (
              <button
                disabled={pageSize === e}
                type="button"
                onClick={() => {
                  if (page * e > data.rowData.length) {
                    setPage(0);
                  }
                  setPageSize(e);
                }}
              >
                {e}
              </button>
            ))}
          </Grid>
          <Grid flex flexR gap={4}>
            {data.maxPages > 5 && (
              <>
                <button
                  className="glx-table--navigator"
                  type="button"
                  disabled={page === 0}
                  onClick={() => setPage(0)}
                >
                  <IOPlaySkipBack />
                </button>
                <button
                  className="glx-table--navigator"
                  type="button"
                  disabled={page === 0}
                  onClick={() => setPage(page - 1)}
                >
                  <IOCaretBack />
                </button>
              </>
            )}
            {data.pageButtonKeys.map((e) => (
              <button
                disabled={page === e}
                type="button"
                onClick={() => setPage(e)}
              >
                {e + 1}
              </button>
            ))}

            {data.maxPages > 5 && (
              <>
                <button
                  className="glx-table--navigator"
                  disabled={page === data.maxPages - 1}
                  type="button"
                  onClick={() => setPage(page + 1)}
                >
                  <IOCaretForward />
                </button>
                <button
                  className="glx-table--navigator"
                  disabled={page === data.maxPages - 1}
                  type="button"
                  onClick={() => setPage(data.maxPages - 1)}
                >
                  <IOPlaySkipForward />
                </button>
              </>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Table;
