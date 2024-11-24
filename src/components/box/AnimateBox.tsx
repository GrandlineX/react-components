import React from 'react';
import { cnx } from '../../util';

export default function AnimateBox({
  type,
  children,
}: {
  children?: React.ReactNode | React.ReactNode[];
  type?: 'glow' | 'rotate';
}) {
  return (
    <div
      className={cnx(
        [type === 'glow', 'glx-glow-box'],
        [type === 'rotate', 'glx-rotate-box'],
      )}
    >
      <div className="inner">{children}</div>
    </div>
  );
}
