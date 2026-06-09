const { modulo, power, squareRoot } = require('../calculator');

describe('Extended calculator functions', () => {
  describe('modulo', () => {
    test('10 % 3 = 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });
    test('modulo by zero throws', () => {
      expect(() => modulo(5, 0)).toThrow('Modulo by zero');
    });
  });

  describe('power', () => {
    test('2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });
    test('power with negative exponent', () => {
      expect(power(2, -1)).toBeCloseTo(0.5);
    });
  });

  describe('squareRoot', () => {
    test('sqrt(9) = 3', () => {
      expect(squareRoot(9)).toBe(3);
    });
    test('sqrt negative throws', () => {
      expect(() => squareRoot(-4)).toThrow('Square root of negative number');
    });
  });
});
