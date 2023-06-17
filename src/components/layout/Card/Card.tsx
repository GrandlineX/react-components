import React, { ReactNode } from 'react';
import {
  getIcon,
  INames,
  IOEllipsisVertical,
  ISize,
} from '@grandlinex/react-icons';
import Badge, { BadgeProps } from '../../other/Badge/Badge';
import { cnx } from '../../../util';
import HNavigator from '../Navigator/HNavigator';
import DropDownIconMenu, { MenuItem } from '../../menu/DropDownIconMenu';
import Grid from '../Grid/Grid';

export type CardColor = 'red' | 'black' | 'yellow' | 'green' | 'orange';
export type CardIconType = {
  icon: INames | ReactNode;
  onClick: () => void;
  key?: string;
};

export type CardProps = {
  className?: string;
  title?: string | ReactNode;
  imgUrl?: string;
  imgBase?: string;
  date?: string;
  iconCover?: boolean;
  noIcon?: boolean;
  skeleton?: boolean;
  order?: number;
  badges?: BadgeProps[];
  color?: CardColor;
  icon?: INames | ReactNode;
  button?: {
    onClick: () => void;
    content: ReactNode | string;
  };
  hoverButton?: CardIconType[];
  children?: React.ReactNode;
  menu?: MenuItem[];
};
const Card: React.FC<CardProps> = (props) => {
  const {
    className,
    children,
    imgUrl,
    icon,
    title,
    color,
    hoverButton,
    order,
    button,
    imgBase,
    noIcon,
    iconCover,
    menu,
    date,
    badges,
    skeleton,
  } = props;

  let hover: CardIconType[] | null;
  if (hoverButton) {
    hover = hoverButton.map((c) => {
      const cur = c;

      if (typeof cur.icon === 'string') {
        cur.key = cur.icon;
        cur.icon = getIcon(cur.icon as INames)({ size: ISize.MD });
      }
      return cur;
    });
  } else {
    hover = null;
  }
  const style = order ? { order } : undefined;
  let url = null;
  if (imgUrl) {
    url = imgUrl;
  } else if (imgBase) {
    url = `${imgBase}`;
  }
  return (
    <div style={style} className={cnx(className, 'glx-card--item')}>
      <div>
        <div className="glx-card--head">
          {url ? (
            <>
              <div
                className="glx-card--img glx-round-top"
                style={{ backgroundImage: `url(${url})` }}
              />
              <div className="glx-card--space" />
            </>
          ) : null}
          {!url && iconCover && icon ? (
            <>
              <div
                className="glx-card--iconCover glx-round-top"
                style={{
                  backgroundColor: color || 'blue',
                }}
              >
                <div className="glx-card--effect glx-round-top">
                  {typeof icon === 'string'
                    ? getIcon(icon as INames)({ width: 128, height: 128 })
                    : icon}
                </div>
              </div>
              <div className="glx-card--space" />
            </>
          ) : null}
          {skeleton ? (
            <>
              <div className="glx-card--skeleton glx-round-top">
                <div className="glx-card--effect glx-round-top">
                  <div className="animated-background glx-w-full glx-h-full glx-round-top" />
                </div>
              </div>
              <div className="glx-card--space" />
            </>
          ) : null}
          {hover ? (
            <div className="glx-card--hover">
              {hover.map((el) => (
                <div key={el.key} className="glx-card--btn-wrap">
                  <button type="button" onClick={el.onClick}>
                    {el.icon}
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="glx-card--title">
          {title} {date ? <span className="glx-card--date">{date}</span> : null}
          {skeleton ? (
            <div
              className="animated-background glx-w-full glx-mt-4"
              style={{
                height: '8px',
                width: '180px',
                borderRadius: '4px',
              }}
            />
          ) : null}
        </div>
        <div className="glx-card--content">
          {children}
          {skeleton ? (
            <>
              <div
                className="animated-background glx-w-full glx-mt-4"
                style={{
                  height: '8px',
                  width: '300px',
                  borderRadius: '4px',
                }}
              />
              <div
                className="animated-background glx-w-full glx-mt-8"
                style={{
                  height: '8px',
                  width: '300px',
                  borderRadius: '4px',
                }}
              />
            </>
          ) : null}
        </div>

        {badges ? (
          <HNavigator className="glx-card--badges">
            {badges?.map((el) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <Badge {...el} />
            ))}
          </HNavigator>
        ) : null}
        {skeleton ? (
          <HNavigator className="glx-card--badges">
            <div
              className="animated-background glx-w-full glx-ml-8"
              style={{
                height: '28px',
                width: '88px',
                borderRadius: '16px',
              }}
            />
            <div
              className="animated-background glx-w-full glx-ml-8"
              style={{
                height: '28px',
                width: '88px',
                borderRadius: '16px',
              }}
            />
            <div
              className="animated-background glx-w-full glx-ml-8"
              style={{
                height: '28px',
                width: '88px',
                borderRadius: '16px',
              }}
            />
          </HNavigator>
        ) : null}
      </div>
      <div>
        <div className="glx-card--footer">
          <div>
            {icon && !noIcon ? (
              <div
                className={cnx('glx-card--icon', [
                  !!color,
                  `glx-card--icon-${color}`,
                ])}
              >
                {typeof icon === 'string'
                  ? getIcon(icon as INames)({ size: ISize.SM })
                  : icon}
              </div>
            ) : null}
            {skeleton ? (
              <div
                className="animated-background glx-w-full glx-ml-8"
                style={{
                  height: '24px',
                  width: '24px',
                  borderRadius: '4px',
                }}
              />
            ) : null}
          </div>
          <div>
            {button ? (
              <button
                type="button"
                onClick={button.onClick}
                className={` button-link button--${color || 'blue'}`}
              >
                {button.content}
              </button>
            ) : null}
          </div>
          <Grid flex flexR flexEnd vCenter>
            {menu ? (
              <DropDownIconMenu
                top
                menu={menu}
              >
                <IOEllipsisVertical />
              </DropDownIconMenu>
            ) : null}
          </Grid>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  order: undefined,
  className: undefined,
  imgUrl: undefined,
  imgBase: undefined,
  iconCover: undefined,
  skeleton: undefined,
  icon: undefined,
  color: undefined,
  button: undefined,
  date: undefined,
  hoverButton: undefined,
  noIcon: undefined,
  badges: undefined,
  title: undefined,
  children: undefined,
  menu: undefined,
};

export { Card };
