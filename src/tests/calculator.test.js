const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator functions', () => {
  describe('addition', () => {
    test('2 + 3 = 5 (image example)', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds negative and positive numbers', () => {
      expect(add(-1, 4)).toBe(3);
    });
  });

  describe('subtraction', () => {
    test('10 - 4 = 6 (image example)', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('subtract resulting in negative', () => {
      expect(subtract(3, 7)).toBe(-4);
    });
  });

  describe('multiplication', () => {
    test('45 * 2 = 90 (image example)', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe('division', () => {
    test('20 / 5 = 4 (image example)', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('division producing float', () => {
      expect(divide(7, 2)).toBeCloseTo(3.5);
    });

    test('division by zero throws', () => {
      expect(() => divide(1, 0)).toThrow('Division by zero');
    });
  });
});

describe('extended operations', () => {
  test('modulo 5 % 2 = 1 (image example)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero');
  });

  test('power 2 ^ 3 = 8 (image example)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('squareRoot sqrt(16) = 4 (image example)', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot negative throws', () => {
    expect(() => squareRoot(-9)).toThrow('Square root of negative number');
  });
});

describe('extended operations', () => {
  test('modulo 5 % 2 = 1 (image example)', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero');
  });

  test('power 2 ^ 3 = 8 (image example)', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('squareRoot sqrt(16) = 4 (image example)', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot negative throws', () => {
    expect(() => squareRoot(-9)).toThrow('Square root of negative number');
  });
});
