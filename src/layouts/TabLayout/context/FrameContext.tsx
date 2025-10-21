import React, { useContext } from 'react';
import { TabItem, WCMode } from '../lib';

export class FrameContext {
  mode: WCMode;

  item: TabItem | null;

  classNameExtend?: string;

  constructor(conf: {
    mode: WCMode;
    item: TabItem | null;
    classNameExtend?: string;
  }) {
    this.mode = conf.mode;
    this.item = conf.item;
    this.classNameExtend = conf.classNameExtend;
  }
}

const TabContext = React.createContext(
  new FrameContext({ mode: 'left', item: null }),
);

const useTabContext = () => {
  return useContext(TabContext);
};

export { useTabContext, TabContext };
