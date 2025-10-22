import React from 'react';
import { Grid } from '../Grid/Grid';
import { useCnx } from '../../util';

export default function AvatarStack({
  url,
  className,
  onClick,
}: {
  className?: string;
  onClick?: (
    index: number,
    ev: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => void;
  url: string[];
}) {
  const cn = useCnx([onClick !== undefined, 'glx-pointer']);
  return (
    <Grid flex className={['glx-avatar-stack', className]} flexR hCenter>
      {url.map((e, i) => (
        <img
          className={cn}
          loading="lazy"
          alt={`av_${i}`}
          src={e}
          onClick={(ev) => {
            if (onClick) onClick(i, ev);
          }}
        />
      ))}
    </Grid>
  );
}
