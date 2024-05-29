import React, { useMemo, useState } from 'react';
import {
  IOCheckboxOutline,
  IOSquareOutline,
  ISize,
} from '@grandlinex/react-icons';
import { cnx } from '../../../util';

export default function CheckBox(props: {
  checked: boolean;
  value?: boolean;
  large?: boolean;
  disabled?: boolean;
  onChange: (ev: boolean) => void;
  className?: string;
}) {
  const {
    onChange,
    checked,
    className,
    large = false,
    value,
    disabled = false,
  } = props;
  const [ck, setChecked] = useState(checked);
  const v = useMemo(() => {
    if (value !== undefined) {
      return value;
    }
    return ck;
  }, [ck, value]);
  return (
    <span
      role="button"
      className={cnx(className)}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      onClick={() => {
        if (!disabled) {
          onChange(!v);
          setChecked(!v);
        }
      }}
    >
      {v ? (
        <IOCheckboxOutline size={large ? ISize.MD : ISize.SM} />
      ) : (
        <IOSquareOutline size={large ? ISize.MD : ISize.SM} />
      )}
    </span>
  );
}
