import React, { createRef, useEffect, useState } from 'react';

import { IOClose, IOSearch, ISize } from '@grandlinex/react-icons';
import { BaseProps, classN, IconNodeType, renderIcon, styleM } from '../lib';
import { useAutoClose } from '../../util/hooks';
import Grid from '../layout/Grid/Grid';

export type SmartInputElement = {
  key: string;
  icon?: IconNodeType;
  title: string;
  detail?: string;
};
export type SmartInputInputProps = BaseProps & {
  searchFC?: (s: string) => Promise<SmartInputElement | null>;
  onChange?: (meta: SmartInputElement | null) => void;
  onType?: (text: string) => void;
  value?: SmartInputElement;
  list?: SmartInputElement[];
  max?: number;
  placeholder?: string;
  disabled?: boolean;
};

export function SmartInput(prop: SmartInputInputProps) {
  const {
    value,
    max,
    onChange,
    searchFC,
    placeholder,
    disabled,
    list,
    className,
    style,
    onType,
  } = prop;
  const [selected, setSelected] = useState<SmartInputElement | null>(
    value || null,
  );
  const [search, setSearch] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(-1);
  const iRef = createRef<HTMLInputElement>();

  let filteredList =
    list?.filter((x) => {
      if (search === '') {
        return true;
      }
      return (
        x.key.includes(search) ||
        x.title?.toLowerCase().includes(search.toLowerCase()) ||
        x.detail?.toLowerCase().includes(search.toLowerCase())
      );
    }) || [];
  if (max !== undefined && filteredList) {
    filteredList = filteredList.slice(0, max);
  }
  const ref = useAutoClose<HTMLDivElement>(() => setOpen(false), false);
  async function selectFc() {
    if (selected) {
      setSelected(null);
      onChange?.(null);
    } else {
      let el: SmartInputElement | null;
      if (list) {
        el = list.find((e) => e.key === search) || null;
      } else if (searchFC) {
        el = await searchFC(search);
      } else {
        el = null;
      }
      setSelected(el);
      onChange?.(el);
    }
  }

  function keyListener(e: KeyboardEvent) {
    if (selected) {
      return;
    }
    if (e.key === 'Escape') {
      iRef.current?.blur();
      setOpen(false);
    } else if (e.key === 'Enter') {
      if (pos >= 0 && pos < filteredList.length) {
        setSelected(filteredList[pos]);
        onChange?.(filteredList[pos]);
        setPos(-1);
      }
      if (pos === -1 && filteredList.length > 0) {
        setSelected(filteredList[0]);
        onChange?.(filteredList[0]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (pos < filteredList.length - 1) {
        if (pos === -1) {
          iRef.current?.blur();
        }
        setPos(pos + 1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pos >= 0) {
        if (pos === 0) {
          iRef.current?.focus();
        }

        setPos(pos - 1);
      }
    }
  }
  useEffect(() => {
    if (!searchFC) {
      document.addEventListener('keydown', keyListener);
    }

    return () => {
      if (!searchFC) {
        document.removeEventListener('keydown', keyListener);
      }
    };
  });

  return (
    <div
      ref={ref}
      style={styleM(style)}
      className={classN(
        [
          'glx-smart-input',
          'glx-default-text',
          [!!searchFC, 'glx-smart-input--search'],
        ],
        className,
      )}
    >
      {selected ? (
        <Grid className="glx-flex-grow-1" flex flexR gap={8} vCenter>
          {renderIcon(selected.icon)} {selected.title}
        </Grid>
      ) : (
        <>
          <input
            ref={iRef}
            type="text"
            disabled={!!selected || disabled}
            value={search}
            placeholder={placeholder}
            onFocus={() => {
              setPos(-1);
              setOpen(true);
            }}
            onChange={(e) => {
              const vol = e.target.value;
              setSearch(vol);
              onType?.(vol);
            }}
          />
          {open && filteredList && filteredList.length > 0 ? (
            <div className="glx-user-block--drawer">
              {filteredList.map((e, i) => (
                <Grid
                  className={[[i === pos, 'option-element-active']]}
                  flex
                  flexR
                  gap={8}
                  vCenter
                  onClick={() => {
                    setSelected(e);
                    onChange?.(e);
                  }}
                >
                  {renderIcon(e.icon)}
                  <Grid flex flexC gap={4}>
                    <div>{e.title}</div>
                    {e.detail ? (
                      <div className="smart-detail">{e.detail}</div>
                    ) : null}
                  </Grid>
                </Grid>
              ))}
            </div>
          ) : null}
        </>
      )}

      {searchFC || selected ? (
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
}

SmartInput.defaultProps = {
  onChange: undefined,
  value: undefined,
  placeholder: undefined,
  list: undefined,
  disabled: undefined,
  searchFC: undefined,
};
