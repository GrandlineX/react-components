import React, { useMemo, useState } from 'react';
import Grid from '../../Grid/Grid';
import { useFormElContext } from '../FormElement';
import FormDropdown from './FormDropdown';
import { Badge, BadgeColor, BadgeColorX } from '../../other/Badge/Badge';
import { useUIContext } from '../../../util';
import { InputOptionItem } from '../FormTypes';

export type BadgeFieldProps = {
  text: BadgeColor;
  mode: string;
  color01: string;
  color02: string;
};
export default function BadgeColorSelector(props: {
  sel?: BadgeFieldProps;
  disabled?: boolean;
  onChange: (ev: BadgeFieldProps | null) => void;
  className?: string;
}) {
  const uiContxt = useUIContext();
  const field = useFormElContext();

  const { onChange, sel, className, disabled = false } = props;

  const [cur, setCur] = useState<BadgeFieldProps>(
    sel || {
      text: BadgeColorX.bgColors[0],
      mode: BadgeColorX.bgColors[0],
      color01: '#000000',
      color02: '#ffffff',
    },
  );

  const options = useMemo<InputOptionItem[]>(() => {
    return [
      ...BadgeColorX.bgColors.map((el) => ({
        key: el,
        name: uiContxt.translation.get(`glx.input.badge.sel.${el}`),
      })),
      {
        key: 'custom',
        name: uiContxt.translation.get(`glx.input.badge.sel.custom`),
      },
    ];
  }, [uiContxt.translation]);

  return (
    <Grid className={className} flex flexC gap={8}>
      <Grid>
        <FormDropdown
          className=""
          value={cur.mode}
          items={options}
          disabled={disabled}
          onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
            if (ev.target.value === 'custom') {
              const nEl = {
                text: BadgeColorX.fromSColor(
                  cur.color01,
                  cur.color02,
                ).getStringColor(),
                mode: ev.target.value,
                color01: cur.color01,
                color02: cur.color02,
              };
              setCur(nEl);
              onChange(nEl);
            } else {
              const nEl = {
                text: ev.target.value as BadgeColor,
                mode: ev.target.value,
                color01: cur.color01,
                color02: cur.color02,
              };
              setCur(nEl);
              onChange(nEl);
            }
          }}
          onFocus={() => {
            field.setFocus(true);
          }}
          onBlur={() => {
            field.setFocus(false);
          }}
        />
      </Grid>
      {cur.mode === 'custom' && (
        <>
          <Grid flex flexR gap={4} vCenter>
            <div>Raw:</div>
            <input
              disabled={disabled}
              type="text"
              value={cur.text}
              onChange={(e) => {
                if (BadgeColorX.isValidBadge(e.target.value)) {
                  const cx = new BadgeColorX(e.target.value);
                  const nEl = {
                    mode: 'custom',
                    text: cx.getStringColor(),
                    color01: cx.getBackground(),
                    color02: cx.getText() || cur.color02,
                  };
                  setCur(nEl);
                  onChange(nEl);
                }
              }}
            />
          </Grid>
          <Grid flex flexR gap={4} vCenter>
            <input
              disabled={disabled}
              type="color"
              value={cur.color01}
              onChange={(e) => {
                const nEl = {
                  ...cur,
                  text: BadgeColorX.fromSColor(
                    e.target.value,
                    cur.color02,
                  ).getStringColor(),
                  color01: e.target.value,
                };
                setCur(nEl);
                onChange(nEl);
              }}
            />
            <input
              disabled={disabled}
              type="color"
              value={cur.color02}
              onChange={(e) => {
                const nEl = {
                  ...cur,
                  text: BadgeColorX.fromSColor(
                    cur.color01,
                    e.target.value,
                  ).getStringColor(),
                  color02: e.target.value,
                };
                setCur(nEl);
                onChange(nEl);
              }}
            />
          </Grid>
        </>
      )}
      <Grid flex flexR vCenter gap={8}>
        <div>Badge:</div>
        <Badge
          icon="IOPricetag"
          color={cur.text}
          close={() => {}}
          text={uiContxt.translation.get('glx.input.badge.sel.dev.text')}
        />
      </Grid>
    </Grid>
  );
}
