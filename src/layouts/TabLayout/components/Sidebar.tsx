import React from 'react';
import { getIcon, INames } from '@grandlinex/react-icons';
import { Tooltip } from '../../../components';
import { cnx } from '../../../util';

export type MenuItemLabelType = {
  pos: 'left' | 'right' | 'bottom';
  value: number;
  color?: string;
};

export type MenuItemType = {
  key: string;
  icon: INames;
  name: string;
  show?: () => boolean;
  type?: string;
  onClick?: () => void;
  labelNum?: MenuItemLabelType[];
};

export type SideBarProps = {
  topMenu: MenuItemType[];
  botMenu: MenuItemType[];
  onClickItem?: (key: MenuItemType) => void;
};
function Sidebar(props: SideBarProps) {
  const { topMenu, botMenu, onClickItem } = props;
  return (
    <div className="sidebar--container">
      <div className="sidebar--container-up">
        {topMenu.map(({ icon, onClick, key, name, labelNum }, index, array) => (
          <Tooltip key={`tip_${key}`} text={name} position="right">
            <button
              key={`btn_${key}`}
              type="button"
              className="menu-button"
              onClick={() => {
                if (onClick) {
                  onClick();
                } else if (onClickItem) {
                  onClickItem(array[index]);
                }
              }}
            >
              {labelNum?.map((l) => (
                <span
                  key={`${key}_${l.pos}`}
                  className={cnx(
                    'label--num',
                    [l.pos === 'left', 'label--num-left'],
                    [l.pos === 'right', 'label--num-right'],
                    [l.pos === 'bottom', 'label--num-bottom'],
                  )}
                  style={
                    l.color
                      ? {
                          backgroundColor: l.color,
                        }
                      : undefined
                  }
                >
                  {l.value}
                </span>
              ))}
              {getIcon(icon)({ size: 20 })}
            </button>
          </Tooltip>
        ))}
      </div>
      <div className="sidebar--container-down">
        {botMenu.map(({ icon, key, onClick, name }, index, array) => (
          <Tooltip key={`tip_${key}`} text={name} position="right">
            <button
              key={`btn_${key}`}
              type="button"
              className="menu-button"
              onClick={() => {
                if (onClick) {
                  onClick();
                } else if (onClickItem) {
                  onClickItem(array[index]);
                }
              }}
            >
              {getIcon(icon)({ size: 20 })}
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export { Sidebar };
