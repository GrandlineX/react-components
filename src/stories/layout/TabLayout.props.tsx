import React from 'react';
import { IOApps, IOEyeOff } from '@grandlinex/react-icons';
import {
  SidePanelNavigation,
  TabItem,
  TabLayoutProps,
  useTabContext,
} from '../../layouts';
import { cnx } from '../../util';
import { usePanelContext } from '../../layouts/TabLayout/context/PanelContextContext';
import { IconButton } from '../../components';

export function DevRender() {
  const { classNameExtend, item } = useTabContext();
  return (
    <div className={cnx(classNameExtend, 'glx-default-text')}>
      Test Tab - {item?.titel}
    </div>
  );
}

export function PanelRenderer() {
  const { panel } = usePanelContext();

  if (panel === 'MENU') {
    return (
      <SidePanelNavigation
        headerText="Context"
        searchText="Search Text"
        defaultOnClick={(item) => console.log(item)}
        getter={async (sel: string) => {
          console.log(sel);
          if (sel === 'test#2') {
            return [
              {
                icon: 'IOHome',
                text: 'Home',
                key: 'Home',
                isMenu: false,
                children: [],
              },
            ];
          }
          return [
            {
              icon: 'IOHome',
              text: 'Home',
              key: 'Home',
              isMenu: false,
              children: [],
            },
            {
              icon: 'IOPerson',
              text: 'TestMenu',
              key: 'TestMenu',
              isMenu: true,
              children: [
                {
                  icon: 'IOPerson',
                  text: 'TestMenu',
                  key: 'TestMenu',
                  isMenu: false,
                  children: [],
                },
                {
                  icon: 'IOPerson',
                  text: 'TestMenu2',
                  key: 'TestMenu2',
                  isMenu: false,
                  children: [],
                },
                {
                  icon: 'IOPerson',
                  text: 'TestMenu3',
                  key: 'TestMenu3',
                  isMenu: false,
                  children: [],
                },
                {
                  icon: 'IOPerson',
                  text: 'TestMenu4',
                  key: 'TestMenu4',
                  isMenu: false,
                  children: [],
                },
                {
                  icon: 'IOPerson',
                  text: 'TestMenu5',
                  key: 'TestMenu5',
                  isMenu: false,
                  children: [],
                },
                {
                  icon: 'IOPerson',
                  text: 'TestMenu6',
                  key: 'TestMenu6',
                  isMenu: false,
                  children: [],
                },
              ],
            },
          ];
        }}
        itemList={[
          {
            key: 'test#1',
            name: 'Test#1',
          },
          {
            key: 'test#2',
            name: 'Test#2',
          },
        ]}
      />
    );
  }
  if (panel !== null) {
    return (
      <div className="glx-default-text">
        <IconButton onClick={() => {}}>
          <IOApps />
        </IconButton>
        <IconButton
          toolTip={{
            position: 'right',
            text: 'sidebar.header.button.filter',
          }}
          onClick={async () => {}}
        >
          <IOEyeOff />
        </IconButton>
        {panel}
      </div>
    );
  }
  return null;
}
export const minimalProps: TabLayoutProps = {
  panelRenderer: <PanelRenderer />,
  selectPanel: null,
  setPanel(panel: string | null): void {},
  init: false,
  tabs: {
    tabsLeft: [],
    tabsRight: [],
    currentTabLeft: 0,
    currentTabRight: 0,
    addTab: (el: TabItem, pos: 'left' | 'right') => {},
    closeTab: (el: string, pos: 'left' | 'right') => {},
    setCurrentTab: (index: number, pos: 'left' | 'right') => {},
    error: (message: string) => {},
    moveTab: (
      key: string,
      dest: 'left' | 'right',
      target: 'left' | 'right',
      position?: number,
    ) => {},
  },
  tabRenderer: <DevRender />,
  header: {
    refresh: () => {},
  },
  preload: async () => {},
};
