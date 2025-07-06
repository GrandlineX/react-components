import React, { useEffect, useMemo, useState } from 'react';
import {
  IOChevronBack,
  IOChevronForward,
  IORadioButtonOff,
  IORadioButtonOnOutline,
} from '@grandlinex/react-icons';
import { useStartOnShow } from '../../util/hooks';
import { Grid } from '../Grid/Grid';

export default function ImageNavigator({
  src,
  className,
  style,
  imgWidth,
  autoPlay,
}: {
  src: string[];
  className?: string;
  style?: React.CSSProperties;
  imgWidth?: string;
  autoPlay?: number;
}) {
  const { domRef, started } = useStartOnShow<HTMLDivElement>();
  const [index, setIndex] = useState(0);
  const [manual, setManual] = useState(false);
  const cur = useMemo(() => src[index], [src, index]);
  const size = useMemo(() => Array.from(new Array(src.length).keys()), [src]);

  useEffect(() => {
    if (autoPlay && !manual && started) {
      const interval = setInterval(() => {
        setIndex((pre) => {
          if (pre + 1 < size.length) {
            return pre + 1;
          }
          return 0;
        });
      }, autoPlay);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [autoPlay, manual, size.length, started]);

  return (
    <Grid
      divRef={domRef}
      style={style}
      flex
      className={[className, 'img-navigator']}
    >
      <img width={imgWidth} src={cur} alt={`carosell_${index}`} />
      <Grid flex flexRow className="bot-nav" hCenter>
        {size.map((i) => (
          <div
            onClick={() => {
              if (!manual) {
                setManual(true);
              }
              setIndex(i);
            }}
          >
            {i === index ? <IORadioButtonOnOutline /> : <IORadioButtonOff />}
          </div>
        ))}
      </Grid>
      {index !== 0 && (
        <Grid
          flex
          className="l-nav"
          vCenter
          onClick={() => {
            if (!manual) {
              setManual(true);
            }
            setIndex(index - 1);
          }}
        >
          <IOChevronBack />
        </Grid>
      )}
      {index + 1 < size.length && (
        <Grid
          flex
          className="r-nav"
          vCenter
          onClick={() => {
            if (!manual) {
              setManual(true);
            }
            setIndex(index + 1);
          }}
        >
          <IOChevronForward />
        </Grid>
      )}
    </Grid>
  );
}
