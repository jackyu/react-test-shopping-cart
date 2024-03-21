export function appendZero(num: number): string {
  const sign = num < 0 ? '-' : '';

  return `${sign}${`0${Math.abs(num)}`.slice(-2)}`;
}

export function pad(n: number, width: number, z: string): string {
  const num = `${n}`;
  const fill = z || '0';

  return num.length >= width ? num : new Array(width - num.length + 1).join(fill) + num;
}