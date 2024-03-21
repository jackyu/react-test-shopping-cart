import { appendZero, pad } from '../number';

describe('appendZero', () => {
  it('should append a zero to a single digit number', () => {
    const number = 5;
    const result = appendZero(number);
    expect(result).toBe('05');
  });

  it('should not append a zero to a double digit number', () => {
    const number = 12;
    const result = appendZero(number);
    expect(result).toBe('12');
  });

  it('should append a zero to zero', () => {
    const number = 0;
    const result = appendZero(number);
    expect(result).toBe('00');
  });

  it('should handle negative numbers correctly', () => {
    const number = -5;
    const result = appendZero(number);
    expect(result).toBe('-05');
  });
});

describe('pad', () => {
  it('should pad a number with zeros', () => {
    const number = 5;
    const width = 3;
    const z = '0';
    const paddedNumber = pad(number, width, z);
    expect(paddedNumber).toBe('005');
  });

  it('should not pad a number if its length is equal to the width', () => {
    const number = 123;
    const width = 3;
    const z = '0';
    const paddedNumber = pad(number, width, z);
    expect(paddedNumber).toBe('123');
  });

  it('should pad a number with any given character', () => {
    const number = 7;
    const width = 5;
    const z = '*';
    const paddedNumber = pad(number, width, z);
    expect(paddedNumber).toBe('****7');
  });

  it('should return the number as a string if no padding character is provided', () => {
    const number = 9;
    const width = 2;
    const z = '';
    const paddedNumber = pad(number, width, z);
    expect(paddedNumber).toBe('09');
  });
});
