import {
  getIcon,
  IOArrowBack,
  IOArrowForward,
  IOClose,
  ISize,
} from '@grandlinex/react-icons';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cnx, trimmer, useUIContext } from '../../../util';
import { Grid, Tooltip } from '../../../components';
import { TabContainerFunctions, TabItem } from '../lib';

export default function TabBarElement({
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
}: {
  item: TabItem;
  index: number;
  current: number;
  drag: boolean;
  tabs: TabItem[];
  context: 'left' | 'right';
  onDrop(e: React.DragEvent<HTMLDivElement>, position?: number): void;
} & TabContainerFunctions) {
  const ui = useUIContext();

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
          <span
            className="tab-bar--button"
            role="button"
            onClick={() => {
              setCurrentTab(index, context);
            }}
          >
            {item.icon ? getIcon(item.icon)({}) : null}
            {trimmer(item.titel)}
          </span>

          <button
            type="button"
            className="tab-bar--button-close"
            onClick={() => {
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
              <Grid
                flex
                flexRow
                gap={8}
                onClick={() => {
                  moveTab(item.key, context);
                }}
              >
                {context === 'left' ? (
                  <>
                    <IOArrowForward />{' '}
                    {ui.translation.get('glx.context.menu.move.to.right')}
                  </>
                ) : (
                  <>
                    <IOArrowBack />{' '}
                    {ui.translation.get('glx.context.menu.move.to.left')}
                  </>
                )}
              </Grid>
              <Grid
                flex
                flexRow
                gap={8}
                onClick={() => {
                  closeTab(item.key, context);
                }}
              >
                <IOClose />
                {ui.translation.get('glx.context.menu.close')}
              </Grid>
            </Grid>,
            ui.portalRoot,
          )
        : null}
    </>
  );
}
