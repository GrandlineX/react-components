import React, { useState } from 'react';
import { INames } from '@grandlinex/react-icons';
import Grid from '../../layout/Grid/Grid';
import IconSel from './IconSel';

export type IcTexProps = {
  icon: INames | null;
  text: string;
};
export default function IconTextSel(props: {
  sel?: IcTexProps;
  disabled?: boolean;
  onChange: (ev: IcTexProps | null) => void;
  className?: string;
  placeholder?: string;
}) {
  const { onChange, sel, className, placeholder, disabled } = props;

  const [cur, setCur] = useState<IcTexProps>(
    sel || {
      icon: null,
      text: '',
    },
  );
  return (
    <Grid className={className} flex flexR gap={8}>
      <Grid>
        <IconSel
          disabled={disabled}
          sel={cur.icon || undefined}
          onChange={(i) => {
            setCur((s) => ({ text: s.text, icon: i }));
            onChange({ text: cur.text, icon: i });
          }}
        />
      </Grid>
      <Grid grow={1}>
        <input
          value={cur.text}
          onChange={(i) => {
            setCur((s) => ({ text: i.target.value, icon: s.icon }));
            onChange({ text: i.target.value, icon: cur.icon });
          }}
          placeholder={placeholder}
          disabled={disabled}
        />
      </Grid>
    </Grid>
  );
}
IconTextSel.defaultProps = {
  className: undefined,
  disabled: false,
  sel: undefined,
  placeholder: undefined,
};
