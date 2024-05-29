import React from 'react';
import { IUser } from './types';
import Persona from '../Persona/Persona';
import { getGravatarUrl } from '../../../util';

function UserBadge(prop: { item: IUser; size?: string; small?: boolean }) {
  const { item, small, size } = prop;
  const l = [];
  if (item.firstName) {
    l.push(item.firstName.charAt(0));
  }
  if (item.lastName) {
    l.push(item.lastName.charAt(0));
  }
  if (l.length === 0) {
    l.push('*');
  }

  let { img } = item;
  if (item.gravatarEmail) {
    img = getGravatarUrl(item.gravatarEmail);
  }

  return (
    <div className="glx-default-text glx-flex glx-flex-r glx-flex-g-6 glx-flex-v-center">
      <Persona text={l.join(' ')} small={small} img={img} size={size} />
      <div className="glx-flex glx-flex-c">
        <div>
          {item.firstName} {item.lastName}
        </div>
        {item.subTitle ? <div>{item.subTitle}</div> : null}
      </div>
    </div>
  );
}
export default UserBadge;
