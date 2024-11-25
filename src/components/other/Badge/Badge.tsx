import React, { useMemo } from 'react';
import { getIcon, INames, IOClose } from '@grandlinex/react-icons';
import { cnx } from '../../../util';

export type CustomBadgeColor = `!#${string}&#${string}!`;
export type BadgeColor =
  | 'red'
  | 'blue'
  | 'black'
  | 'yellow'
  | 'green'
  | 'orange'
  | CustomBadgeColor;

export class BadgeColorX {
  static bgColors: BadgeColor[] = [
    'red',
    'black',
    'blue',
    'yellow',
    'green',
    'orange',
  ];

  private readonly color: BadgeColor;

  constructor(color: string | BadgeColor) {
    if (!BadgeColorX.isValidBadge(color)) {
      throw new Error(`Invalid Badge Color: ${color}`);
    }
    this.color = color;
  }

  toForm() {
    if (BadgeColorX.isCustomBadge(this.color)) {
      return {
        text: this.color,
        mode: 'custom',
        color01: this.getBackground(),
        color02: this.getText() || '#000000',
      };
    }
    return {
      text: this.color,
      mode: this.color,
      color01: '#000000',
      color02: '#ffffff',
    };
  }

  getColor() {
    if (BadgeColorX.isCustomBadge(this.color)) {
      const [bg, fg] = this.color.slice(1, -1).split('&');
      return {
        backgroundColor: bg,
        color: fg,
      };
    }
    return {
      backgroundColor: this.color,
    };
  }

  getBackground() {
    return this.getColor().backgroundColor;
  }

  getText() {
    return this.getColor().color;
  }

  static isCustomBadge(color: BadgeColor): color is CustomBadgeColor {
    return /^!#.*&#.*!$/.test(color);
  }

  static isValidBadge(color: unknown): color is BadgeColor {
    if (typeof color !== 'string') {
      return false;
    }
    if (this.bgColors.includes(color as BadgeColor)) {
      return true;
    }
    return /^!#.*&#.*!$/.test(color);
  }

  getStringColor() {
    return this.color;
  }

  static fromSColor(bg: string, fg: string) {
    return new BadgeColorX(`!#${bg.replace('#', '')}&#${fg.replace('#', '')}!`);
  }
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
    if (color && BadgeColorX.isCustomBadge(color)) {
      return new BadgeColorX(color).getColor();
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
        <button
          onClick={close}
          style={{
            color: customColor?.color,
          }}
        >
          <IOClose />
        </button>
      ) : null}
    </div>
  );
};
