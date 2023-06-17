import React, { useContext } from 'react';

export type WCMode = 'left' | 'right';

export class WindowContext {
  mode: WCMode;

  constructor(conf: { mode: WCMode }) {
    this.mode = conf.mode;
  }
}

const FrameContext = React.createContext(new WindowContext({ mode: 'left' }));

const useFrameContext = () => {
  return useContext(FrameContext);
};

export { useFrameContext, FrameContext };
