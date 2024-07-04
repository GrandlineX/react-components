import React, { useMemo } from 'react';
import { InputOptionItem } from '../FormTypes';

export default function FormDropdown({
  className,
  value,
  autoFocus,
  required,
  disabled,
  onChange,
  items,
}: {
  className: string;
  value: string;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  items: InputOptionItem[];
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  const haveGroup = useMemo(
    () => items.some((el) => !!el.meta?.group),
    [items],
  );
  const group = useMemo(() => {
    if (!haveGroup) {
      return null;
    }
    const map = new Map<string, InputOptionItem[]>();
    items.forEach((el) => {
      const g = el.meta?.group ?? 'default';
      if (!map.has(g)) {
        map.set(g, []);
      }
      map.get(g)!.push(el);
    });
    return Array.from(map.entries());
  }, [haveGroup, items]);

  if (group) {
    return (
      <select
        className={className}
        value={value}
        autoFocus={autoFocus}
        required={required}
        disabled={disabled}
        onChange={onChange}
      >
        {group.map(([key, val]) => (
          <optgroup key={key} label={key}>
            {val?.map((el) => (
              <option key={el.key} value={el.key} disabled={el.disabled}>
                {el.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    );
  }

  return (
    <select
      className={className}
      value={value}
      autoFocus={autoFocus}
      required={required}
      disabled={disabled}
      onChange={onChange}
    >
      {items.map((el) => (
        <option key={el.key} value={el.key} disabled={el.disabled}>
          {el.name}
        </option>
      ))}
    </select>
  );
}
