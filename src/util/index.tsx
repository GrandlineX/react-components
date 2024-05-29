import React, { ReactNode, useMemo } from 'react';
import md5 from './MD5';
import LocalStorage from './LocalStorage';
import copyToClipboard from './Clipboard';
import getSaveWindow from './BuildHelper';

export * from './GLang';
export * from './MainContext';
export * from './LocalStorage';

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export type CnxInputCondition = [boolean, string, string?];
export type CnxInput = string | undefined | null | CnxInputCondition;
export function cnx(...classes: CnxInput[]): string | undefined {
  const del: string[] = [];

  classes.forEach((sel) => {
    if (typeof sel === 'string') {
      del.push(sel);
    }
    if (Array.isArray(sel)) {
      const [val, cl, cd] = sel;
      if (val) {
        del.push(cl);
      } else if (!val && !!cd) {
        del.push(cd);
      }
    }
  });

  const out = del.join(' ');
  if (del.length === 0 || out === '') {
    return undefined;
  }
  return out;
}

export function useCnx(...classes: CnxInput[]): string | undefined {
  return useMemo(() => cnx(...classes), [classes]);
}

function sGen(inp: string) {
  return inp.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export function uuid() {
  return sGen('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
}
export function sid() {
  return sGen('xxxx-4xxx-yxxx');
}

export function trimmer(inp: string): string {
  if (inp.length > 20) {
    return `${inp.substring(0, 20)}...`;
  }
  return inp;
}

export function getDocumentMeta(key: string) {
  const el = document
    .querySelector(`meta[name='${key}']`)
    ?.getAttribute('content');
  if (!el || el === '') {
    return null;
  }
  return el;
}

export const getGravatarUrl = (email: string) => {
  const hash = md5(email);
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};
export type ReactFC<A> = React.FC<React.PropsWithChildren<A>>;

function loop<X = ReactNode>(
  count: number,
  fc: (x: number) => X,
  start = 0,
  step = 1,
) {
  if (step === 0) throw new Error('Step cannot be 0');
  const arr: X[] = [];
  for (let i = start; i < count; i += step) {
    arr.push(fc(i));
  }
  return arr;
}

export { md5, copyToClipboard, sGen, loop, getSaveWindow, LocalStorage };
