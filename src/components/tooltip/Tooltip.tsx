import React, { createRef, useEffect, useState } from 'react';

export type ToolTipProp = {
  text?: string;
  width?: number;
  className?: string;
  position?: 'bottom' | 'right' | 'left';
  children?: React.ReactNode;
};
const Tooltip: React.FC<ToolTipProp> = (props) => {
  const { children, text, width, position, className } = props;
  const nPos = position || 'bottom';
  const nPosClass = `glx-tooltip-content-${nPos}`;
  const [open, setOpen] = useState<boolean>(false);
  const [left, setLeft] = useState<number>(0);
  const chRef = createRef<HTMLSpanElement>();
  const tRef = createRef<HTMLDivElement>();
  const nWidth = width || 200;
  useEffect(() => {
    const w = chRef.current?.offsetWidth || 0;
    const tw = tRef.current?.offsetWidth || 0;
    let nw = 0;
    switch (nPos) {
      case 'bottom':
        nw = (-tw + w) * 0.5;
        break;
      case 'right':
        nw = w;
        break;
      case 'left':
        nw = -nWidth - 10;
        break;
      default:
    }
    setLeft(nw);
  }, [chRef, open]);

  return (
    <span className={`glx-tooltip-container ${className}`}>
      <span
        ref={chRef}
        className="glx-tooltip-children"
        onMouseEnter={(el) => setOpen(true)}
        onMouseLeave={(el) => setOpen(false)}
      >
        {children}
      </span>

      {text ? (
        <div
          ref={tRef}
          style={{
            left: `${left}px`,
            display: open ? 'block' : 'none',
            width: nWidth,
          }}
          className={`glx-tooltip-content glx-fade-in-fast ${nPosClass}`}
        >
          {text}
        </div>
      ) : null}
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
