import React from 'react';
import { Grid } from '../../Grid/Grid';
import { ClockType } from '../type';
import FNumber from '../component/FNumber';

function calcF(index: number, s: number) {
  return 15 * index <= s && s < 15 * index + 15 ? s - 15 * index : undefined;
}

export default function (props: { clock: ClockType }) {
  const { clock } = props;
  const { s, m, h } = clock;

  if (typeof h === 'string' || typeof m === 'string' || typeof s === 'string') {
    return null;
  }
  const h1 = Math.floor(h / 10);
  const h2 = h % 10;
  const m1 = Math.floor(m / 10);
  const m2 = m % 10;
  const s1 = calcF(0, s);
  const s2 = calcF(1, s);
  const s3 = calcF(2, s);
  const s4 = calcF(3, s);

  return (
    <Grid className="glx-num-clock" flex flexR gap={8}>
      <FNumber start={0} num={h1} second={s1} />
      <FNumber start={15} num={h2} second={s2} />
      <div />
      <FNumber start={30} num={m1} second={s3} />
      <FNumber start={45} num={m2} second={s4} />
    </Grid>
  );
}
