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
  iconSize?: number;
};
export function Breadcrumbs<T extends IBreadcrumb = IBreadcrumb>({
  items,
  onClick,
  iconSize,
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
            <div
              key={`${e.key}_arrow`}
              className="glx-flex glx-flex-r glx-flex-center glx-h-full"
            >
              <IOChevronForward size={iconSize} />
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
}
