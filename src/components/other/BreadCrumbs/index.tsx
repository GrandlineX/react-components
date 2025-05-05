import React from 'react';
import { IOChevronForward } from '@grandlinex/react-icons';
import { cnx } from '../../../util';
import { Grid } from '../../Grid/Grid';

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
    <Grid flex flexR vCenter gap={4} className="glx-default-text">
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
    </Grid>
  );
}
