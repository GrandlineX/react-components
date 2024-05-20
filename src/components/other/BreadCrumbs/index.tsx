import React from 'react';
import { IOChevronForward } from '@grandlinex/react-icons';
import { cnx } from '../../../util';

export type IBreadcrumb = {
  key: string;
  name: string;
  active?: boolean;
};
export type BreadcrumbsProps<T extends IBreadcrumb = IBreadcrumb> = {
  items: T[];
  onClick?: (item: T) => void;
};
export function Breadcrumbs<T extends IBreadcrumb = IBreadcrumb>({
  items,
  onClick,
}: BreadcrumbsProps<T>) {
  return (
    <div className="glx-default-text glx-flex-r glx-flex-g-4">
      {items.map((e, index) => (
        <>
          <div
            key={e.key}
            className={cnx([!!e.active, 'glx-underline glx-pointer'])}
            onClick={e.active ? () => onClick?.(e) : undefined}
          >
            {e.name}
          </div>{' '}
          {index < items.length - 1 ? (
            <div key={`${e.key}_arrow`}>
              <IOChevronForward />
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
}

Breadcrumbs.defaultProps = {
  onClick: undefined,
};
