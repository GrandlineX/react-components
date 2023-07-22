import React, { useEffect, useState } from 'react';
import { getIcon, INames, IOChevronForward } from '@grandlinex/react-icons';
import { cnx } from '../../util';
import { useAutoClose18 } from '../../util/hooks';

export interface MenuItem {
  key: string;
  icon?: INames;
  label: string;
  subMenu?: MenuItem[];
  checkBox?: boolean;
  value?: boolean;
  fc?: () => Promise<void>;
  isLabel?: boolean;
}

const DropDownIconMenu: React.FC<{
  menu: MenuItem[];
  isSubMenu?: boolean;
  left?: boolean;
  top?: boolean;
  className?: string;
  onChange?: (key: string, mode?: boolean) => void;
  initialValue?: Record<string, boolean>;
  children?: React.ReactNode;
}> = (props) => {
  const {
    menu,
    left,
    children,
    className,
    onChange,
    initialValue,
    isSubMenu,
    top,
  } = props;
  const [active, setActive] = useState<any | undefined>(initialValue ?? {});
  const [height, setHeight] = useState<number>(0);
  function closeAll(men?: { key: string; value: any }) {
    const keys = Object.keys(active).filter((key) =>
      key.startsWith('submenu_'),
    );
    const newActive = { ...active };
    for (const key of keys) {
      newActive[key] = false;
    }
    if (men) {
      newActive[men.key] = men.value;
    }
    setActive(newActive);
  }
  const [menuRef, open, setOpen] = useAutoClose18<HTMLDivElement>({
    extendSearch: 'glx-icon--drop-submenu',
    closeFc: () => {
      closeAll();
    },
  });
  useEffect(() => {
    if (menuRef.current && menuRef.current.clientHeight !== height) {
      setHeight(menuRef.current?.clientHeight ?? 0);
    }
  }, [height, menuRef.current, menuRef]);
  return (
    <div className={cnx('glx-icon-button-wr', className)}>
      <button className="glx-icon-button" onClick={() => setOpen(!open)}>
        {children || getIcon('IOEllipsisVertical')({})}
      </button>
      {open ? (
        <div
          ref={menuRef}
          style={top ? { top: -height } : undefined}
          className={cnx(
            'glx-icon--drop',
            [!!left, 'glx-icon--drop--left'],
            [!!top, 'glx-icon--drop--top'],
            [!!top && height === 0, 'glx-hidden'],
          )}
        >
          {menu.map((el) =>
            el.subMenu ? (
              <div className="glx-icon--drop-submenu">
                <button
                  type="button"
                  onClick={() => {
                    const k = `submenu_${el.key}`;
                    const v = !active[k];
                    closeAll({ key: k, value: v });
                  }}
                  key={el.key}
                >
                  {el.icon ? getIcon(el.icon)({}) : null}
                  {el.label} <IOChevronForward />
                </button>
                {active[`submenu_${el.key}`] ? (
                  <div
                    className={cnx(
                      [!!left, 'glx-icon--drop-submenu-block--left'],
                      [!!top, 'glx-icon--drop-submenu-block--top'],
                      [!left && !top, 'glx-icon--drop-submenu-block'],
                    )}
                  >
                    {el.subMenu.map((del) => (
                      <button
                        type="button"
                        disabled={del.isLabel}
                        onClick={() => {
                          const v =
                            el.value === undefined
                              ? !active[del.key]
                              : !el.value;
                          del.fc?.();
                          onChange?.(del.key, v);
                          setActive({ ...active, [del.key]: v });
                        }}
                        key={del.key}
                      >
                        {del.checkBox ? (
                          <input
                            type="checkbox"
                            checked={del.value ?? (active[del.key] || false)}
                          />
                        ) : null}
                        {del.icon ? getIcon(del.icon)({}) : null}
                        {del.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <button
                type="button"
                disabled={el.isLabel}
                onClick={() => {
                  const v =
                    el.value === undefined ? !active[el.key] : !el.value;
                  el.fc?.();
                  onChange?.(el.key, v);
                  setActive({ ...active, [el.key]: v });
                }}
                key={el.key}
              >
                {el.checkBox ? (
                  <input
                    type="checkbox"
                    checked={el.value ?? (active[el.key] || false)}
                  />
                ) : null}
                {el.icon ? getIcon(el.icon)({}) : null}
                {el.label}
              </button>
            ),
          )}
        </div>
      ) : null}
    </div>
  );
};

DropDownIconMenu.defaultProps = {
  left: false,
  top: false,
  onChange: undefined,
  className: undefined,
  initialValue: undefined,
  isSubMenu: false,
  children: undefined,
};
export default DropDownIconMenu;
