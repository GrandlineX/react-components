import React from 'react';
import { IOChevronForward } from '@grandlinex/react-icons';
import { cnx } from '../../../util';

export type IBreadcrumb = {
  name: string;
  action?: () => void;
};
export function Breadcrumbs(props: { items: IBreadcrumb[] }) {
  const { items } = props;
  return (
    <div className="glx-default-text glx-flex-r glx-flex-g-4">
      {items.map((e, index) => (
        <>
          <div
            className={cnx([!!e.action, 'glx-underline glx-pointer'])}
            onClick={() => {
              e.action?.();
            }}
          >
            {e.name}
          </div>{' '}
          {index < items.length - 1 ? (
            <div>
              <IOChevronForward />
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
}
