import React from 'react';
import {
  IOBrowsersOutline,
  IOClose,
  IOPodium,
  IOReloadOutline,
  ISize,
  IXMinimize,
} from '@grandlinex/react-icons';
import TabBar, { TabBarProps } from './TabBar';
import { cnx } from '../../../util';

export type HeaderProps = {
  electron?: {
    minimize: () => void;
    maximize: () => void;
    close: () => void;
  };
  refresh?: () => void;
  icon?: JSX.Element;
};

export type HeaderPropFull = {
  tabs: TabBarProps;
  prop: HeaderProps;
};
const Header: React.FC<HeaderPropFull> = function (props) {
  const { prop, tabs } = props;
  const { electron, refresh, icon } = prop;
  return (
    <div className={cnx('tab-header', [!electron, 'head-web', 'head-native'])}>
      <div className="title">{icon || <IOPodium />}</div>
      <TabBar c={tabs} />
      {electron ? (
        <div className="keys">
          <button
            type="button"
            onClick={() => {
              electron.minimize();
            }}
          >
            <IXMinimize height={ISize.SM} width={ISize.SM} />
          </button>
          <button
            type="button"
            onClick={() => {
              electron.maximize();
            }}
          >
            <IOBrowsersOutline size={ISize.SM} />
          </button>
          <button
            className="cancel"
            type="button"
            onClick={() => {
              electron.close();
            }}
          >
            <IOClose size={ISize.SM} />
          </button>
        </div>
      ) : null}
      {refresh ? (
        <div className="refresh">
          <button
            type="button"
            onClick={() => {
              refresh();
            }}
          >
            <IOReloadOutline size={ISize.SM} />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export { Header };
