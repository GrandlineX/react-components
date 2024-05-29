import React from 'react';
import colorSelect from './Color';

function UsageMap(props: {
  value: (number | { val: number; color: string })[];
  label: string | React.ReactNode;
  colors?: [string, string, string];
  width?: string | number;
}) {
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
          ),
        )}
      </div>
      <div className="glx-usage-comp-label">{label}</div>
    </div>
  );
}

export default UsageMap;
