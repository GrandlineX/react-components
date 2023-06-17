import React from 'react';
import { getIcon, INames } from '@grandlinex/react-icons';
import { cnx } from '../../util';
import Tooltip, { ToolTipProp } from '../tooltip/Tooltip';

export type IconButtonProps = {
  onClick: () => void;
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
};
const IconButton: React.FC<IconButtonProps> = function (props) {
  const { onClick, disabled, icon, children, color, className, toolTip } =
    props;

  return (
    <Tooltip
      text={toolTip?.text}
      width={toolTip?.width}
      className={toolTip?.className}
      position={toolTip?.position}
    >
      <button
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
};
export { IconButton };
