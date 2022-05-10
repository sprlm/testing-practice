import calculator from './calculator';

test('calculator has all 4 operations', () => {
  expect(calculator).toMatchObject({
    add: expect.any(Function),
    subtract: expect.any(Function),
    multiply: expect.any(Function),
    divide: expect.any(Function)
  });
});

test('1+1 returns 2', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('non number input when adding returns error', () => {
  expect(calculator.add('one', 'two')).toBe('Invalid input!');
});

test('3-2 returns 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('non number input when subtracting returns error', () => {
  expect(calculator.subtract('one', 'two')).toBe('Invalid input!');
});

test('3*4 returns 12', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('non number input when multiplying returns error', () => {
  expect(calculator.multiply('one', 'two')).toBe('Invalid input!');
});

test('3/2 returns 1.5', () => {
  expect(calculator.divide(3, 2)).toBe(1.5);
});

test('non number input when dividing returns error', () => {
  expect(calculator.divide('one', 'two')).toBe('Invalid input!');
});

test('dividing by 0 returns error', () => {
  expect(calculator.divide(3, 0)).toBe("Can't divide by zero!");
});
