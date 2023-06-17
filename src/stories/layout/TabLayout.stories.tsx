import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { IOApps, IOEyeOff } from '@grandlinex/react-icons';
import {
  EditSidePanel,
  MenuItemType,
  SidePanelNavigation,
  TabItem,
  TabLayout,
  TabLayoutProps,
} from '../../layouts';
import { Button, IconButton } from '../../components';
import { useTabStore } from '../../util/hooks';
import { cnx } from '../../util';

const meta = {
  title: 'Layout/TabLayout',
  component: TabLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    fullscreen: true,
  },
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story: StoryFn) => (
      <div
        style={{
          width: '900px',
          height: '600px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TabLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const minimalProps: TabLayoutProps = {
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
  },
  tabRenderer: (item, context, classNameExtend) => {
    return (
      <div className={cnx(classNameExtend, 'glx-default-text')}>
        Test Tab - {item.titel}
      </div>
    );
  },
  header: {
    refresh: () => {},
  },
  preload: async () => {},
};

export const Store: Story = {
  name: 'With tab store ',
  args: {
    ...minimalProps,
    init: true,
  },
  render: (p) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const store = useTabStore();
    return (
      <TabLayout
        init={p.init}
        tabs={{
          tabsLeft: store.tabState.tabsLeft,
          tabsRight: store.tabState.tabsRight,
          currentTabLeft: store.tabState.currentTabLeft,
          currentTabRight: store.tabState.currentTabRight,
          addTab: store.addTab,
          closeTab: store.closeTab,
          setCurrentTab: store.setCurrentTab,
          error: (message: string) => {},
        }}
        tabRenderer={p.tabRenderer}
        disableSideBar={p.disableSideBar}
        sideBar={{
          topMenu: [
            {
              key: 'Home',
              icon: 'IOHome',
              name: 'Home',
              show: () => true,
            },
            {
              key: 'Notification',
              icon: 'IONotifications',
              name: 'Notification',
              show: () => true,
              onClick: () => {
                store.setPanel('NOTIFICATION');
              },
              labelNum: [
                {
                  value: 4,
                  pos: 'right',
                },
              ],
            },
            {
              key: 'App',
              icon: 'IOApps',
              name: 'Menu',
              show: () => true,
              onClick: () => {
                store.setPanel('MENU');
              },
            },
          ],
          botMenu: [
            {
              key: 'Settings',
              icon: 'IOSettings',
              name: 'Settings',
              show: () => true,
            },
          ],
          onClickItem: (tab: MenuItemType) => {
            store.addTab(
              {
                data: undefined,
                icon: tab.icon,
                key: tab.key + store.tabState.tabsLeft.length,
                titel: tab.name,
                view: tab.key,
              },
              'left'
            );
          },
        }}
        blockingModal={p.blockingModal}
        panel={{
          selectPanel: store.tabState.panel,
          setPanel: store.setPanel,
          panelRenderer: (panel: string | null) => {
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
          },
        }}
        spotlightProps={p.spotlightProps}
        spotlightOpen={p.spotlightOpen}
        hotKeys={p.hotKeys}
        preload={p.preload}
        header={{
          refresh: () => store.reset(),
          electron: {
            close: () => {},
            minimize: () => {},
            maximize: () => {},
          },
        }}
        globalRenderer={p.globalRenderer}
      />
    );
  },
};

