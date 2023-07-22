import React, { PropsWithChildren } from 'react';
import { IOCopyOutline } from '@grandlinex/react-icons';
import { cnx, copyToClipboard } from '../../util';
import { Grid } from '../../components';
import { StyleMeta, StyleMetaProp, StyleTableProps } from './lib';
import styleMap from './styles';

function findStlyeMeta(className: string) {
  const keys = Object.keys(styleMap);
  for (const key of keys) {
    const meta = styleMap[key as keyof typeof styleMap];
    const found = meta.find((m) => m.className === className);
    if (found) {
      return found;
    }
  }
  return null;
}
function resolveStyleMetaProps(data: StyleMeta, depth?: number): StyleMetaProp {
  if (depth && depth > 100) {
    throw new Error('Too many levels of inheritance');
  }
  const { extend, properties } = data;
  if (extend) {
    const ext = new Map<string, string>();
    extend.forEach((ex) => {
      const sm = findStlyeMeta(ex);
      if (sm) {
        resolveStyleMetaProps(sm, (depth || 0) + 1).forEach(([name, value]) =>
          ext.set(name, value),
        );
      }
    });
    properties.forEach(([name, value]) => ext.set(name, value));
    return Array.from(ext.entries());
  }
  return properties;
}

export function StyledCode({ children }: PropsWithChildren) {
  return <code className={cnx('styled-class')}>{children}</code>;
}

export function StyleTable({ data, showDescription }: StyleTableProps) {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Class</th>
          <th>Properties</th>
          {showDescription ? <th>Description</th> : null}
        </tr>
      </thead>

      <tbody>
        {data.map((cur) => (
          <tr>
            <td>
              <Grid flex flexR vCenter>
                <StyledCode>{cur.className}</StyledCode>
                <div
                  className="styled-button"
                  onClick={() => copyToClipboard(cur.className)}
                >
                  <IOCopyOutline />
                </div>
              </Grid>
            </td>
            <td>
              <div>
                {resolveStyleMetaProps(cur).map(([name, value]) => (
                  <div>
                    <code className="styled-name">{name}</code>
                    <code>: </code>
                    <code className="styled-value">{value}</code>
                  </div>
                ))}
              </div>
            </td>
            {showDescription && cur.description ? (
              <td>{cur.description}</td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
StyleTable.defaultProps = {
  showDescription: false,
};
