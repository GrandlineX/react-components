import React from 'react';
import { getIcon, INames, IOClose } from '@grandlinex/react-icons';
import { cnx } from '../../../util';

export type BadgeColor = 'red' | 'black' | 'yellow' | 'green' | 'orange';
export type BadgeProps = {
  text?: string;
  color?: BadgeColor;
  icon?: INames;
  close?: () => void;
};
const Badge = (prop: BadgeProps) => {
  const { text, color, icon, close } = prop;

  return (
    <div className={cnx(`glx-badge`, [!!color, ` glx-badge--${color}`])}>
      {icon ? getIcon(icon)({}) : null}
      {text}
      {close ? (
        <button onClick={close}>
          <IOClose />
        </button>
      ) : null}
    </div>
  );
};

export default Badge;
