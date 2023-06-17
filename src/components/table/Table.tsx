import React, { useMemo, useState } from 'react';
import {
  IOChevronDown,
  IOChevronUp,
  IOClose,
  IOPencil,
} from '@grandlinex/react-icons';
import { cnx } from '../../util';
import {
  ColumTableProps,
  getCellValue,
  TableActionFc,
  TableProps,
  TableRowProps,
  useTableStore,
} from './TableHook';
import Form from '../form/Form';
import {
  FormConf,
  FormErrorType,
  InputOption,
  InputOptionType,
} from '../form/FormTypes';

function defaultCellrenderer(value: any) {
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }
  if (typeof value === 'number' || typeof value === 'string') {
    return value;
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return '';
}
function TableRow<T>(props: TableRowProps<T>) {
  const { api, rowData, index, extendRowRenderer } = props;
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [fEdit, setFEdit] = useState<T>(rowData);

  const ac = useMemo<TableActionFc<T>[]>(() => {
    const xc = [];
    if (api.hasEditMode()) {
      xc.push(() => ({
        name: 'Edit',
        icon: edit ? <IOClose /> : <IOPencil />,
        onClick: () => {
          setEdit(!edit);
        },
      }));
    }
    if (extendRowRenderer) {
      xc.push(() => ({
        name: 'Show More',
        icon: open ? <IOChevronUp /> : <IOChevronDown />,
        onClick: () => {
          setOpen(!open);
        },
      }));
    }

    return xc;
  }, [extendRowRenderer, open, edit, setEdit]);
  const formC = useMemo<FormConf>(() => {
    if (!edit) {
      return [];
    }
    const conf: ColumTableProps<T>[] = api
      .getColumDefs()
      .filter((e) => e.editable);

    const transForm: (inp: ColumTableProps<T>) => InputOption = (inp) => {
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
    const out: FormConf = [];
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
  }, [edit]);
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
            <td>
              {h.cellRenderer?.({
                data: rowData,
                index,
                value: val,
              }) || defaultCellrenderer(val)}
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
            <Form
              options={formC}
              defaultState={fEdit}
              onChange={(f) => {
                setFEdit(f);
              }}
              submit={{
                loading: true,
                buttonText: 'Save',
                onSubmit: async (
                  form: any,
                  setError: (err: FormErrorType | null) => void,
                  clear: () => void
                ) => {
                  const res = await api.editMode?.(form, setError, clear);
                  if (res) {
                    setEdit(false);
                  }
                },
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
TableRow.defaultProps = {
  extendRowRenderer: undefined,
};
function Table<T = any>(props: TableProps<T>) {
  const { api, data } = useTableStore(props);
  const { extendRowRenderer, className, fixedHeader, isSelectable } = props;

  return (
    <table
      className={cnx('glx-table-root', className, [
        !!fixedHeader,
        'glx-table--fixed-header',
      ])}
    >
      <thead>
        <tr>
          {api.getColumDefs().map((h) => (
            <th>{h.headerName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rowData.map((row, index) => (
          <TableRow
            key={isSelectable ? `row_${(row as any)[isSelectable]}` : undefined}
            api={api}
            rowData={row}
            index={index}
            extendRowRenderer={extendRowRenderer}
          />
        ))}
      </tbody>
    </table>
  );
}
Table.defaultProps = {
  defaultColDef: undefined,
  onClickRow: undefined,
  onCellValueChanged: undefined,
  extendRowRenderer: undefined,
  rowAction: undefined,
  isSelectable: false,
  onSelectionChange: undefined,
};
export default Table;
