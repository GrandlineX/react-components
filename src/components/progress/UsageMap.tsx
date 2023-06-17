import React from 'react';
import colorSelect from './Color';

const UsageMap: React.FC<{
  value: (number | { val: number; color: string })[];
  label: string | React.ReactNode;
  colors?: [string, string, string];
  width?: string | number;
}> = function (props) {
  const { value, label, colors, width } = props;

  return (
    <div className="glx-usage-comp" style={{ width }}>
      <div className="glx-usage-comp-map-bar">
        {value.map((v) =>
          typeof v === 'number' ? (
            <div
              style={{
                width: '4px',
                height: `${v}%`,
                backgroundColor: colorSelect(v, colors),
              }}
            />
          ) : (
            <div
              style={{
                width: '4px',
                height: `${v.val}%`,
                backgroundColor: v.color,
              }}
            />
          )
        )}
      </div>
      <div className="glx-usage-comp-label">{label}</div>
    </div>
  );
};
UsageMap.defaultProps = {
  colors: undefined,
  width: undefined,
};

export default UsageMap;
