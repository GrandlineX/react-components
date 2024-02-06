import React, { createRef, RefObject, useEffect, useState } from 'react';
import { IOChevronDown } from '@grandlinex/react-icons';
import { useCnx } from '../../../util';

export interface ContentSwitcherItem {
  key: string;
  name: string;
  hidden?: boolean;
}

export interface ContentSwitcherItemFc extends ContentSwitcherItem {
  index: number;
}

export interface ContentSwitcherProps {
  className?: string;
  onChange: (el: ContentSwitcherItemFc) => void;
  selectedIndex?: number;
  items: ContentSwitcherItem[];
  parentState?: [number, (p: number) => void];
}

const ContentSwitcher: React.FC<ContentSwitcherProps> = (props) => {
  const { onChange, selectedIndex, items, parentState, className } = props;
  const [cur, setCur] = useState<number>(selectedIndex ?? 0);
  const cnx = useCnx('glx-content-switcher-wrapper', className);
  const [open, setOpen] = useState<boolean | null>(
    items.length > 3 ? false : null,
  );

  const ref = createRef<HTMLDivElement>();
  const [refField, setRefField] = useState<RefObject<HTMLDivElement>[]>(
    items.map(() => createRef<HTMLDivElement>()),
  );
  const fc = (event: WheelEvent) => {
    const sel = ref.current;
    if (!sel) {
      return;
    }
    if (event.deltaY > 0) {
      sel.scrollTo({ left: sel.scrollLeft + 50 });
    } else {
      sel.scrollTo({ left: sel.scrollLeft - 50 });
    }
  };

  useEffect(() => {
    const sel = ref.current;
    if (!sel || !parentState) {
      return;
    }

    sel.scrollTo({
      left: refField[parentState[0]].current?.offsetLeft,
      behavior: 'smooth',
    });
  }, [parentState]);
  useEffect(() => {
    const rr = ref.current;
    rr?.addEventListener('wheel', fc);
    return () => {
      rr?.removeEventListener('wheel', fc);
    };
  });

  return (
    <div className={cnx}>
      {open !== null ? (
        <div
          className="glx-content-switcher--toggle-icon glx-no-select"
          onClick={() => setOpen(!open)}
        >
          <IOChevronDown />
        </div>
      ) : null}
      {open ? (
        <div className="glx-content-switcher--toggle-dropdown">
          {items.map(({ key, name, hidden }, index) =>
            hidden ? null : (
              <div className="glx-content-switcher--toggle-item">
                <button
                  onClick={() => {
                    setOpen(false);
                    if (parentState) {
                      parentState[1](index);
                    }
                    setCur(index);
                    onChange({ key, name, index });
                  }}
                >
                  {name}
                </button>
              </div>
            ),
          )}
        </div>
      ) : null}
      <div
        ref={ref}
        className={`glx-content-switcher${
          open !== null ? ' glx-content-switcher-show-toggle' : ''
        }`}
      >
        {items.map(({ key, name, hidden }, index) =>
          hidden ? null : (
            <div
              ref={refField[index]}
              key={key}
              role="button"
              onClick={() => {
                if (parentState) {
                  parentState[1](index);
                }
                setCur(index);
                onChange({ key, name, index });
              }}
              className={`glx-content-switcher--item glx-no-select${
                (parentState && parentState[0] === index) ||
                (!parentState && index === cur)
                  ? ' glx-content-switcher--active'
                  : ''
              }`}
            >
              {name}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

ContentSwitcher.defaultProps = {
  selectedIndex: 0,
  parentState: undefined,
  className: undefined,
};
export default ContentSwitcher;
