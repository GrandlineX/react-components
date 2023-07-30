import React, { createRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useUIContext } from '../../util';

export type ToolTipProp = {
  text?: string;
  width?: number;
  className?: string;
  position?: 'bottom' | 'right' | 'left' | 'top';
  children?: React.ReactNode;
};
const Tooltip: React.FC<ToolTipProp> = (props) => {
  const ui = useUIContext();
  const { children, text, width, position, className } = props;
  const nPos = position || 'bottom';
  const nPosClass = `glx-tooltip-content-${nPos}`;
  const [open, setOpen] = useState<boolean>(false);
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);
  const chRef = createRef<HTMLSpanElement>();
  const tRef = createRef<HTMLDivElement>();

  return (
    <span
      className={`glx-tooltip-container ${className}`}
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseMove={(el) => {
        const ch = tRef.current?.clientHeight || 0;
        const cw = tRef.current?.clientWidth || 0;
        let nTop = 0;
        let nLeft = 0;
        switch (position) {
          case 'top':
            nTop = el.clientY - 15 - ch;
            nLeft = el.clientX - cw / 2;
            break;
          case 'bottom':
            nTop = el.clientY + 10;
            nLeft = el.clientX - cw / 2;
            break;
          case 'left':
            nTop = el.clientY - ch / 2;
            nLeft = el.clientX - 10 - cw;
            break;
          case 'right':
          default:
            nTop = el.clientY - ch / 2;
            nLeft = el.clientX + 10;
            break;
        }

        if (nTop + ch >= window.innerHeight) {
          nTop = window.innerHeight - ch - 2;
        }
        if (nTop <= 0) {
          nTop = 2;
        }
        if (nLeft + cw >= window.innerWidth) {
          nLeft = window.innerWidth - cw - 4;
        }
        if (nLeft <= 0) {
          nLeft = 2;
        }

        setLeft(nLeft);
        setTop(nTop);
      }}
      onMouseLeave={() => setOpen(false)}
    >
      <span ref={chRef} className="glx-tooltip-children">
        {children}
      </span>

      {text && !ui.tooltipDisabled
        ? createPortal(
            <div
              ref={tRef}
              style={{
                left: `${left}px`,
                top: `${top}px`,
                display: open ? 'block' : 'none',
                width,
              }}
              className={`glx-tooltip-content glx-fade-in-fast ${nPosClass}`}
            >
              {text}
            </div>,
            ui.portalRoot,
          )
        : null}
    </span>
  );
};
Tooltip.defaultProps = {
  width: undefined,
  position: undefined,
  className: '',
  text: undefined,
  children: undefined,
};
export default Tooltip;
