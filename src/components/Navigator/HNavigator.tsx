import React, { createRef, useEffect } from 'react';

import { IOChevronBack, IOChevronForward } from '@grandlinex/react-icons';
import Grid from '../Grid/Grid';
import { cnx } from '../../util';

export type HNavigatorProps = React.PropsWithChildren<{
  className?: string;
}>;
export default function HNavigator(props: HNavigatorProps) {
  const { children, className } = props;
  const ref = createRef<HTMLDivElement>();
  const [scroll, setScroll] = React.useState<{
    scrollLeft: number;
    clientWidth: number;
    scrollRight: number;
    scrollWidth: number;
  }>({
    scrollLeft: -1,
    clientWidth: -1,
    scrollRight: -1,
    scrollWidth: -1,
  });

  function updateScroll(el: HTMLDivElement) {
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const scrollRight = scrollWidth - clientWidth - scrollLeft;
    setScroll({ scrollLeft, clientWidth, scrollRight, scrollWidth });
  }
  function doScroll(mode: boolean, target: HTMLDivElement | null) {
    if (!target) {
      return;
    }
    let val = 0;
    if (scroll.clientWidth !== -1) {
      val = scroll.clientWidth * 0.75;
    }
    if (!mode) {
      val *= -1;
    }
    target.scrollBy({ left: val, behavior: 'smooth' });
  }
  useEffect(() => {
    if (ref.current) {
      updateScroll(ref.current);
    }
  }, [ref.current]);
  return (
    <Grid className="glx-navigator-horizontal--wrapper">
      <div
        ref={ref}
        onScroll={(x) => {
          updateScroll(x.currentTarget);
        }}
        className={cnx(className, 'glx-navigator-horizontal', 'glx-no-scroll')}
      >
        {children}

        {scroll.scrollLeft > 0 ? (
          <div
            className="glx-navigator-horizontal--left"
            onClick={() => doScroll(false, ref.current)}
          >
            <IOChevronBack />
          </div>
        ) : null}
        {scroll.scrollRight > 0 || scroll.scrollRight === -1 ? (
          <div
            className="glx-navigator-horizontal--right"
            onClick={() => doScroll(true, ref.current)}
          >
            <IOChevronForward />
          </div>
        ) : null}
      </div>
    </Grid>
  );
}
HNavigator.defaultProps = {
  className: undefined,
};