export const WebPre: Story = {
  name: 'Pre - web',
  args: {
    ...minimalProps,
  },
};
export const ElectronPre: Story = {
  name: 'Pre - electron',
  args: {
    ...minimalProps,
    header: {
      refresh: () => {},
      electron: {
        close: () => {},
        minimize: () => {},
        maximize: () => {},
      },
    },
  },
};
export const Electron: Story = {
  name: 'Electron - with side panel',
  args: {
    ...minimalProps,
    init: true,
    sideBar: {
      topMenu: [
        {
          key: 'Home',
          icon: 'IOHome',
          name: 'Home',
          show: () => true,
        },
        {
          key: 'Notification',
          icon: 'IONotifications',
          name: 'Notification',
          show: () => true,
          labelNum: [
            {
              value: 4,
              pos: 'right',
            },
            {
              pos: 'left',
              value: 3,
              color: 'black',
            },
            {
              pos: 'bottom',
              value: 2,
              color: '#6441a5',
            },
          ],
        },
        {
          key: 'Notification2',
          icon: 'IONotifications',
          name: 'Notification2',
          show: () => true,
          labelNum: [
            {
              value: 4,
              pos: 'right',
            },
            {
              pos: 'left',
              value: 3,
              color: 'black',
            },
            {
              pos: 'bottom',
              value: 2,
              color: '#6441a5',
            },
          ],
        },
      ],
      botMenu: [
        {
          key: 'Settings',
          icon: 'IOSettings',
          name: 'Settings',
          show: () => true,
        },
      ],
    },
    panel: {
      selectPanel: 'MENU',
      setPanel: (panel: string | null) => {},
      panelRenderer: (panel: string | null) => {
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
                      isMenu: true,
                      children: [
                        {
                          icon: 'IOBeer',
                          text: 'Layer01',
                          key: 'layer01',
                          isMenu: true,
                          children: [
                            {
                              icon: 'IOBeer',
                              text: 'Layer02a',
                              key: 'layer02a',
                              isMenu: false,
                              children: [],
                            },
                            {
                              icon: 'IOBeer',
                              text: 'Layer02b',
                              key: 'layer02b',
                              isMenu: false,
                              children: [],
                            },
                          ],
                        },
                      ],
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
                  icon: 'IOHome',
                },
                {
                  key: 'test#2',
                  name: 'Test#2',
                  icon: 'IOBeer',
                },
              ]}
            />
          );
        }
        if (panel !== null) {
          return <div>{panel}</div>;
        }
        return null;
      },
    },
    header: {
      refresh: () => {},
      electron: {
        close: () => {},
        minimize: () => {},
        maximize: () => {},
      },
    },
  },
};

export const Modal: Story = {
  name: 'Blocking modal ',
  args: {
    ...minimalProps,
  },
  render: (p) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal, setModal] = useState<any>(undefined);
    return (
      <TabLayout
        init={p.init}
        tabs={p.tabs}
        tabRenderer={p.tabRenderer}
        disableSideBar={p.disableSideBar}
        sideBar={p.sideBar}
        blockingModal={modal}
        panel={p.panel}
        spotlightProps={p.spotlightProps}
        spotlightOpen={p.spotlightOpen}
        hotKeys={p.hotKeys}
        preload={p.preload}
        header={p.header}
        globalRenderer={() => {
          return (
            <div>
              <Button
                onClick={() => {
                  setModal({
                    message: 'This is a blocking modal',
                    progress: '0%',
                  });
                  setTimeout(() => {
                    setModal({
                      message: 'This is a blocking modal',
                      progress: '25%',
                    });
                    setTimeout(() => {
                      setModal({
                        message: 'This is a blocking modal',
                        progress: '75%',
                      });
                      setTimeout(() => {
                        setModal(undefined);
                      }, 2000);
                    }, 2000);
                  }, 2000);
                }}
              >
                Play
              </Button>
            </div>
          );
        }}
      />
    );
  },
};

export const SidePanel: Story = {
  name: 'Edit side panel',
  args: {
    ...minimalProps,
    init: true,
  },
  render: (p) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState<boolean>(true);
    return (
      <TabLayout
        init={p.init}
        tabs={p.tabs}
        tabRenderer={p.tabRenderer}
        disableSideBar={p.disableSideBar}
        sideBar={p.sideBar}
        blockingModal={p.blockingModal}
        panel={p.panel}
        spotlightProps={p.spotlightProps}
        spotlightOpen={p.spotlightOpen}
        hotKeys={p.hotKeys}
        preload={p.preload}
        header={p.header}
        globalRenderer={() => {
          return (
            <div>
              <Button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Open/Close
              </Button>

              {open && (
                <EditSidePanel onResize={console.log}>
                  <div className="glx-default-text" style={{ padding: '24px' }}>
                    PANEL
                  </div>
                </EditSidePanel>
              )}
            </div>
          );
        }}
      />
    );
  },
};

