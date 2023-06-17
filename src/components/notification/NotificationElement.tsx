import React, { ReactNode } from 'react';
import { getIcon, INames, ISize } from '@grandlinex/react-icons';
import { IconButton } from '../button/IconButton';
import { cnx } from '../../util';
import DropDownIconMenu, { MenuItem } from '../menu/DropDownIconMenu';
import Grid from '../layout/Grid/Grid';

export type NotificationElementProps = {
  key: string;
  active: boolean;
  selected: boolean;
  title: string;
  message: string;
  date?: string;
};
const NotificationElement: React.FC<{
  el: NotificationElementProps;
  onClick?: () => void;
  icon?: ReactNode;
  color?: string;
  image?: string;
  fallbackIcon?: {
    color?: string;
    icon: INames;
  };
  menu?: MenuItem[];
  button?: {
    onClick: () => Promise<void>;
    show: () => boolean;
    content: ReactNode;
    tooltip?: string;
    key: string;
  }[];
}> = function (props) {
  const { el, onClick, button, icon, color, image, menu, fallbackIcon } = props;

  return (
    <div
      key={el.key}
      className={cnx(
        'glx-notification',
        'glx-flex-row',
        [el.selected, 'glx-notification--sel'],
        [el.active, ' glx-notification--unread']
      )}
    >
      <div
        className="glx-notification--color"
        style={color ? { backgroundColor: color } : undefined}
      />

      <div className="glx-flex-column">
        <div className="glx-flex-row">
          {icon ? <div className="glx-mr-2">{icon}</div> : null}
          <div className="glx-bold" onClick={onClick}>
            {el.title}
          </div>
        </div>
        <div onClick={onClick}>{el.message}</div>

        <div className="glx-flex-row glx-notification--button glx-flex-g-8">
          <div className="glx-notification--date">{el.date}</div>
          <div className="glx-flex-r">
            {button?.map((sel) => {
              if (sel.show()) {
                return (
                  <div key={`${el.key}_${sel.key}`}>
                    <IconButton
                      className="glx-p-2"
                      onClick={() => sel.onClick()}
                      toolTip={{
                        text: sel.tooltip,
                        position: 'left',
                      }}
                    >
                      {sel.content}
                    </IconButton>
                  </div>
                );
              }

              return null;
            })}
            {menu ? (
              <div>
                <DropDownIconMenu left menu={menu} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {image ? (
        <div
          className="glx-notification--image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ) : null}
      {!image && fallbackIcon ? (
        <Grid
          flexR
          center
          className="glx-notification--image"
          style={{
            backgroundColor: fallbackIcon.color,
          }}
        >
          {getIcon(fallbackIcon.icon)({ size: ISize.MD })}
        </Grid>
      ) : null}
    </div>
  );
};
NotificationElement.defaultProps = {
  onClick: undefined,
  button: undefined,
  icon: undefined,
  image: undefined,
  menu: undefined,
  color: undefined,
  fallbackIcon: undefined,
};

export { NotificationElement };
