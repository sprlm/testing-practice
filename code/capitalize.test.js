import capitalize from './capitalize';

test('"test" becomes "Test"', () => {
  expect(capitalize('test')).toBe('Test');
});

test('"TEST" becomes "TEST"', () => {
  expect(capitalize('TEST')).toBe('TEST');
});

test('empty string returns itself', () => {
  expect(capitalize('')).toBe('');
});

test('does not affect string with number as first character', () => {
  expect(capitalize('1test')).toBe('1test');
});

test('does not affect string with special character as first character', () => {
  expect(capitalize('!test')).toBe('!test');
});
