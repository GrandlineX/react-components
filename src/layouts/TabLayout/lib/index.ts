import { INames } from '@grandlinex/react-icons';

export type TabItem = {
  key: string;
  view: string;
  titel: string;
  icon?: INames;
  data?: any;
};
export type TabContainerFunctions = {
  addTab: (el: TabItem, pos: 'left' | 'right', position?: number) => void;
  closeTab: (el: string, pos: 'left' | 'right') => void;
  setCurrentTab: (index: number, pos: 'left' | 'right') => void;
  error: (message: string) => void;
};
