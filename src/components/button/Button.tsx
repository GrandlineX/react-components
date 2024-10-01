import React, { MouseEvent } from 'react';
import { cnx } from '../../util';
import Grid from '../Grid/Grid';

export type ButtonProps = {
  onClick: (event?: MouseEvent) => void;
  text?: string;
  className?: string;
  color?:
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
  gap?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 24;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};
const Button = (props: ButtonProps) => {
  const {
    onClick,
    text,
    cancel,
    disabled,
    children,
    half,
    color,
    className,
    style,
    gap,
  } = props;

  return (
    <button
      style={style}
      className={cnx(
        'button--grid',
        'bubble',
        className,
        [!!cancel, 'cancel'],
        [!!half, 'button--grid-half'],
        [!!color, `button--${color}`, 'button--default'],
      )}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <Grid flex flexR gap={gap} vCenter hCenter>
        {children}
        {text}
      </Grid>
    </button>
  );
};

export { Button };
