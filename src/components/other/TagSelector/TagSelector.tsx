import React, {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getIcon } from '@grandlinex/react-icons';
import { cnx } from '../../../util';
import { BadgeProps, Badge } from '../Badge/Badge';
import { useAutoClose } from '../../../util/hooks';
import Grid from '../../Grid/Grid';

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
  maxOptions?: number;
};
export function TagSelector(prop: TagSelectorProps) {
  const {
    items,
    onChange,
    placeholder,
    disabled,
    autoFocus,
    value,
    maxOptions = 10,
  } = prop;
  const [keyNavigation, setKeyNavigation] = useState<number>(-1);

  const divRef = createRef<HTMLDivElement>();
  const [focus, setFocus] = useState(autoFocus || false);
  const selected = useMemo<TagProps[]>(() => {
    return (
      value?.map((val) => {
        return items?.find((e) => e.key === val) || { key: val, text: val };
      }) || []
    );
  }, [value, items]);
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
    ).slice(0, maxOptions);
  }, [items, maxOptions, text, selected]);

  const setNew = useCallback(
    (e: TagProps) => {
      setText('');
      const cur = [...selected, e];
      onChange?.(
        cur.map((x) => x.key),
        { mode: 'NEW', id: e.key },
      );
    },
    [onChange, selected],
  );

  const remove = useCallback(
    (key: string) => {
      const cur = selected.filter((x) => x.key !== key);
      onChange?.(
        cur.map((x) => x.key),
        { mode: 'DEL', id: key },
      );
    },
    [onChange, selected],
  );
  function keyListener(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      setFocus(false);
    } else if (e.key === 'Enter') {
      if (keyNavigation >= 0 && keyNavigation < fItems.length) {
        setNew(fItems[keyNavigation]);
        setKeyNavigation(-1);
        ref.current?.focus();
      } else if (fItems.length > 0) {
        setNew(fItems[0]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (keyNavigation < fItems.length - 1) {
        if (keyNavigation === -1) {
          ref.current?.blur();
        }
        setKeyNavigation(keyNavigation + 1);
        (
          divRef.current?.childNodes[keyNavigation + 1] as HTMLDivElement
        )?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (keyNavigation >= 0) {
        if (keyNavigation === 0) {
          ref.current?.focus();
        }
        setKeyNavigation(keyNavigation - 1);
        setKeyNavigation(keyNavigation - 1);
        (
          divRef.current?.childNodes[keyNavigation + 1] as HTMLDivElement
        )?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    } else if (e.key === 'Backspace' && e.shiftKey) {
      e.preventDefault();
      if (selected.length >= 1) {
        remove(selected[selected.length - 1].key);
      }
    }
  }
  useEffect(() => {
    const cc = ref.current;
    cc?.addEventListener('keydown', keyListener);
    return () => {
      cc?.removeEventListener('keydown', keyListener);
    };
  });
  return (
    <div ref={ref} className={cnx(`glx-tag-selector glx-tag-selector--alt`)}>
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
              remove(e.key);
            }}
          />
        ))}
      </div>
      <input
        type="text"
        value={text}
        onFocus={() => setFocus(true)}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {focus && fItems.length > 0 ? (
        <Grid
          flex
          flexC
          className="glx-tag-selector--drawer"
          gap={6}
          divRef={divRef}
        >
          {fItems?.map((e, i) => (
            <Grid
              key={e.key}
              flex
              flexR
              gap={12}
              onClick={() => setNew(e)}
              vCenter
              className={[[i === keyNavigation, 'glx-tag-selector--selected']]}
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
}
