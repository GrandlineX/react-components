import {
  getIcon,
  IOArrowBack,
  IOArrowForward,
  IOClose,
  ISize,
} from '@grandlinex/react-icons';
import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { cnx, trimmer } from '../../../util';
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
  addTab,
}: {
  item: TabItem;
  index: number;
  current: number;
  drag: boolean;
  tabs: TabItem[];
  context: 'left' | 'right';
  onDrop(
    e: React.DragEvent<HTMLDivElement>,
    target: 'left' | 'right',
    position?: number,
  ): void;
} & TabContainerFunctions) {
  const [contextPos, setContextPos] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const oContext = useMemo(() => {
    return context === 'left' ? 'right' : 'left';
  }, [context]);

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
          onDrop={async (e) => onDrop(e, oContext, index)}
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
                  closeTab(item.key, context);
                  addTab(item, oContext);
                }}
              >
                {context === 'left' ? <IOArrowForward /> : <IOArrowBack />} Move
                to {oContext}
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
                Close
              </Grid>
            </Grid>,
            document.body,
          )
        : null}
    </>
  );
}
