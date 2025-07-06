import React, { useEffect, useRef } from 'react';
import { cnx } from '../../util';
import { Grid, GridProps } from '../Grid/Grid';

export default function EndlessImageScroll({
  images,
  speed = 50,
  imgClass,
  containerProps,
  noBorder = false,
  direction = 'left',
}: {
  images: { url: string; id: string; href?: string; alt?: string }[];
  imgClass?: string;
  speed?: number;
  noBorder?: boolean;
  direction?: 'left' | 'right';
  containerProps?: GridProps;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollStep = speed / 60; // Speed controls pixels per second

    let scroll: () => void;
    if (direction === 'left') {
      let scrollAmount = 0;
      scroll = () => {
        scrollAmount += scrollStep;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        requestAnimationFrame(scroll);
      };
    } else {
      let scrollAmount = scrollContainer.scrollWidth / 2;
      scroll = () => {
        scrollAmount -= scrollStep;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount <= 0) {
          scrollAmount = scrollContainer.scrollWidth / 2;
        }
        requestAnimationFrame(scroll);
      };
    }

    const clonedContent = scrollContainer.innerHTML;
    scrollContainer.innerHTML += clonedContent;

    scroll();
  }, [speed]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid flex {...containerProps}>
      <div
        className={cnx('glx-scroll-wrapper', [
          noBorder,
          'glx-scroll-wrapper--no-border',
        ])}
      >
        <div className="glx-transparent--left" />
        <div className="glx-transparent--right" />
        <div className="glx-scroll-container" ref={scrollContainerRef}>
          {images.map((image) =>
            image.href ? (
              <a
                href={image.href}
                id={image.id}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={image.url}
                  alt={image.alt || ''}
                  className={cnx('glx-scroll-image', imgClass)}
                  loading="lazy"
                />
              </a>
            ) : (
              <img
                id={image.id}
                src={image.url}
                alt={image.alt || ''}
                className={cnx('glx-scroll-image', imgClass)}
                loading="lazy"
              />
            ),
          )}
        </div>
      </div>
    </Grid>
  );
}
