import React, { useState } from 'react';
import { INames } from '@grandlinex/react-icons';
import Grid from '../../Grid/Grid';
import IconSel from './IconSel';
import { useFormElContext } from '../FormElement';

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
  const field = useFormElContext();

  const { onChange, sel, className, placeholder, disabled = false } = props;

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
          onFocus={() => {
            field.setFocus(true);
          }}
          onBlur={() => {
            field.setFocus(false);
          }}
        />
      </Grid>
    </Grid>
  );
}
