import { getIcon, INames, IOClose, ISize } from '@grandlinex/react-icons';
import React, { MouseEvent, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { cnx, trimmer, useUIContext } from '../../../util';
import { Grid, Tooltip } from '../../../components';
import { TabContainerFunctions, TabItem, WCMode } from '../lib';

export type TabContextMenu = {
  key: string;
  translation?: string;
  text?: string;
  icon?: INames;
  order: number;
  onClick(event: MouseEvent, item: TabItem, context: WCMode): void;
};
export function TabBarElement({
  item,
  index,
  context,
  setCurrentTab,
  closeTab,
  onDrop,
  current,
  tabs,
  drag,
  moveTab,
  contextMenu,
}: {
  item: TabItem;
  index: number;
  current: number;
  drag: boolean;
  tabs: TabItem[];
  context: WCMode;
  contextMenu?: TabContextMenu[];
  onDrop(e: React.DragEvent<HTMLDivElement>, position?: number): void;
} & TabContainerFunctions) {
  const ui = useUIContext();
  const oContext = useMemo(
    () => (context === 'left' ? 'right' : 'left'),
    [context],
  );
  const menu = useMemo<TabContextMenu[]>(() => {
    const move: TabContextMenu =
      context === 'left'
        ? {
            order: 10,
            key: 'move-right',
            translation: 'glx.context.menu.move.to.right',
            icon: 'IOArrowForward',
            onClick() {
              moveTab(item.key, context, oContext);
            },
          }
        : {
            order: 10,
            key: 'move-left',
            translation: 'glx.context.menu.move.to.left',
            icon: 'IOArrowBack',
            onClick() {
              moveTab(item.key, context, oContext);
            },
          };
    const combined: TabContextMenu[] = [
      move,
      {
        order: 20,
        key: 'close',
        translation: 'glx.context.menu.close',
        icon: 'IOClose',
        onClick() {
          closeTab(item.key, context);
        },
      },
      ...(contextMenu ?? []),
    ];

    return combined.sort((a, b) => a.order - b.order);
  }, [closeTab, context, contextMenu, item.key, moveTab, oContext]);

  const [contextPos, setContextPos] = useState<{
    top: number;
    left: number;
  } | null>(null);

  useEffect(() => {
    const fc = () => {
      if (contextPos) {
        setContextPos(null);
        document.removeEventListener('click', fc);
      }
    };
    if (contextPos) {
      document.addEventListener('click', fc);
      return () => {
        document.removeEventListener('click', fc);
      };
    }
    return () => {};
  }, [contextPos]);

  return (
    <>
      <Tooltip key={item.key} text={item.titel} position="right">
        <div
          key={item.key}
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('id', item.key);
            e.dataTransfer.setData('type', context);
          }}
          onClick={() => {
            setCurrentTab(index, context);
          }}
          onDrop={async (e) => onDrop(e, index)}
          className={cnx(
            'tab-bar--item',
            [index === current, ' tab-bar--item-selected'],
            [
              drag && index === tabs.length - 1,
              'glx-drop-nonce--active-border',
            ],
          )}
          onContextMenu={(e) => {
            e.preventDefault();
            setContextPos({
              top: e.clientY,
              left: e.clientX,
            });
          }}
        >
          <span className="tab-bar--button" role="button">
            {item.icon ? getIcon(item.icon)({}) : null}
            {trimmer(item.titel)}
          </span>

          <button
            type="button"
            className="tab-bar--button-close"
            onClick={(e) => {
              e.stopPropagation();
              closeTab(item.key, context);
            }}
          >
            <IOClose size={ISize.SL} />
          </button>
        </div>
      </Tooltip>
      {contextPos
        ? createPortal(
            <Grid
              flex
              flexC
              className="glx-context-menu"
              style={{
                top: contextPos.top,
                left: contextPos.left,
              }}
            >
              {menu.map((m) => (
                <Grid
                  flex
                  flexRow
                  gap={8}
                  onClick={(e) => {
                    m.onClick(e, item, context);
                  }}
                >
                  {m.icon && getIcon(m.icon)({})}
                  {m.translation && ui.translation.get(m.translation)}
                  {m.text}
                </Grid>
              ))}
            </Grid>,
            ui.portalRoot,
          )
        : null}
    </>
  );
}
