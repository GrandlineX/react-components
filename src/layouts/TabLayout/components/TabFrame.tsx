import React from 'react';
import { TabItem } from '../lib';
import { useFrameContext } from '../context/FrameContext';

type TabFrameProps = {
  tab: TabItem | undefined;
  classNameExtend?: string;
  tabRenderer: (item: TabItem, classNameExtend?: string) => JSX.Element;
};
const TabFrame: React.FC<TabFrameProps> = (prop) => {
  const { tab, tabRenderer, classNameExtend } = prop;
  const fc = useFrameContext();
  if (!tab) {
    if (fc.mode === 'right') {
      return null;
    }
    return <div className={classNameExtend} />;
  }

  return tabRenderer(tab, classNameExtend);
};
TabFrame.defaultProps = {
  classNameExtend: undefined,
};

export { TabFrame, TabFrameProps };
