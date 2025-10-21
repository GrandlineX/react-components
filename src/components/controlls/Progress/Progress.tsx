import React from 'react';

function Progress(props: {
  className?: string;
  cur: number;
  max: number;
  width?: number | string;
}) {
  const { cur, max, className, width } = props;
  const perc = `${parseFloat(`${((cur + 1) / max) * 100}`).toFixed(0)}%`;
  return (
    <div className={`progress-bar ${className || ''}`} style={{ width }}>
      <div className="wrapper">
        <span className="progress-bar-fill" style={{ width: perc }} />
      </div>
    </div>
  );
}
export default Progress;
