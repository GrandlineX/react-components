import React, { useEffect, useRef, useState } from 'react';
import { TabContainerFunctions, TabItem, WCMode } from '../lib';
import { cnx } from '../../../util';
import { TabBarElement, TabContextMenu } from './TabBarElement';

export type TabBarProps = {
  tabsLeft: TabItem[];
  tabsRight: TabItem[];
  currentTabLeft: number;
  currentTabRight: number;
  contextMenu?: TabContextMenu[];
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
    moveTab,
    setCurrentTab,
    contextMenu,
  } = c;
  const refLeft = useRef<HTMLDivElement>(null);
  const refRight = useRef<HTMLDivElement>(null);

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

  const onDrop = async (
    e: React.DragEvent<HTMLDivElement>,
    target: WCMode,
    position?: number,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const id = e.dataTransfer.getData('id');
    const type = e.dataTransfer.getData('type') as WCMode;
    moveTab(id, type, target, position);
  };

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
        {tabsLeft.map((item, index) => (
          <TabBarElement
            key={`${item.key}_tab_left`}
            index={index}
            item={item}
            current={currentTabLeft}
            drag={dLeft}
            tabs={tabsLeft}
            closeTab={closeTab}
            onDrop={(e, position) => onDrop(e, 'left', position)}
            context="left"
            addTab={addTab}
            setCurrentTab={setCurrentTab}
            error={error}
            moveTab={moveTab}
            contextMenu={contextMenu}
          />
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
        {tabsRight.map((item, index) => (
          <TabBarElement
            key={`${item.key}_tab_right`}
            index={index}
            item={item}
            current={currentTabRight}
            drag={dRight}
            tabs={tabsRight}
            closeTab={closeTab}
            onDrop={(e, position) => onDrop(e, 'left', position)}
            context="right"
            addTab={addTab}
            setCurrentTab={setCurrentTab}
            error={error}
            moveTab={moveTab}
            contextMenu={contextMenu}
          />
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
