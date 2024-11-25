import React, { useMemo } from 'react';
import { getIcon } from '@grandlinex/react-icons';
import { InputOptionItem } from '../FormTypes';
import { useFormElContext } from '../FormElement';

export default function FormDropdown({
  className,
  value,
  autoFocus,
  required,
  disabled,
  onChange,
  items,
  onBlur,
  onFocus,
}: {
  className?: string;
  value: string;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  items: InputOptionItem[];
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}) {
  const field = useFormElContext();
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
        onFocus={() => {
          onFocus?.();
          field.setFocus(true);
        }}
        onBlur={() => {
          onBlur?.();
          field.setFocus(false);
        }}
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
      onFocus={() => {
        onFocus?.();
      }}
      onBlur={() => {
        onBlur?.();
      }}
    >
      {items.map((el) => (
        <option key={el.key} value={el.key} disabled={el.disabled}>
          {el.name}
        </option>
      ))}
    </select>
  );
}
