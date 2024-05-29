import React, { useState } from 'react';
import { IOClose, IOSearch, ISize } from '@grandlinex/react-icons';
import { IUser } from './types';
import UserBadge from './UserBadge';
import { useAutoClose } from '../../../util/hooks';

const UserSelector = ({
  value,
  onChange,
  searchFC,
  placeholder,
  disabled,
  list,
}: {
  searchFC?: (s: string) => Promise<IUser | null>;
  onChange?: (meta: IUser | null) => void;
  value?: IUser;
  list?: IUser[];
  placeholder?: string;
  disabled?: boolean;
}) => {
  const [selected, setSelected] = useState<IUser | null>(value || null);
  const [search, setSearch] = useState<string>('');
  const [open, setOpen] = useState(false);

  const filteredList = list?.filter((x) => {
    if (search === '') {
      return true;
    }
    return (
      x.userId.includes(search) ||
      x.gravatarEmail?.includes(search) ||
      x.firstName?.includes(search) ||
      x.lastName?.includes(search)
    );
  });
  const ref = useAutoClose<HTMLDivElement>(() => setOpen(false), false);
  async function selectFc() {
    if (selected) {
      setSelected(null);
      onChange?.(null);
    } else {
      let el: IUser | null;
      if (list) {
        el = list.find((e) => e.userId === search) || null;
      } else if (searchFC) {
        el = await searchFC(search);
      } else {
        el = null;
      }
      setSelected(el);
      onChange?.(el);
    }
  }

  return (
    <div ref={ref} className="glx-user-block">
      {selected ? (
        <div className="glx-flex-grow-1">
          <UserBadge small item={selected} size="50px" />
        </div>
      ) : (
        <>
          <input
            type="text"
            disabled={!!selected || disabled}
            value={search}
            placeholder={placeholder}
            onFocus={() => setOpen(true)}
            onChange={(e) => {
              const vol = e.target.value;
              setSearch(vol);
            }}
          />
          {open && filteredList && filteredList.length > 0 ? (
            <div className="glx-user-block--drawer">
              {filteredList.map((e) => (
                <div
                  onClick={() => {
                    setSelected(e);
                    onChange?.(e);
                  }}
                >
                  <UserBadge small item={e} size="50px" />
                </div>
              ))}
            </div>
          ) : null}
        </>
      )}

      {!filteredList || selected ? (
        <button type="button" className="glx-icon-button" onClick={selectFc}>
          {selected ? (
            <IOClose size={ISize.SL} />
          ) : (
            <IOSearch size={ISize.SL} />
          )}
        </button>
      ) : null}
    </div>
  );
};

export default UserSelector;
