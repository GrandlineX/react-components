import React from 'react';
import { Icon, INames } from '@grandlinex/react-icons';
import { cnx } from '../../util';
import { CardProps } from '../Card/Card';
import { Grid } from '../Grid/Grid';
import { IconButton } from '../button/IconButton';

export type HCardProps = Omit<CardProps, 'badges' | 'button' | 'menu'> & {
  imageWidth?: number | string;
};
function HCard({
  className,
  children,
  imgUrl,
  icon,
  title,
  color,
  order,
  hoverButton,
  imgBase,
  iconCover,
  date,
  imageWidth,
  skeleton,
}: HCardProps) {
  const style = order ? { order } : undefined;
  let url = null;
  if (imgUrl) {
    url = imgUrl;
  } else if (imgBase) {
    url = `${imgBase}`;
  }
  return (
    <div style={style} className={cnx(className, 'glx-hcard--item')}>
      <div
        className="glx-hcard--head"
        style={{
          minWidth: imageWidth ?? '120px',
        }}
      >
        {url ? (
          <>
            <div
              className="glx-hcard--img glx-hround-top"
              style={{ backgroundImage: `url(${url})` }}
            />
            <div className="glx-hcard--space" />
          </>
        ) : null}
        {!url && iconCover && icon ? (
          <>
            <div
              className="glx-hcard--iconCover glx-hround-top"
              style={{
                backgroundColor: color || 'blue',
              }}
            >
              <Grid flex center className="glx-hcard--effect glx-hround-top">
                {typeof icon === 'string' ? (
                  <Icon name={icon as INames} width={96} height={96} />
                ) : (
                  icon
                )}
              </Grid>
            </div>
            <div className="glx-hcard--space" />
          </>
        ) : null}
        {skeleton ? (
          <>
            <div className="glx-hcard--skeleton glx-hround-top">
              <div className="glx-hcard--effect glx-hround-top">
                <div className="animated-background glx-w-full glx-h-full glx-hround-top" />
              </div>
            </div>
            <div className="glx-hcard--space" />
          </>
        ) : null}
      </div>
      <Grid flex flexC grow={1} flexSpaceB className="glx-py-8">
        <div className="glx-hcard--title">
          {title}{' '}
          {date ? <span className="glx-hcard--date">{date}</span> : null}
          {skeleton ? (
            <div
              className="animated-background glx-w-full glx-mt-4"
              style={{
                height: '8px',
                width: 'calc( 100% - 60px )',
                borderRadius: '4px',
              }}
            />
          ) : null}
        </div>
        <div className="glx-hcard--content">
          {children}
          {skeleton ? (
            <>
              <div
                className="animated-background glx-w-full glx-mt-4 glx-mt-8"
                style={{
                  height: '8px',
                  width: 'calc( 100% - 20px )',
                  borderRadius: '4px',
                }}
              />
              <div
                className="animated-background glx-w-full glx-mt-8"
                style={{
                  height: '8px',
                  width: 'calc( 100% - 20px )',
                  borderRadius: '4px',
                }}
              />
              <div
                className="animated-background glx-w-full glx-mt-8"
                style={{
                  height: '8px',
                  width: 'calc( 100% - 20px )',
                  borderRadius: '4px',
                }}
              />
            </>
          ) : null}
        </div>
        <Grid flex flexR hCenter>
          {hoverButton?.map((el) => (
            <IconButton key={el.key} onClick={el.onClick} toolTip={el.tooltip}>
              {typeof el.icon === 'string' ? (
                <Icon name={el.icon as INames} />
              ) : (
                el.icon
              )}
            </IconButton>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export { HCard };
