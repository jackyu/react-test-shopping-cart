// FILEPATH: /Users/jack/Webs/interview/iscoollab-react-test/src/utils/__tests__/date.test.ts

import { timestampFormat } from '../date';

describe('timestampFormat', () => {
  it('should return null if no timestamp is provided', () => {
    const result = timestampFormat(undefined);
    expect(result).toBe(null);
  });

  it('should return date and time in the format YYYYMMDD MMSS', () => {
    const timestamp = new Date('2022-01-01T00:00:00Z').getTime();
    const result = timestampFormat(timestamp, 'YYYYMMDD MMSS', '-');
    expect(result).toBe('2022-01-01 08:00');
  });

  it('should return date in the format YYYYMMDD', () => {
    const timestamp = new Date('2022-01-01T00:00:00Z').getTime();
    const result = timestampFormat(timestamp, 'YYYYMMDD', '-');
    expect(result).toBe('2022-01-01');
  });

  it('should return date in the format MMDD', () => {
    const timestamp = new Date('2022-01-01T00:00:00Z').getTime();
    const result = timestampFormat(timestamp, 'MMDD', '-');
    expect(result).toBe('01-01');
  });

  it('should return time in the format MMSS', () => {
    const timestamp = new Date('2022-01-01T00:00:00Z').getTime();
    const result = timestampFormat(timestamp, 'MMSS');
    expect(result).toBe('08:00');
  });

  it('should return time if the timestamp is today and no format is provided', () => {
    const timestamp = new Date().getTime();
    const result = timestampFormat(timestamp);
    const expectedTime = new Date(timestamp + 8 * 60 * 60 * 1000).toISOString().slice(11, 16);
    expect(result).toBe(expectedTime);
  });

  it('should return date in the format MM/DD if the timestamp is not today and no format is provided', () => {
    const timestamp = new Date('2022-01-01T00:00:00Z').getTime();
    const result = timestampFormat(timestamp);
    expect(result).toBe('01/01');
  });
});