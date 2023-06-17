import React, { useEffect, useState } from 'react';
import { TabBarProps } from './TabBar';
import { TabItem } from '../lib';
import { FrameContext, WindowContext } from '../context/FrameContext';
import { Sidebar, SideBarProps } from './Sidebar';
import { Header, HeaderProps } from './Header';
import Spinner from '../../../components/loading/Spinner';
import { TabFrame } from './TabFrame';
import { SidebarPanel, SideBarPanelProps } from './SidebarPanel';
import { BlockingModal, ModalProps } from './BlockingModal';
import { SpotlightModal, SpotlightProps } from './SpotlightModal';
import { KeyBind, useKeyListener } from '../../../util/hooks';

const lC = new WindowContext({ mode: 'left' });
const rC = new WindowContext({ mode: 'right' });

export type TabLayoutProps = {
  init: boolean;
  tabs: TabBarProps;
  disableSideBar?: boolean;
  preload: () => Promise<void>;
  tabRenderer: (
    item: TabItem,
    context: WindowContext,
    classNameExtend?: string
  ) => React.ReactNode;
  globalRenderer?: () => React.ReactNode;
  sideBar?: SideBarProps;
  header: HeaderProps;
  panel?: SideBarPanelProps;
  blockingModal?: ModalProps;
  spotlightProps?: SpotlightProps;
  spotlightOpen?: boolean;
  hotKeys?: KeyBind[];
};

const TabLayout = function ({
  header,
  init,
  preload,
  disableSideBar,
  tabRenderer,
  sideBar,
  tabs,
  globalRenderer,
  blockingModal,
  panel,
  spotlightProps,
  spotlightOpen,
  hotKeys,
}: TabLayoutProps) {
  const { tabsRight, tabsLeft, currentTabRight, currentTabLeft } = tabs;
  const tabLeft = tabsLeft[currentTabLeft];
  const tabRight = tabsRight[currentTabRight];
  const [error, setError] = useState<boolean>(false);

  useKeyListener(hotKeys || []);
  useEffect(() => {
    if (!error && !init) {
      preload();
    }
  }, [error, init]);

  if (error) {
    return <div>Error loading translation</div>;
  }
  if (!init) {
    return (
      <div className="tab-layout--root">
        <Header
          tabs={{
            setCurrentTab: () => {},
            addTab: () => {},
            closeTab: () => {},
            error: () => {},
            tabsLeft: [],
            tabsRight: [],
            currentTabLeft: 0,
            currentTabRight: 0,
          }}
          prop={header}
        />
        <div className="main">
          <div className="row">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }

  if (globalRenderer) {
    return (
      <div className="tab-layout--root">
        {blockingModal ? (
          <BlockingModal
            message={blockingModal.message}
            progress={blockingModal.progress}
          />
        ) : null}

        {spotlightOpen && spotlightProps ? (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <SpotlightModal {...spotlightProps} />
        ) : null}
        <Header tabs={tabs} prop={header} />
        <div className="main--sidebar">
          {disableSideBar || !sideBar ? null : (
            <Sidebar
              botMenu={sideBar.botMenu}
              topMenu={sideBar.topMenu}
              onClickItem={sideBar.onClickItem}
            />
          )}
        </div>
        {globalRenderer()}
      </div>
    );
  }

  return (
    <div className="tab-layout--root">
      {blockingModal ? (
        <BlockingModal
          message={blockingModal.message}
          progress={blockingModal.progress}
        />
      ) : null}
      {spotlightOpen && spotlightProps ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <SpotlightModal {...spotlightProps} />
      ) : null}
      <Header tabs={tabs} prop={header} />
      {panel ? <SidebarPanel c={panel} /> : null}
      <div className="main--sidebar">
        {disableSideBar || !sideBar ? null : (
          <Sidebar
            botMenu={sideBar.botMenu}
            topMenu={sideBar.topMenu}
            onClickItem={sideBar.onClickItem}
          />
        )}
      </div>

      <FrameContext.Provider value={lC}>
        <TabFrame
          tab={tabLeft}
          classNameExtend={tabRight ? 'main-no--sidebar-half' : ''}
          tabRenderer={(r, classNameExtend) => (
            <>{tabRenderer(r, lC, classNameExtend)}</>
          )}
        />
      </FrameContext.Provider>

      {tabRight ? (
        <FrameContext.Provider value={rC}>
          <TabFrame
            tab={tabRight}
            classNameExtend={tabRight ? 'main-no--sidebar-half' : ''}
            tabRenderer={(r, classNameExtend) => (
              <>{tabRenderer(r, rC, classNameExtend)}</>
            )}
          />
        </FrameContext.Provider>
      ) : null}
    </div>
  );
};
TabLayout.defaultProps = {
  disableSideBar: false,
  sideBar: undefined,
  globalRenderer: undefined,
  panel: undefined,
  blockingModal: undefined,
  spotlightOpen: undefined,
  spotlightProps: undefined,
  hotKeys: undefined,
};
export { TabLayout };
