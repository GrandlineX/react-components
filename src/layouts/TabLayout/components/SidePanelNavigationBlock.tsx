import React from 'react';
import { getIcon, INames } from '@grandlinex/react-icons';
import { MenuItemInterface, PanelMenuItem } from './PanelMenuItem';
import { Grid } from '../../../components';

const SidePanelNavigationBlock: React.FC<{
  single: boolean;
  headerText: string;
  icon?: INames;
  data: MenuItemInterface[];
  search?: string;
  defaultOnClick?: (key: string) => void;
}> = function (props) {
  const { icon, data, search, single, headerText, defaultOnClick } = props;

  return (
    <>
      {!single ? (
        <Grid
          className="glx-py-6 glx-pl-6 glx-bold glx-default-text"
          flex
          flexRow
          vCenter
          gap={2}
        >
          <div>{icon ? getIcon(icon)({}) : null}</div>
          <div>{headerText}</div>
        </Grid>
      ) : null}
      {data.map((item) => (
        <PanelMenuItem
          key={item.key}
          item={item}
          search={search}
          defaultOnClick={defaultOnClick}
        />
      ))}
      {!single ? <hr className="glx-mx-8" /> : null}
    </>
  );
};
SidePanelNavigationBlock.defaultProps = {
  search: undefined,
  defaultOnClick: undefined,
  icon: undefined,
};
// eslint-disable-next-line import/prefer-default-export
export { SidePanelNavigationBlock };