export const Spotlight: Story = {
  name: 'with spotlight',
  args: {
    ...minimalProps,
    init: true,
  },
  render: (p) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const store = useTabStore();
    const [open, setOpen] = useState(false);

    return (
      <TabLayout
        init={p.init}
        tabs={{
          tabsLeft: store.tabState.tabsLeft,
          tabsRight: store.tabState.tabsRight,
          currentTabLeft: store.tabState.currentTabLeft,
          currentTabRight: store.tabState.currentTabRight,
          addTab: store.addTab,
          closeTab: store.closeTab,
          setCurrentTab: store.setCurrentTab,
          error: (message: string) => {},
        }}
        tabRenderer={p.tabRenderer}
        disableSideBar={p.disableSideBar}
        sideBar={{
          topMenu: [
            {
              key: 'Home',
              icon: 'IOHome',
              name: 'Home',
              show: () => true,
            },
            {
              key: 'Notification',
              icon: 'IONotifications',
              name: 'Notification',
              show: () => true,
              onClick: () => {
                store.setPanel('NOTIFICATION');
              },
              labelNum: [
                {
                  value: 4,
                  pos: 'right',
                },
              ],
            },
            {
              key: 'App',
              icon: 'IOApps',
              name: 'Menu',
              show: () => true,
              onClick: () => {
                store.setPanel('MENU');
              },
            },
          ],
          botMenu: [
            {
              key: 'Settings',
              icon: 'IOSettings',
              name: 'Settings',
              show: () => true,
            },
          ],
          onClickItem: (tab: MenuItemType) => {
            store.addTab(
              {
                data: undefined,
                icon: tab.icon,
                key: tab.key + store.tabState.tabsLeft.length,
                titel: tab.name,
                view: tab.key,
              },
              'left'
            );
          },
        }}
        blockingModal={p.blockingModal}
        panel={{
          selectPanel: store.tabState.panel,
          setPanel: store.setPanel,
          panelRenderer: (panel: string | null) => {
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
          },
        }}
        spotlightProps={{
          closeFcn: () => setOpen(false),
          defaultSearch: () => {
            return Array.from(new Array(30).keys()).map((v) => ({
              key: `test${v}`,
              text: `Test #${v}`,
              optionAction: () => {},
              path: ['test'],
              icon: 'IOHome',
            }));
          },
          action: [
            {
              commandTag: 'yt',
              name: 'Youtube',
              icon: 'SIYoutube',
              action: (args, setSearch, setCommand, close) => {
                if (
                  args.length >= 2 &&
                  ('play'.startsWith(args[1]) || args[1] === '')
                ) {
                  return [
                    {
                      key: 'yt_play',
                      optionAction: () => {
                        if (args[1] !== 'play') {
                          setSearch([args[0], 'play', ''].join(' '));
                        }
                      },
                      path: ['Youtube'],
                      text: '/yt play <URL> - Play element',
                      icon: 'SIYoutube',
                    },
                    {
                      key: 'yt_play_test',
                      optionAction: () => {
                        if (args[1] !== 'play') {
                          setSearch([args[0], 'play', ''].join(' '));
                        }
                      },
                      path: ['Youtube', 'Test1', 'Test2'],
                      text: '/yt play <URL> - Play element',
                      component: <div> Test </div>,
                      icon: 'SIYoutube',
                    },
                  ];
                }
                return null;
              },
            },
            {
              commandTag: 'close',
              name: 'Close Spotlight',
              icon: 'IOClose',
              action: (args, setSearch, setCommand, close) => {
                return [
                  {
                    key: 'close',
                    optionAction: () => {
                      close();
                    },
                    text: '/close - Close Spotlight',
                    icon: 'IOClose',
                  },
                ];
              },
            },
          ],
        }}
        spotlightOpen={open}
        hotKeys={[
          {
            key: {
              primary: 'alt',
              secondary: 'KeyC',
            },
            action: () => {
              console.log('alt-c');
            },
          },
          {
            key: {
              primary: 'ctrl',
              secondary: 'Space',
            },
            action: () => {
              setOpen(!open);
            },
          },
          {
            key: {
              primary: 'shift',
              secondary: 'KeyC',
            },
            action: () => {
              console.log('alt-C');
            },
          },
        ]}
        preload={p.preload}
        header={{
          refresh: () => store.reset(),
          electron: {
            close: () => {},
            minimize: () => {},
            maximize: () => {},
          },
        }}
        globalRenderer={p.globalRenderer}
      />
    );
  },
};

export const GlobalRenderer: Story = {
  name: 'Global Renderer',
  args: {
    ...minimalProps,
    init: true,
  },
  render: (p) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
      <TabLayout
        init={p.init}
        tabs={p.tabs}
        tabRenderer={p.tabRenderer}
        disableSideBar={p.disableSideBar}
        sideBar={p.sideBar}
        blockingModal={p.blockingModal}
        panel={p.panel}
        spotlightProps={p.spotlightProps}
        spotlightOpen={p.spotlightOpen}
        hotKeys={p.hotKeys}
        preload={p.preload}
        header={p.header}
        globalRenderer={() => {
          return <div className="glx-default-text">GlobalRenderer</div>;
        }}
      />
    );
  },
};
