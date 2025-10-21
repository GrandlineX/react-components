export type ClockType = {
  s: number | string;
  m: number | string;
  h: number | string;
};

export function pad(num: number | string): string {
  if (typeof num === 'string') {
    return num;
  }
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}
