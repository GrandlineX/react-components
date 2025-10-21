import React, { useMemo } from 'react';
import { cnx } from '../../util';

export default function AnimateBox({
  type,
  children,
  customBackground,
}: {
  children?: React.ReactNode | React.ReactNode[];
  type: 'glow' | 'rotate';
  customBackground?: string;
}) {
  const bg = useMemo<undefined | React.CSSProperties>(() => {
    if (!customBackground) {
      return undefined;
    }
    if (type === 'glow') {
      return {
        '--glx-glow-box-bg': customBackground,
      } as React.CSSProperties;
    }
    if (type === 'rotate') {
      return {
        '--glx-rotate-box-bg': customBackground,
      } as React.CSSProperties;
    }
  }, [customBackground, type]);
  return (
    <div
      style={bg}
      className={cnx(
        [type === 'glow', 'glx-glow-box'],
        [type === 'rotate', 'glx-rotate-box'],
      )}
    >
      <div className="inner">{children}</div>
    </div>
  );
}
