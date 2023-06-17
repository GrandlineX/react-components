import { INames } from '@grandlinex/react-icons';

export type TabItem = {
  key: string;
  view: string;
  titel: string;
  icon?: INames;
  data?: any;
};
