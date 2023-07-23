import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryFn } from '@storybook/react';
import { EditSidePanel, MenuItemType, TabLayout } from '../../layouts';
import { Button } from '../../components';
import { useTabStore } from '../../util/hooks';
import { minimalProps } from './TabLayout.props';

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
          moveTab: store.moveTab,
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
                console.log('click');
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
              'left',
            );
          },
        }}
        blockingModal={p.blockingModal}
        panelRenderer={p.panelRenderer}
        selectPanel={store.tabState.panel}
        setPanel={store.setPanel}
        spotlightProps={p.spotlightProps}
        spotlightOpen={p.spotlightOpen}
        hotKeys={p.hotKeys}
        preload={p.preload}
        header={{
          refresh: () => store.reset(),
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
    selectPanel: 'MENU',
    setPanel: (panel: string | null) => {},
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
    init: true,
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
        panelRenderer={p.panelRenderer}
        selectPanel={p.selectPanel}
        setPanel={p.setPanel}
        spotlightProps={p.spotlightProps}
        spotlightOpen={p.spotlightOpen}
        hotKeys={p.hotKeys}
        preload={p.preload}
        header={p.header}
        globalRenderer={
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
        }
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
        spotlightProps={p.spotlightProps}
        spotlightOpen={p.spotlightOpen}
        hotKeys={p.hotKeys}
        preload={p.preload}
        header={p.header}
        panelRenderer={p.panelRenderer}
        selectPanel={p.selectPanel}
        setPanel={p.setPanel}
        globalRenderer={
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
        }
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
          moveTab: store.moveTab,
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
              'left',
            );
          },
        }}
        blockingModal={p.blockingModal}
        panelRenderer={p.panelRenderer}
        selectPanel={p.selectPanel}
        setPanel={p.setPanel}
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
          hint: 'Type / for cmd list',
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
        panelRenderer={p.panelRenderer}
        selectPanel={p.selectPanel}
        setPanel={p.setPanel}
        spotlightProps={p.spotlightProps}
        spotlightOpen={p.spotlightOpen}
        hotKeys={p.hotKeys}
        preload={p.preload}
        header={p.header}
        globalRenderer={<div className="glx-default-text">GlobalRenderer</div>}
      />
    );
  },
};
