import { IWrapperFull } from '@grandlinex/react-icons';
import React from 'react';

export default function () {
  const cc = IWrapperFull() as any;
  const keys = Object.keys(cc);

  return (
    <div className="glx-flex-row glx-flex-wrap glx-flex-g-8 glx-flex-center glx-p-4">
      {keys.map((key) => {
        const Ac = cc[key];
        return (
          <div
            key={key}
            style={{ maxWidth: '260px' }}
            className="glx-flex-column glx-flex-g-8 "
          >
            <div className="glx-text-center">
              <Ac width={64} height={64} />
            </div>
            <div className="glx-text-center">{key}</div>
          </div>
        );
      })}
    </div>
  );
}
