import React, { useEffect, useMemo, useState } from 'react';
import { TabBarProps } from './TabBar';
import { FrameContext, TabContext } from '../context/FrameContext';
import { Sidebar, SideBarProps } from './Sidebar';
import { Header, HeaderProps } from './Header';
import Spinner from '../../../components/loading/Spinner';
import { TabFrame } from './TabFrame';
import { SidebarPanel, SideBarPanelProps } from './SidebarPanel';
import { BlockingModal, ModalProps } from './BlockingModal';
import { SpotlightModal, SpotlightProps } from './SpotlightModal';
import { KeyBind, useKeyListener } from '../../../util/hooks';

export type TabLayoutProps = {
  init: boolean;
  tabs: TabBarProps;
  disableSideBar?: boolean;
  preload: () => Promise<void>;
  tabRenderer: React.ReactNode;
  globalRenderer?: React.ReactNode;
  sideBar?: SideBarProps;
  header: HeaderProps;
  blockingModal?: ModalProps;
  spotlightProps?: SpotlightProps;
  spotlightOpen?: boolean;
  hotKeys?: KeyBind[];
} & SideBarPanelProps;

const TabLayout = ({
  header,
  init,
  preload,
  disableSideBar,
  tabRenderer,
  sideBar,
  tabs,
  globalRenderer,
  blockingModal,
  selectPanel,
  setPanel,
  panelRenderer,
  spotlightProps,
  spotlightOpen,
  hotKeys,
}: TabLayoutProps) => {
  const { tabsRight, tabsLeft, currentTabRight, currentTabLeft } = tabs;

  const tabRight = useMemo(() => {
    return tabsRight[currentTabRight];
  }, [currentTabRight, tabsRight]);

  const rC = useMemo(() => {
    return new FrameContext({
      mode: 'right',
      item: tabRight || null,
      classNameExtend: tabRight ? 'main-no--sidebar-half' : undefined,
    });
  }, [tabRight]);

  const tabLeft = useMemo(() => {
    return tabsLeft[currentTabLeft];
  }, [currentTabLeft, tabsLeft]);

  const lC = useMemo(() => {
    return new FrameContext({
      mode: 'left',
      item: tabLeft || null,
      classNameExtend: tabRight ? 'main-no--sidebar-half' : undefined,
    });
  }, [tabLeft, tabRight]);

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
            moveTab: () => {},
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
      {panelRenderer ? (
        <SidebarPanel
          c={{
            selectPanel,
            setPanel,
            panelRenderer,
          }}
        />
      ) : null}
      <div className="main--sidebar">
        {disableSideBar || !sideBar ? null : (
          <Sidebar
            botMenu={sideBar.botMenu}
            topMenu={sideBar.topMenu}
            onClickItem={sideBar.onClickItem}
          />
        )}
      </div>

      {globalRenderer || (
        <>
          <TabContext.Provider value={lC}>
            <TabFrame tabRenderer={tabRenderer} />
          </TabContext.Provider>

          {tabRight ? (
            <TabContext.Provider value={rC}>
              <TabFrame tabRenderer={tabRenderer} />
            </TabContext.Provider>
          ) : null}
        </>
      )}
    </div>
  );
};
export { TabLayout };
