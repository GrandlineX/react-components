import React, { useMemo } from 'react';
import { pad } from '../type';
import Grid from '../../Grid/Grid';

function helpList(start: number) {
  const x = [];
  const y = [];
  const z = [];
  for (let i = start; i < start + 15; i++) {
    if (x.length !== 5) {
      x.push(i);
    } else if (y.length !== 5) {
      y.push(i);
    } else {
      z.push(i);
    }
  }
  return [x, y, z];
}
const numMap = [
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 0
  [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // 1
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // 2
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 3
  [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // 4
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 5
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 6
  [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], // 7
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 8
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 9
];

export default function FNumber(props: {
  start: number;
  num: number;
  second?: number;
}) {
  const { start, num, second } = props;
  const he = useMemo(() => helpList(start), [start]);
  const gap = 2;
  const cur = numMap[num];
  return (
    <Grid className="glx-f-number" flex flexR gap={gap}>
      {he.map((i, indI) => {
        return (
          <Grid flex flexC gap={gap}>
            {i.map((j, indJ) => {
              const ii = indI * 5 + indJ;
              return (
                <Grid
                  className={[
                    [cur[ii] === 1, 'num-active'],
                    [ii === second, 'num-active--secondary'],
                  ]}
                >
                  {pad(j)}
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </Grid>
  );
}
