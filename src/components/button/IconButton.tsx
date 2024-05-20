import React, { MouseEvent } from 'react';
import { getIcon, INames } from '@grandlinex/react-icons';
import { cnx } from '../../util';
import Tooltip, { ToolTipProp } from '../tooltip/Tooltip';

export type IconButtonProps = {
  onClick: (event?: MouseEvent) => void;
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
  toolTip?: ToolTipProp;
  icon?: INames;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};
const IconButton = (props: IconButtonProps) => {
  const {
    onClick,
    disabled,
    icon,
    children,
    color,
    className,
    toolTip,
    style,
  } = props;

  return (
    <Tooltip
      text={toolTip?.text}
      width={toolTip?.width}
      className={toolTip?.className}
      position={toolTip?.position}
    >
      <button
        style={style}
        className={cnx('glx-icon-button', className, [
          !!color,
          `glx-icon-button--${color}`,
          'glx-icon-button--default',
        ])}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        <span>
          {icon ? getIcon(icon)({}) : null}
          {children}
        </span>
      </button>
    </Tooltip>
  );
};
IconButton.defaultProps = {
  color: undefined,
  className: undefined,
  disabled: undefined,
  toolTip: undefined,
  children: undefined,
  icon: undefined,
  style: undefined,
};
export { IconButton };
