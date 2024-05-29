import React, { useState } from 'react';
import Form from '../../../components/form/Form';
import {
  FormConf,
  Grid,
  InputOptionItem,
  InputOptionType,
  LDots,
} from '../../../components';
import { useQData } from '../../../util/hooks';
import { SidePanelNavigationBlock } from './SidePanelNavigationBlock';
import { MenuItemInterface } from './PanelMenuItem';

export type SidePanelNavigationProps = {
  headerText: string;
  searchText: string;
  getter: (sel: string) => Promise<MenuItemInterface[]>;
  itemList: InputOptionItem[];
  defaultOnClick?: (key: string) => void;
  autoFocus?: boolean;
};
function SidePanelNavigation(props: SidePanelNavigationProps) {
  const { searchText, itemList, getter, defaultOnClick, autoFocus } = props;
  const [search, setSearch] = useState<string>('');
  const [data] = useQData(async () => {
    const tData = [];
    for (const item of itemList) {
      tData.push({
        tree: await getter(item.key),
        sel: item,
      });
    }
    return tData;
  });

  const options: FormConf = [];

  options.push([
    {
      label: searchText,
      key: 'search',
      type: InputOptionType.TEXT,
      autoFocus: !!autoFocus,
    },
  ]);
  return (
    <>
      <div className="sidebar-head-block">
        <Form
          options={options}
          defaultState={{
            search: '',
          }}
          onChange={({ form }) => {
            setSearch(form.search);
          }}
        />
      </div>
      <div className="sidebar-panel-scroll">
        {data?.map((x) => {
          return (
            <SidePanelNavigationBlock
              key={`nav-${x.sel.key}`}
              data={x.tree}
              search={search}
              defaultOnClick={defaultOnClick}
              single={data?.length === 1}
              headerText={x.sel.name}
              icon={x.sel.icon}
            />
          );
        }) || (
          <Grid className="glx-pt-8" flex flexRow hCenter>
            <LDots />
          </Grid>
        )}
      </div>
    </>
  );
}

export { SidePanelNavigation };
