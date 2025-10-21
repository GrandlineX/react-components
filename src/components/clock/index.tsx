import React, { ReactNode, useEffect, useState } from 'react';

import { cnx } from '../../util';
import Cube from './variants/Cube';
import { ClockType } from './type';
import Analog from './variants/Analog';
import Numveric from './variants/Numvers';

export enum ClockEnum {
  'CUBE' = 'CUBE',
  'ANALOG' = 'ANALOG',
  'NUMERIC' = 'NUMERIC',
}

export const Clock = (props: {
  className?: string;
  mode?: ClockEnum;
  custom?: (clock: ClockType) => ReactNode;
}) => {
  const { className, mode, custom } = props;
  const [clock, setClock] = useState<ClockType>({
    s: 'SS',
    m: 'MM',
    h: 'HH',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setClock({
        s: date.getSeconds(),
        m: date.getMinutes(),
        h: date.getHours(),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={cnx('glx--clock-main', className)}>
      {(() => {
        if (custom) {
          return custom(clock);
        }
        switch (mode) {
          case ClockEnum.NUMERIC:
            return <Numveric clock={clock} />;
          case ClockEnum.ANALOG:
            return <Analog clock={clock} />;
          case ClockEnum.CUBE:
          default:
            return <Cube clock={clock} />;
        }
      })()}
    </div>
  );
};
