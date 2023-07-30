import { INames } from '@grandlinex/react-icons';

export type WCMode = 'left' | 'right';

export type TabItem = {
  key: string;
  view: string;
  titel: string;
  icon?: INames;
  data?: any;
};
export type TabContainerFunctions = {
  addTab: (el: TabItem, pos: WCMode, position?: number) => void;
  moveTab: (
    key: string,
    dest: WCMode,
    target: WCMode,
    position?: number,
  ) => void;
  closeTab: (el: string, pos: WCMode) => void;
  setCurrentTab: (index: number, pos: WCMode) => void;
  error: (message: string) => void;
};
