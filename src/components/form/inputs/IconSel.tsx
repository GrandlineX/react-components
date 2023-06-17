import React, { useMemo, useState } from 'react';
import {
  getIcon,
  INames,
  IOChevronDown,
  ISize,
  IWrapperFull,
} from '@grandlinex/react-icons';
import Tooltip from '../../tooltip/Tooltip';
import { cnx } from '../../../util';

const cc = IWrapperFull();
const names = Object.keys(cc) as INames[];
export default function IconSel(props: {
  sel?: INames;
  disabled?: boolean;
  onChange: (ev: INames | null) => void;
  className?: string;
}) {
  const { onChange, sel, className, disabled } = props;

  const [cur, setCur] = useState<INames | null>(sel || null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => {
    return names.filter(
      (e) => search === '' || e.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  return (
    <div className={cnx('glx-flex-r', className)}>
      <div style={{ position: 'relative' }}>
        {cur
          ? getIcon(cur)({
              size: ISize.SM,
            })
          : 'none'}
        {open && !disabled ? (
          <>
            <div>
              <input
                type="text"
                placeholder="Search..."
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
          </>
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
IconSel.defaultProps = {
  className: undefined,
  disabled: false,
  sel: undefined,
};
