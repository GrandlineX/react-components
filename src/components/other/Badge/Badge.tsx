import React, { useMemo } from 'react';
import { getIcon, INames, IOClose } from '@grandlinex/react-icons';
import { cnx } from '../../../util';

export type CustomBadgeColor = `!#${string}&#${string}!`;
export type BadgeColor =
  | 'red'
  | 'black'
  | 'yellow'
  | 'green'
  | 'orange'
  | CustomBadgeColor;
function isCustomBadge(color: BadgeColor): color is CustomBadgeColor {
  return /^!#.*&#.*!$/.test(color);
}
export type BadgeProps = {
  text?: string;
  color?: BadgeColor;
  icon?: INames;
  close?: () => void;
};
export const Badge = (prop: BadgeProps) => {
  const { text, color, icon, close } = prop;
  const customColor = useMemo(() => {
    if (color && isCustomBadge(color)) {
      const [bg, fg] = color.slice(1, -1).split('&');
      return {
        backgroundColor: bg,
        color: fg,
      };
    }
    return undefined;
  }, [color]);
  return (
    <div
      style={customColor}
      className={cnx(`glx-badge`, [
        !!color && !customColor,
        `glx-badge--${color}`,
      ])}
    >
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
