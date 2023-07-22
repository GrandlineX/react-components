import React from 'react';
import { useTabContext } from '../context/FrameContext';

type TabFrameProps = {
  tabRenderer: React.ReactNode;
};
const TabFrame: React.FC<TabFrameProps> = (prop) => {
  const { tabRenderer } = prop;
  const { mode, classNameExtend, item } = useTabContext();
  if (!item) {
    if (mode === 'right') {
      return null;
    }
    return <div className={classNameExtend} />;
  }

  return tabRenderer;
};

export { TabFrame, TabFrameProps };
