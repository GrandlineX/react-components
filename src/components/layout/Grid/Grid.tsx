import React, { HTMLAttributes } from 'react';
import { cnx, CnxInput } from '../../../util';

type GridProps = React.PropsWithChildren<
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    divRef?: React.Ref<HTMLDivElement>;
    className?: CnxInput | CnxInput[];
    flex?: boolean;
    flexRow?: boolean;
    flexR?: boolean;
    fullWidth?: boolean;
    flexMobile?: boolean;
    flexColumn?: boolean;
    flexC?: boolean;
    flexStart?: boolean;
    flexEnd?: boolean;
    flexSpaceA?: boolean;
    flexSpaceB?: boolean;
    center?: boolean;
    vCenter?: boolean;
    hCenter?: boolean;
    gap?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 24;
    grow?: 0 | 1 | 2;
    layOut?: '1-3' | '2-3' | '1-2';
  }
>;

export default function Grid(props: GridProps) {
  const xProps = { ...props };
  const { children } = props;
  const nC: CnxInput[] = [];
  const divProps: Record<string, any> = {};
  const keys = Object.keys(xProps) as (keyof GridProps)[];
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
        case 'flexStart':
          if (val) nC.push('glx-flex-start');
          break;
        case 'layOut':
          if (val) nC.push(`glx-layout-${val}`);
          break;
        case 'fullWidth':
          if (val) nC.push('glx-w-full');
          break;
        case 'flexMobile':
          if (val) nC.push('glx-mobile-wrap');
          break;
        case 'flexEnd':
          if (val) nC.push('glx-flex-end');
          break;
        case 'flexSpaceA':
          if (val) nC.push('glx-flex-space-around');
          break;
        case 'flexSpaceB':
          if (val) nC.push('glx-flex-space-between');
          break;
        case 'gap':
          if (val) nC.push(`glx-flex-g-${val}`);
          break;
        case 'grow':
          if (val) nC.push(`glx-flex-grow-${val}`);
          break;
        case 'center':
          if (val) nC.push('glx-flex-center');
          break;
        case 'vCenter':
          if (val) nC.push('glx-flex-v-center');
          break;
        case 'hCenter':
          if (val) nC.push('glx-flex-h-center');
          break;
        case 'flex':
          if (val) nC.push('glx-flex');
          break;
        case 'flexRow':
          if (val) nC.push('glx-flex-row');
          break;
        case 'flexR':
          if (val) nC.push('glx-flex-r');
          break;
        case 'flexColumn':
          if (val) nC.push('glx-flex-column');
          break;
        case 'flexC':
          if (val) nC.push('glx-flex-c');
          break;
        // EMPTY CASES
        case 'children':
        case undefined:
        case null:
          break;
        // Default CASES
        default:
          divProps[key] = val;
          break;
      }
    }
  }
  if (nC.length > 0) {
    divProps.className = cnx(...nC);
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div {...divProps}>{children}</div>;
}

Grid.defaultProps = {
  className: undefined,
  flex: undefined,
  flexRow: undefined,
  flexR: undefined,
  flexColumn: undefined,
  flexC: undefined,
  divRef: undefined,
  center: undefined,
  vCenter: undefined,
  hCenter: undefined,
  gap: undefined,
  grow: undefined,
  flexStart: undefined,
  flexEnd: undefined,
  flexSpaceA: undefined,
  flexSpaceB: undefined,
  fullWidth: undefined,
  layOut: undefined,
  flexMobile: undefined,
};
