import React, { MouseEvent, useMemo } from 'react';
import { cnx } from '../../util';
import { Grid } from '../Grid/Grid';

export type ButtonProps = {
  onClick: (event?: MouseEvent) => void;
  text?: string;
  className?: string;
  color?: string;
  bubble?:
    | 'red'
    | 'blue'
    | 'yellow'
    | 'purple'
    | 'green'
    | 'orange'
    | 'cyan'
    | 'pink';
  disabled?: boolean;
  cancel?: boolean;
  half?: boolean;
  fadeIn?: boolean;
  gap?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 24;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  allwaysIcon?: boolean;
  style?: React.CSSProperties;
  iconPre?: boolean;
  type?: 'bubble' | 'round';
};
const Button = (props: ButtonProps) => {
  const {
    onClick,
    text,
    cancel,
    disabled,
    children,
    half,
    bubble = 'blue',
    color,
    className,
    style,
    fadeIn,
    icon,
    allwaysIcon,
    type = 'bubble',
    gap = 4,
    iconPre = true,
  } = props;

  const styledObj = useMemo(() => {
    const st = style || {};
    if (type !== 'bubble' && color) {
      st.backgroundColor = color;
    }
    if (fadeIn) {
      st.animation = 'fadeIn 0.5s';
    }
    return st;
  }, [color, fadeIn, style, type]);

  return (
    <button
      style={styledObj}
      className={cnx(
        'button--grid',
        className,
        [!!bubble && type === 'bubble', 'bubble'],
        [!!cancel, 'cancel'],
        [!!half, 'button--grid-half'],
        [
          !!bubble && type === 'bubble',
          `button--bubble-${bubble}`,
          'button--default',
        ],
      )}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <Grid flex flexR gap={gap} vCenter hCenter>
        {icon && iconPre && (
          <span className={cnx([!!allwaysIcon, 'icon-x', 'ico'])}>{icon}</span>
        )}
        {children}
        {text}
        {icon && !iconPre && (
          <span className={cnx([!!allwaysIcon, 'icon-x', 'ico'])}>{icon}</span>
        )}
      </Grid>
    </button>
  );
};

export { Button };
