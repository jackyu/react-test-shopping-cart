/**
 * @param timestamp: number
 * @param format: "YYYYMMDD" | "MMDD" | "MMSS"
 * @returns string
 *
 * MMDD: e.g. 1647510533 -> 03/17
 * MMSS: e.g. 1647510533 -> 17:08
 */

type timestampFormatProps = (timestamp?: number, format?: string, delimiter?: string) => string | null;

export const timestampFormat: timestampFormatProps = (timestamp, format = 'YYYYMMDD MMSS', delimiter = '/') => {
  if (!timestamp) return null;

  const msTimestamp = timestamp;
  const offset = 8 * 60 * 60 * 1000;
  const dateISO = new Date(msTimestamp + offset).toISOString();
  const date = dateISO.slice(0, 10);
  const time = dateISO.slice(11, 16);
  const [yy, mm, dd] = date.split('-');

  const now = new Date();
  const todayStart = now.setHours(0, 0, 0, 0);
  const todayEnd = now.setHours(23, 59, 59, 999);
  const isToday = msTimestamp >= todayStart && msTimestamp <= todayEnd;

  switch (format) {
    case 'YYYYMMDD MMSS':
      return `${[yy, mm, dd].join(delimiter)} ${time}`;
    case 'YYYYMMDD':
      return [yy, mm, dd].join(delimiter);
    case 'MMDD':
      return [mm, dd].join(delimiter);
    case 'MMSS':
      return time;
    default:
      return isToday ? time : [mm, dd].join('/');
  }
};