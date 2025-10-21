import React from 'react';
import { ClockType, pad } from '../type';

export default function (props: { clock: ClockType }) {
  const { clock } = props;
  return (
    <div className="glx--cube">
      <figure className="glx--clock glx-no-select">
        <div className="face top">
          <p id="s">{pad(clock.s)}</p>
        </div>
        <div className="face front">
          <p id="m">{pad(clock.m)}</p>
        </div>
        <div className="face left">
          <p id="h">{pad(clock.h)}</p>
        </div>
      </figure>
    </div>
  );
}
