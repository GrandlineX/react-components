import React, { useMemo, useState } from 'react';
import {
  getIcon,
  INames,
  IOChevronDown,
  ISize,
  IWrapperFull,
} from '@grandlinex/react-icons';
import { cnx, useUIContext } from '../../../util';
import { Grid } from '../../Grid/Grid';

const cc = IWrapperFull();
const names = Object.keys(cc) as INames[];
export default function IconSel(props: {
  sel?: INames;
  disabled?: boolean;
  onChange: (ev: INames | null) => void;
  className?: string;
}) {
  const ui = useUIContext();
  const { onChange, sel, className, disabled = false } = props;

  const [cur, setCur] = useState<INames | null>(sel || null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => {
    return names.filter(
      (e) => search === '' || e.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className={cnx('glx-flex-r', className)}>
      <div style={{ position: 'relative' }}>
        {cur
          ? getIcon(cur)({
              size: ISize.SM,
            })
          : 'N/D'}
        {open && !disabled ? (
          <Grid
            flex
            flexC
            className="glx-icon-sel--dropdown--container"
            gap={12}
          >
            <div>
              <input
                type="text"
                placeholder={ui.translation.get(
                  'glx.input.icon.sel.placeholder',
                )}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="glx-icon-sel--dropdown">
              <div
                key="none"
                onClick={() => {
                  setOpen(false);
                  setCur(null);
                  onChange(null);
                  setSearch('');
                }}
              >
                N/D
              </div>
              {filtered.map((el) => (
                <div
                  key={el}
                  role="button"
                  onClick={() => {
                    setOpen(false);
                    setCur(el);
                    onChange(el);
                    setSearch('');
                  }}
                >
                  {getIcon(el)({ size: ISize.SM })}
                </div>
              ))}
            </div>
          </Grid>
        ) : null}
      </div>
      <div
        onClick={() => {
          setOpen(!open);
          if (sel) {
            setSearch(sel);
          }
        }}
      >
        <IOChevronDown />
      </div>
    </div>
  );
}
