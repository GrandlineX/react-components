import React from 'react';

const Progress: React.FC<{
  className?: string;
  cur: number;
  max: number;
  width?: number | string;
}> = function (props) {
  const { cur, max, className, width } = props;
  const perc = `${parseFloat(`${((cur + 1) / max) * 100}`).toFixed(0)}%`;
  return (
    <div className={`progress-bar ${className || ''}`} style={{ width }}>
      <div className="wrapper">
        <span className="progress-bar-fill" style={{ width: perc }} />
      </div>
    </div>
  );
};
Progress.defaultProps = {
  className: undefined,
  width: undefined,
};
export default Progress;
