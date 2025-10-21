import React from 'react';
import { cnx } from '../../../util';

const Persona = (prop: {
  text?: string;
  img?: string;
  color?: string;
  size?: string;
  small?: boolean;
  lazy?: boolean;
}) => {
  const { text, color, size, small, img, lazy } = prop;

  return (
    <div className="glx-persona">
      <div
        style={{
          backgroundColor: color,
          width: size,
          height: size,
        }}
        className={cnx(`glx-persona--center`, [!!small, ' glx-persona--small'])}
      >
        {img ? (
          <img src={img} alt="img" loading={lazy ? 'lazy' : undefined} />
        ) : (
          text
        )}
      </div>
    </div>
  );
};

export default Persona;
