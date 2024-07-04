import React, { useMemo, useState } from 'react';
import Grid from '../../Grid/Grid';
import { Button } from '../../button/Button';
import { useUIContext } from '../../../util';
import { IconButton } from '../../button/IconButton';

export type ImageSelItemProps = {
  key: string;
  url?: string;
  element?: React.ReactNode;
  title?: string;
};
export type ImageSelProps = {
  items: ImageSelItemProps[];
  selected?: string;
  onChange?: (item: ImageSelItemProps | null) => void;
  maxStep?: number;
  imgSize?: {
    width: number;
    height: number;
  };
  extended?: boolean;
};
export default function ImageSel({
  items,
  selected,
  maxStep,
  onChange,
  extended,
  imgSize = { width: 300, height: 200 },
}: Readonly<ImageSelProps>) {
  const t = useUIContext();
  const step = useMemo(() => maxStep ?? 4, [maxStep]);
  const [extend, setExtend] = useState<boolean>(extended ?? !selected);
  const [max, setMax] = useState<number>(step);
  const [selItem, setSelItem] = useState<string | null>(selected ?? null);
  const [search, setSearch] = useState<string>('');
  const sel = useMemo(
    () => items.find((e) => e.key === selItem) ?? null,
    [selItem, items],
  );

  const filtered = useMemo(() => {
    if (search === '') {
      return items;
    }
    const low = search.toLowerCase();
    return items.filter(
      (e) =>
        e.title?.toLowerCase()?.includes(low) ||
        e.key.toLowerCase().includes(low),
    );
  }, [search, items]);

  return (
    <Grid flex flexC className="glx-default-text" gap={8}>
      <Grid flex flexR vCenter gap={4}>
        <span style={{ fontSize: '14pt' }}>
          {t.translation.get('glx.form.field.selection')}
          {': '}
        </span>
        <input
          type="text"
          value={
            sel?.title ?? sel?.key ?? t.translation.get('glx.form.field.empty')
          }
          disabled
        />
        <IconButton
          style={{ borderBottom: 'unset !important' }}
          icon={extend ? 'IOSave' : 'IOPencil'}
          onClick={() => setExtend(!extend)}
        />
      </Grid>

      {extend && (
        <>
          <Grid flex flexR flexWrap hCenter gap={8}>
            <input
              placeholder={t.translation.get('glx.form.field.search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>
          <Grid flex flexR flexWrap hCenter gap={8}>
            {filtered.slice(0, max).map((i) => (
              <Grid
                flex
                flexC
                key={i.key}
                className={[
                  [i.key === selItem, 'glx-img-active'],
                  'glx-img-sel',
                  'glx-no-select',
                ]}
                onClick={() => {
                  setSelItem(i.key);
                  onChange?.(i);
                }}
                onDoubleClick={() => {
                  setExtend(false);
                }}
              >
                {i.element || (
                  <img
                    loading="lazy"
                    draggable={false}
                    alt={i.title ?? i.key}
                    src={i.url}
                    width={imgSize?.width}
                    height={imgSize?.height}
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                )}
                <div>{i.title ?? i.key}</div>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      {extend && items.length > max && (
        <Grid flex hCenter>
          <Button onClick={() => setMax(max + step)}>
            {t.translation.get('glx.form.more')}
          </Button>
          <Button onClick={() => setMax(items.length)}>
            {t.translation.get('glx.form.show.all')}
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
