import React, { createRef, useEffect, useState } from 'react';
import { getIcon, IOClose, ISize } from '@grandlinex/react-icons';
import { TabItem } from '../lib';
import { cnx, trimmer } from '../../../util';
import { Tooltip } from '../../../components';

export type TabContainerFunctions = {
  addTab: (el: TabItem, pos: 'left' | 'right', position?: number) => void;
  closeTab: (el: string, pos: 'left' | 'right') => void;
  setCurrentTab: (index: number, pos: 'left' | 'right') => void;
  error: (message: string) => void;
};

export type TabKeyMap = { keyCtrl: boolean; keyTab: boolean; keyW: boolean };
export type TabBarProps = {
  tabsLeft: TabItem[];
  tabsRight: TabItem[];
  currentTabLeft: number;
  currentTabRight: number;
} & TabContainerFunctions;
const TabBar: React.FC<{ c: TabBarProps }> = function (prop) {
  const { c } = prop;
  const {
    tabsLeft,
    tabsRight,
    currentTabLeft,
    currentTabRight,
    addTab,
    closeTab,
    error,
    setCurrentTab,
  } = c;
  const refLeft = createRef<HTMLDivElement>();
  const refRight = createRef<HTMLDivElement>();

  const [dLeft, setDLeft] = useState<boolean>(false);
  const [dRight, setDRight] = useState<boolean>(false);

  const fc = (event: WheelEvent) => {
    const cur = refLeft.current;
    if (!cur) {
      return;
    }
    if (event.deltaY > 0) {
      cur.scrollTo({ left: cur.scrollLeft + 50 });
    } else {
      cur.scrollTo({ left: cur.scrollLeft - 50 });
    }
  };
  const fca = (event: WheelEvent) => {
    const cur = refRight.current;
    if (!cur) {
      return;
    }
    if (event.deltaY > 0) {
      cur.scrollTo({ left: cur.scrollLeft + 50 });
    } else {
      cur.scrollTo({ left: cur.scrollLeft - 50 });
    }
  };

  useEffect(() => {
    const rl = refLeft.current;
    const rr = refRight.current;
    rl?.addEventListener('wheel', fc);
    rr?.addEventListener('wheel', fca);
    return () => {
      rl?.removeEventListener('wheel', fc);
      rr?.removeEventListener('wheel', fca);
    };
  });

  async function onDrop(
    e: React.DragEvent<HTMLDivElement>,
    target: 'left' | 'right',
    position?: number,
  ) {
    const id = e.dataTransfer.getData('id');
    const type: any = e.dataTransfer.getData('type');

    if (target === type) {
      return;
    }
    let tab;

    if (type === 'left') {
      tab = tabsLeft.find((el) => el.key === id);
    } else if (type === 'right') {
      tab = tabsRight.find((el) => el.key === id);
    }

    if (!tab) {
      error('NoTab');
      return;
    }

    closeTab(id, type);
    addTab(tab, target, position);
  }

  return (
    <div
      className={cnx('tab-bar', [tabsRight.length === 0, 'tab-bar--single'])}
    >
      <div
        className={cnx('glx-tab-bar-l')}
        ref={refLeft}
        onDragOver={(e) => {
          e.preventDefault();
          setDLeft(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDLeft(false);
        }}
        onMouseLeave={() => {
          setDLeft(false);
        }}
        onMouseEnter={() => {
          setDRight(false);
        }}
        onDrop={async (e) => onDrop(e, 'left')}
      >
        {tabsLeft.map(({ titel, key, icon }, index) => (
          <Tooltip key={key} text={titel} position="right">
            <div
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('id', key);
                e.dataTransfer.setData('type', 'left');
              }}
              onDrop={async (e) => onDrop(e, 'left', index)}
              className={cnx(
                'tab-bar--item',
                [index === currentTabLeft, ' tab-bar--item-selected'],
                [
                  dLeft && index === tabsLeft.length - 1,
                  'glx-drop-nonce--active-border',
                ],
              )}
            >
              <span
                className="tab-bar--button"
                role="button"
                onClick={() => {
                  setCurrentTab(index, 'left');
                }}
              >
                {icon ? getIcon(icon)({}) : null}
                {trimmer(titel)}
              </span>

              <button
                type="button"
                className="tab-bar--button-close"
                onClick={() => {
                  closeTab(key, 'left');
                }}
              >
                <IOClose size={ISize.SL} />
              </button>
            </div>
          </Tooltip>
        ))}
        {tabsLeft.length === 0 ? (
          <div
            className={cnx('glx-electron-no-drag', 'glx-no-select', [
              dLeft,
              'glx-drop-nonce--active',
            ])}
          >
            |
          </div>
        ) : null}
      </div>
      <div
        className="glx-tab-bar-r"
        ref={refRight}
        onDragOver={(e) => {
          e.preventDefault();
          setDRight(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDRight(false);
        }}
        onMouseLeave={() => {
          setDRight(false);
        }}
        onMouseEnter={() => {
          setDLeft(false);
        }}
        onDrop={async (e) => onDrop(e, 'right')}
      >
        {tabsRight.map(({ titel, key, icon }, index) => (
          <div
            key={key}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('id', key);
              e.dataTransfer.setData('type', 'right');
            }}
            onDrop={async (e) => onDrop(e, 'left', index)}
            className={cnx(
              'tab-bar--item',
              [index === currentTabRight, ' tab-bar--item-selected'],
              [
                dRight && index === tabsRight.length - 1,
                'glx-drop-nonce--active-border',
              ],
            )}
          >
            <span
              className="tab-bar--button"
              role="button"
              onClick={() => {
                setCurrentTab(index, 'right');
              }}
            >
              {icon ? getIcon(icon)({}) : null}
              {trimmer(titel)}
            </span>

            <button
              type="button"
              className="tab-bar--button-close"
              onClick={() => {
                closeTab(key, 'right');
              }}
            >
              <IOClose size={ISize.SL} />
            </button>
          </div>
        ))}
        {tabsRight.length === 0 ? (
          <div
            className={cnx('glx-electron-no-drag', 'glx-no-select', [
              dRight,
              'glx-drop-nonce--active',
            ])}
          >
            |
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default TabBar;
