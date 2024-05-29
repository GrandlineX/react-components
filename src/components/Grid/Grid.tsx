import React, { HTMLAttributes, useMemo } from 'react';
import { cnx, CnxInput } from '../../util';

type GridProps = React.PropsWithChildren<
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    divRef?: React.Ref<HTMLDivElement>;
    className?: CnxInput | CnxInput[];
    flex?: boolean;
    flexRow?: boolean;
    flexR?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
    flexMobile?: boolean;
    flexColumn?: boolean;
    flexC?: boolean;
    flexStart?: boolean;
    flexEnd?: boolean;
    flexSpaceA?: boolean;
    flexSpaceB?: boolean;
    flexWrap?: boolean;
    center?: boolean;
    vCenter?: boolean;
    hCenter?: boolean;
    gap?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 24;
    grow?: 0 | 1 | 2;
    layOut?: '1-3' | '2-3' | '1-2';
  }
>;

const optionMap = new Map<keyof GridProps, string>([
  ['flexStart', 'glx-flex-start'],
  ['layOut', 'glx-layout-$VAL'],
  ['fullWidth', 'glx-w-full'],
  ['fullHeight', 'glx-h-full'],
  ['flexMobile', 'glx-mobile-wrap'],
  ['flexEnd', 'glx-flex-end'],
  ['flexSpaceA', 'glx-flex-space-around'],
  ['flexSpaceB', 'glx-flex-space-between'],
  ['center', 'glx-flex-center'],
  ['vCenter', 'glx-flex-v-center'],
  ['hCenter', 'glx-flex-h-center'],
  ['flex', 'glx-flex'],
  ['flexRow', 'glx-flex-row'],
  ['flexR', 'glx-flex-r'],
  ['flexColumn', 'glx-flex-column'],
  ['flexC', 'glx-flex-c'],
  ['gap', 'glx-flex-g-$VAL'],
  ['grow', 'glx-flex-grow-$VAL'],
  ['flexWrap', 'glx-flex-wrap'],
]);

export default function Grid(props: GridProps) {
  const { children } = props;

  const outProps: Record<string, any> = useMemo(() => {
    const xProps = { ...props };
    const divProps: Record<string, any> = {};
    const keys = Object.keys(xProps) as (keyof GridProps)[];
    const nC: CnxInput[] = [];
    for (const key of keys) {
      if (key) {
        const val: any = xProps[key];
        switch (key) {
          // CUSTOM CASES
          case 'className':
            if (Array.isArray(val)) {
              nC.push(...val);
            } else {
              nC.push(val);
            }
            break;
          case 'divRef':
            divProps.ref = val;
            break;
          // EMPTY CASES
          case 'children':
          case undefined:
          case null:
            break;
          // Default CASES
          default:
            if (optionMap.has(key)) {
              if (val !== undefined) {
                nC.push(optionMap.get(key)!.replace('$VAL', val));
              }
            } else {
              divProps[key] = val;
            }
            break;
        }
      }
    }
    if (nC.length > 0) {
      divProps.className = cnx(...nC);
    }
    return divProps;
  }, [props]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div {...outProps}>{children}</div>;
}
