import React from 'react';
import { ClockType } from '../type';

export default function (props: { clock: ClockType }) {
  const { clock } = props;
  const { s, m, h } = clock;
  if (typeof h === 'string' || typeof m === 'string' || typeof s === 'string') {
    return null;
  }
  return (
    <div className="glx-analog--clock__circle">
      <span className="glx-analog--clock__twelve" />
      <span className="glx-analog--clock__three" />
      <span className="glx-analog--clock__six" />
      <span className="glx-analog--clock__nine" />

      <div className="glx-analog--clock__rounder" />
      <div
        className="glx-analog--clock__hour"
        style={{ transform: `rotateZ(${h * 30 + (m * 6) / 12}deg)` }}
      />
      <div
        className="glx-analog--clock__minutes"
        style={{ transform: `rotateZ(${m * 6}deg)` }}
      />
      <div
        className="glx-analog--clock__seconds"
        style={{ transform: `rotateZ(${s * 6}deg)` }}
      />
    </div>
  );
}
