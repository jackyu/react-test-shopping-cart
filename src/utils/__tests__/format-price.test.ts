import { formatCurrency } from './format-price';

describe('formatCurrency', () => {
  it('should format the number with commas', () => {
    const number = 1000000;
    const formattedNumber = formatCurrency(number);
    expect(formattedNumber).toBe('1,000,000');
  });

  it('should not format numbers less than 1000', () => {
    const number = 999;
    const formattedNumber = formatCurrency(number);
    expect(formattedNumber).toBe('999');
  });

  it('should handle decimal numbers', () => {
    const number = 1234.56;
    const formattedNumber = formatCurrency(number);
    expect(formattedNumber).toBe('1,234.56');
  });
});