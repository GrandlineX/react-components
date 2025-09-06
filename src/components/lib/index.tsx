import React, { CSSProperties, ReactNode } from 'react';
import { Icon, INames, ISize } from '@grandlinex/react-icons';
import { cnx, CnxInput, CnxInputCondition } from '../../util';

export type BaseProps = {
  className?: CnxInput | CnxInput[];
  style?: CSSProperties;
};

export type IconNodeType = INames | ReactNode;

export function isCnxInput(obj: unknown): obj is CnxInputCondition {
  return (
    Array.isArray(obj) &&
    obj.length >= 2 &&
    obj.length <= 3 &&
    typeof obj[0] === 'boolean' &&
    typeof obj[1] === 'string' &&
    (typeof obj[2] === 'string' || obj.length === 2)
  );
}
export function classN(
  className?: CnxInput | CnxInput[],
  merge?: CnxInput | CnxInput[],
) {
  const out: CnxInput[] = [];
  if (!className && !merge) {
    return undefined;
  }
  if (isCnxInput(className) || typeof className === 'string') {
    out.push(className);
  } else if (className) {
    out.push(...className);
  }
  if (isCnxInput(merge) || typeof merge === 'string') {
    out.push(merge);
  } else if (merge) {
    console.log('merge', merge);
    out.push(...merge);
    console.log('out', out);
  }
  return cnx(...out);
}

export function styleM(style?: CSSProperties, merged?: CSSProperties) {
  let out: CSSProperties = {};
  if (merged) {
    out = {
      ...merged,
    };
  }
  if (style) {
    out = {
      ...style,
    };
  }
  return out;
}

export function renderIcon(icon?: IconNodeType, size = ISize.MD): ReactNode {
  if (!icon) return null;
  if (typeof icon === 'string') {
    return <Icon name={icon as INames} size={size} />;
  }
  return icon;
}
