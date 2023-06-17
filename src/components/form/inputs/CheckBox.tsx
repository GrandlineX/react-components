import React, { useState } from 'react';
import {
  IOCheckboxOutline,
  IOSquareOutline,
  ISize,
} from '@grandlinex/react-icons';
import { cnx } from '../../../util';

export default function CheckBox(props: {
  checked: boolean;
  large?: boolean;
  disabled?: boolean;
  onChange: (ev: boolean) => void;
  className?: string;
}) {
  const { onChange, checked, className, large } = props;
  const [ck, setChecked] = useState(checked);
  return (
    <span
      role="button"
      className={cnx(className)}
      onClick={() => {
        onChange(!ck);
        setChecked(!ck);
      }}
    >
      {ck ? (
        <IOCheckboxOutline size={large ? ISize.MD : ISize.SM} />
      ) : (
        <IOSquareOutline size={large ? ISize.MD : ISize.SM} />
      )}
    </span>
  );
}
CheckBox.defaultProps = {
  className: undefined,
  large: false,
  disabled: false,
};
