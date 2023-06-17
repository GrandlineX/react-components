import React from 'react';
import colorSelect from './Color';

const Usage: React.FC<{
  value: number;
  label: string | React.ReactNode;
  colors?: [string, string, string];
  width?: string | number;
}> = function (props) {
  const { value, label, colors, width } = props;
  return (
    <div className="glx-usage-comp" style={{ width }}>
      <div className="glx-usage-comp-bar">
        <div
          style={{
            width: `${value}%`,
            height: '4px',
            backgroundColor: colorSelect(value, colors),
          }}
        />
      </div>
      <div className="glx-usage-comp-label">{label}</div>
    </div>
  );
};
Usage.defaultProps = {
  colors: undefined,
  width: undefined,
};

export default Usage;
