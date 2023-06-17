import React, { useEffect, useState } from 'react';
import { cnx } from '../../../util';

export interface EditSidePanelProps {
  className?: string;
  defaultWidth?: number;
  defaultMinWidth?: number;
  defaultOffsetWidth?: number;
  children?: React.ReactNode;
  initSize?: number;
  onResize?: (size: number) => void;
}
export const EditSidePanel = ({
  className,
  children,
  initSize,
  onResize,
  defaultOffsetWidth,
  defaultMinWidth,
  defaultWidth,
}: EditSidePanelProps) => {
  // START  RESIZE PARTS
  const xWidth = defaultWidth || 500;
  const xMinWith = defaultMinWidth || 300;
  const xOffsetWidth = defaultOffsetWidth || 50;
  const [size, setSize] = useState(initSize || xWidth);
  const [drag, setDrag] = useState(false);

  const windowResize = () => {
    if (
      window.innerWidth - xOffsetWidth <= size &&
      window.innerWidth > xWidth
    ) {
      setSize(xWidth);
      onResize?.(xWidth);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  });
  // END RESIZE PARTS

  return (
    <div
      className={cnx(className, 'edit-side-panel')}
      style={{ width: window.innerWidth < size ? window.innerWidth : size }}
    >
      <div
        role="none"
        className={cnx('edit-side-panel--resize', [
          !drag,
          'edit-side-panel--drag',
        ])}
        onMouseDown={(event) => {
          const startPosition = event.pageX;
          setDrag(true);
          let newSize = 0;
          function onMouseMove(mouseMoveEvent: any) {
            newSize = size + startPosition - mouseMoveEvent.pageX;
            if (
              newSize >= xMinWith &&
              newSize <= window.innerWidth - xOffsetWidth
            ) {
              setSize(newSize);
            }
            if (newSize < xMinWith) {
              newSize = xMinWith;
            }
            if (newSize > window.innerWidth - xOffsetWidth) {
              newSize = window.innerWidth - xOffsetWidth;
            }
          }
          function onMouseUp() {
            setDrag(false);
            onResize?.(newSize);
            document.body.removeEventListener('mousemove', onMouseMove);
          }

          document.body.addEventListener('mousemove', onMouseMove);
          document.body.addEventListener('mouseup', onMouseUp, { once: true });
        }}
      />
      <div className="edit-side-panel--content">{children}</div>
    </div>
  );
};
EditSidePanel.defaultProps = {
  className: undefined,
  children: undefined,
  defaultWidth: undefined,
  defaultMinWidth: undefined,
  defaultOffsetWidth: undefined,
  initSize: undefined,
  onResize: undefined,
};
