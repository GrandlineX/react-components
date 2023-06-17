import React, { useState } from 'react';
import {
  getIcon,
  INames,
  IOChevronDown,
  IOChevronForward,
  ISize,
} from '@grandlinex/react-icons';
import { Grid } from '../../../components';

export interface MenuItemInterface {
  icon: INames | null;
  text: string;
  key: string;
  isMenu: boolean;
  onClick?: (key: string) => void;
  children: MenuItemInterface[];
}

function isShown(item: MenuItemInterface, search: string | undefined): number {
  if (!search) {
    return 1;
  }
  const low = search.toLowerCase();
  if (item.text.toLowerCase().search(low) !== -1) {
    return 2;
  }
  for (const child of item.children) {
    const a = isShown(child, search);
    if (a > 0) return 1;
  }
  return 0;
}

const PanelMenuItem: React.FC<{
  item: MenuItemInterface;
  level?: number;
  search?: string;
  homeFlag?: boolean;
  defaultOnClick?: (key: string) => void;
  noFilter?: boolean;
}> = function (props) {
  const { item, level, search, noFilter, homeFlag, defaultOnClick } = props;

  const [open, setOpen] = useState<boolean>(false);

  const { icon, text, key, children, isMenu } = item;

  const active = isShown(item, search);
  if (active === 0 && !noFilter) {
    return null;
  }
  const clk = () => {
    if (!isMenu) {
      if (item.onClick) {
        item.onClick(item.key);
      } else {
        defaultOnClick?.(item.key);
      }
    }
  };
  const menuFunc = () => {
    if (isMenu) {
      setOpen(!open);
    } else {
      clk();
    }
  };
  const show = open || (search && search.length > 0);
  return (
    <>
      <Grid
        key={key}
        className={[
          `menu-item glx-no-select menu-item-level--${level || 0}`,
          'glx-default-text',
          [isMenu, 'menu-item--sub-menu'],
        ]}
        onClick={menuFunc}
        flex
        flexR
        vCenter
        gap={2}
        flexSpaceB
      >
        <Grid flex flexR className="menu-item--content" vCenter gap={4}>
          <div className="menu-item--space" />
          <div>{icon ? getIcon(icon)({ size: 16 }) : null}</div>
          <div>{text}</div>
        </Grid>

        {!homeFlag ? (
          <div className="menu-item--sub-menu-icon">
            {isMenu ? (
              <button>
                {show ? (
                  <IOChevronDown size={ISize.SM} />
                ) : (
                  <IOChevronForward size={ISize.SM} />
                )}
              </button>
            ) : null}
          </div>
        ) : null}
      </Grid>
      {show
        ? children.map((ch) => (
            <PanelMenuItem
              key={ch.key}
              item={ch}
              level={(level || 0) + 1}
              search={search}
              defaultOnClick={defaultOnClick}
              noFilter={noFilter || active === 2}
            />
          ))
        : null}
    </>
  );
};
PanelMenuItem.defaultProps = {
  level: 0,
  search: '',
  homeFlag: false,
  defaultOnClick: undefined,
  noFilter: undefined,
};
export { PanelMenuItem };
