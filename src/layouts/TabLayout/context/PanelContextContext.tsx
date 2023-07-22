import React, { useContext } from 'react';

export class PContext {
  panel: string;

  constructor(conf: { panel: string }) {
    this.panel = conf.panel;
  }
}

const PanelContext = React.createContext(new PContext({ panel: 'none' }));

const usePanelContext = () => {
  return useContext(PanelContext);
};

export { PanelContext, usePanelContext };
