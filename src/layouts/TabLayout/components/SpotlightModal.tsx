import React, { createRef, useEffect, useMemo, useState } from 'react';
import { getIcon, INames, ISize } from '@grandlinex/react-icons';
import { Grid } from '../../../components';
import { useUIContext } from '../../../util';

export type DefaultSearch = (
  search: string,
  setSearch: (x: string) => void,
  setCommand: (x: CommandAction) => void,
  close: () => void,
) => SpotlightOption[] | null;
export type CommandSearch = (
  args: string[],
  setSearch: (x: string) => void,
  setCommand: (x: CommandAction) => void,
  close: () => void,
) => SpotlightOption[] | null;
export type CommandAction = {
  action: CommandSearch;
  commandTag: string;
  name: string;
  icon?: INames;
};
export type SpotlightProps = {
  closeFcn: () => void;
  defaultSearch?: DefaultSearch;
  action?: CommandAction[];
  hint?: React.ReactNode;
};

export type SpotlightOption = {
  key: string;
  optionAction: (() => void) | null;
  text: string;
  path?: string[];
  component?: React.ReactNode;
  icon?: INames;
};

const cmd = (a: CommandAction, space = false) => {
  return `/${a.commandTag}${space ? ' ' : ''}`;
};

export function SpotlightModal({
  closeFcn,
  action,
  defaultSearch,
  hint,
}: SpotlightProps) {
  const ui = useUIContext();
  const [search, setSearch] = useState('');
  const [command, setCommand] = useState<CommandAction | null>(null);
  const ref = createRef<HTMLInputElement>();
  const refScroll = createRef<HTMLDivElement>();
  const refCur = createRef<HTMLDivElement>();
  const [keyNavigation, setKeyNavigation] = useState<number>(-1);
  let res: SpotlightOption[] = [];
  let emptyRes: SpotlightOption[] | null = null;

  const defErr = useMemo(() => {
    return [
      [
        {
          key: 'err01',
          optionAction: null,
          text: ui.translation.get('glx.spotlight.empty.commands'),
        },
      ],
      [
        {
          key: 'err02',
          optionAction: null,
          text: ui.translation.get('glx.spotlight.empty.result'),
        },
      ],
    ];
  }, [ui.translation]);

  if (search.startsWith('/')) {
    if (!action) {
      [res] = defErr;
    } else {
      const sel = action.filter((a) => {
        return cmd(a).startsWith(search) || search.startsWith(cmd(a));
      });
      if (sel.length === 0) {
        [res] = defErr;
      } else if (sel.length === 1 && search.startsWith(cmd(sel[0], true))) {
        if (!command) {
          setCommand(sel[0]);
        }
        res =
          sel[0].action(search.split(' '), setSearch, setCommand, closeFcn) ||
          defErr[0];
      } else {
        if (command) {
          setCommand(null);
        }
        for (const cur of sel) {
          res.push({
            key: cur.commandTag,
            optionAction: () => {
              setCommand(cur);
              setSearch(cmd(cur, true));
            },
            text: `/${cur.commandTag} - ${cur.name}`,
            icon: cur.icon,
          });
        }
      }
    }
  } else if (search.length > 2) {
    if (defaultSearch) {
      res = defaultSearch(search, setSearch, setCommand, closeFcn) || defErr[1];
    } else {
      [, emptyRes] = defErr;
    }
  } else if (search === '' && command) {
    setCommand(null);
  }

  function keyListener(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      setSearch('');
      closeFcn();
    } else if (e.key === 'Enter') {
      if (keyNavigation >= 0 && keyNavigation < res.length) {
        res[keyNavigation].optionAction?.();
        setKeyNavigation(-1);
        ref.current?.focus();
      } else if (res.length > 0) {
        res[0].optionAction?.();
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (keyNavigation < res.length - 1) {
        if (keyNavigation === -1) {
          ref.current?.blur();
        }
        refScroll.current?.scrollTo({
          top: 62 * keyNavigation,
        });
        setKeyNavigation(keyNavigation + 1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (keyNavigation >= 0) {
        if (keyNavigation === 0) {
          ref.current?.focus();
        }

        refScroll.current?.scrollTo({
          top: 62 * (keyNavigation - 1),
        });

        setKeyNavigation(keyNavigation - 1);
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyListener);
    return () => {
      document.removeEventListener('keydown', keyListener);
    };
  });

  return (
    <Grid
      className="tab-layout--spotlight glx-animation-fade-in-super-fast"
      flex
      gap={12}
      flexC
      vCenter
    >
      <div className="tab-layout--spotlight-offset" />
      <Grid className="tab-layout--spotlight-input" flex flexRow vCenter>
        {command ? (
          <Grid className="option-icon">
            {command.icon ? getIcon(command.icon)({ size: ISize.SM }) : null}
          </Grid>
        ) : null}
        <Grid grow={1}>
          <input
            ref={ref}
            type="text"
            autoFocus
            spellCheck={false}
            placeholder={ui.translation.get('glx.spotlight.placeholder')}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onFocus={() => {
              setKeyNavigation(-1);
            }}
            value={search}
          />
        </Grid>
      </Grid>
      <Grid />
      {(emptyRes || res).length === 0 && hint}
      <Grid
        divRef={refScroll}
        className="tab-layout--spotlight-option glx-no-scroll"
      >
        {(emptyRes || res).map(
          ({ icon, optionAction, text, key, path, component }, index) => (
            <Grid
              key={key}
              divRef={index === keyNavigation ? refCur : undefined}
              className={[
                [
                  optionAction === null,
                  'option-element--no-action',
                  'option-element',
                ],
                [index === keyNavigation, 'option-element-active'],
              ]}
              flex
              flexRow
              vCenter
              gap={8}
              onClick={optionAction || undefined}
            >
              <Grid className="option-icon">
                {icon ? getIcon(icon)({ size: ISize.SM }) : null}
              </Grid>

              <Grid flex flexC>
                {path ? (
                  <div className="option-path">{path.join(' > ')}</div>
                ) : null}
                <div>{component || text}</div>
              </Grid>
            </Grid>
          ),
        )}
      </Grid>
    </Grid>
  );
}
SpotlightModal.defaultProps = {
  defaultSearch: undefined,
  action: undefined,
  hint: undefined,
};
