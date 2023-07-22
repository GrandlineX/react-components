import React, { useCallback, useMemo, useState } from 'react';
import { getIcon } from '@grandlinex/react-icons';
import { cnx } from '../../../util';
import Badge, { BadgeProps } from '../Badge/Badge';
import { useAutoClose } from '../../../util/hooks';
import Grid from '../../layout/Grid/Grid';

export type TagProps = BadgeProps & {
  key: string;
};

export type TagSelectorChangeDiv = {
  mode: 'DEL' | 'NEW';
  id: string;
};

export type TagSelectorProps = {
  value: string[];
  items?: TagProps[];
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?: (items: string[], dif: TagSelectorChangeDiv) => void;
};
export const TagSelector: React.FC<TagSelectorProps> = (prop) => {
  const { items, onChange, placeholder, disabled, autoFocus, value } = prop;

  const [focus, setFocus] = useState(autoFocus || false);
  const [selected, setSelected] = useState<TagProps[]>(
    value?.map((val) => {
      return items?.find((e) => e.key === val) || { key: val, text: val };
    }),
  );
  const [text, setText] = useState<string>('');
  const ref = useAutoClose<HTMLDivElement>(() => {
    setFocus(false);
  }, !focus);
  const fItems = useMemo(() => {
    return (
      items?.filter(
        (s) =>
          (s.text?.toLowerCase().includes(text.toLowerCase()) ||
            s.key?.toLowerCase().includes(text.toLowerCase())) &&
          !selected.find((e) => e.key === s.key),
      ) || []
    );
  }, [items, text, selected]);

  const setNew = useCallback(
    (e: TagProps) => {
      setText('');
      const cur = [...selected, e];
      setSelected(cur);
      onChange?.(
        cur.map((x) => x.key),
        { mode: 'NEW', id: e.key },
      );
    },
    [onChange, selected],
  );

  return (
    <div ref={ref} className={cnx(`glx-tag-selector`)}>
      <div
        className={cnx(
          'glx-flex',
          'glx-flex-row',
          'glx-pb-8',
          'glx-flex-wrap',
          'glx-flex-g-8',
        )}
      >
        {selected.map((e) => (
          <Badge
            key={e.key}
            text={e.text}
            icon={e.icon}
            color={e.color}
            close={() => {
              const cur = selected.filter((x) => x.key !== e.key);
              onChange?.(
                cur.map((x) => x.key),
                { mode: 'DEL', id: e.key },
              );
              setSelected(cur);
            }}
          />
        ))}
      </div>
      <input
        type="text"
        value={text}
        onFocus={() => setFocus(true)}
        autoFocus={autoFocus}
        placeholder={placeholder}
        disabled={disabled}
        onKeyUpCapture={(event) => {
          if (event.key === 'Enter') {
            if (fItems.length >= 1) {
              setNew(fItems[0]);
            }
          } else if (event.key === 'Escape' && focus) {
            setFocus(false);
          }
        }}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {focus && fItems.length > 0 ? (
        <Grid flex flexC className="glx-tag-selector--drawer" gap={6}>
          {fItems?.map((e) => (
            <Grid
              key={e.key}
              flex
              flexR
              gap={12}
              onClick={() => setNew(e)}
              vCenter
            >
              <div
                style={{
                  color: e.color || undefined,
                }}
              >
                {e.icon
                  ? getIcon(e.icon)({
                      size: 20,
                    })
                  : null}
              </div>
              <div>{e.text || e.key}</div>
            </Grid>
          ))}
        </Grid>
      ) : null}
    </div>
  );
};

TagSelector.defaultProps = {
  items: undefined,
  onChange: undefined,
  placeholder: undefined,
  disabled: undefined,
  autoFocus: undefined,
};
