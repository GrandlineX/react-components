import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useUIContext } from '../../util';
import { Grid } from '../Grid/Grid';

export type ContextMenuOptionType = {
  key: string;
  label?: string;
  keyBind?: string;
  type?: 'button' | 'divider' | 'label';
  disabled?: boolean;
};
export function ContextMenu({
  children,
  options,
  containerClass,
  onSelect,
}: {
  containerClass?: string;
  children: ReactNode | ReactNode[];
  options: ContextMenuOptionType[];
  onSelect?: (key: string) => void;
}) {
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
      <div
        className={containerClass}
        onContextMenu={(e) => {
          e.preventDefault();
          setContextPos({
            top: e.clientY,
            left: e.clientX,
          });
        }}
      >
        {children}
      </div>
      {contextPos
        ? createPortal(
            <Grid
              flex
              flexC
              className="glx-cm--container"
              style={{
                top: contextPos.top,
                left: contextPos.left,
              }}
              gap={2}
            >
              {options.map((opt) => {
                switch (opt.type) {
                  case 'divider':
                    return <div className="glx-cm--divider" />;
                  case 'label':
                    return <div className="glx-cm--lable">{opt.label}</div>;
                  case 'button':
                  default:
                    if (opt.disabled) {
                      return (
                        <Grid
                          flex
                          flexR
                          flexSpaceB
                          className="glx-cm--disabled"
                          gap={8}
                        >
                          <span className="glx-cm--label">{opt.label}</span>
                          <span className="glx-cm--keybind">{opt.keyBind}</span>
                        </Grid>
                      );
                    }
                    return (
                      <Grid
                        flex
                        flexR
                        flexSpaceB
                        className="glx-cm--item"
                        onClick={() => {
                          if (onSelect) {
                            onSelect(opt.key);
                          }
                          setContextPos(null);
                        }}
                        gap={8}
                      >
                        <span className="glx-cm--label">{opt.label}</span>
                        <span className="glx-cm--keybind">{opt.keyBind}</span>
                      </Grid>
                    );
                }
              })}
            </Grid>,
            ui.portalRoot,
          )
        : null}
    </>
  );
}
