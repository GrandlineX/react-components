import React, { MouseEvent } from 'react';
import { cnx } from '../../util';

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
      <span>{children}</span>
      {text}
    </button>
  );
};

export { Button };
