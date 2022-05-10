import caesarCipher from "./caesarCipher";

test('"abcde" becomes "bcdef" with shift of 1', () => {
  expect(caesarCipher('abcde', 1)).toBe('bcdef');
});

test('"bcdef" becomes "abcde" with shift of -1', () => {
  expect(caesarCipher('bcdef', -1)).toBe('abcde');
});

test('"ABCDE" becomes "BCDEF" with shift of 1', () => {
  expect(caesarCipher('ABCDE', 1)).toBe('BCDEF');
});

test('non-letter characters are not changed', () => {
  expect(caesarCipher('Hard test!', 1)).toBe('Ibse uftu!');
});

test('cipher wraps from z to a', () => {
  expect(caesarCipher('zZ', 1)).toBe('aA');
});

test('cipher wraps from a to z', () => {
  expect(caesarCipher('aA', -1)).toBe('zZ');
});

test('shift value of 26 results in no change', () => {
  expect(caesarCipher('Test', 26)).toBe('Test');
});

test('can handle shift values > 26', () => {
  expect(caesarCipher('Aa', 53)).toBe('Bb');
});

test('can handle shift values < -26', () => {
  expect(caesarCipher('Bb', -53)).toBe('Aa');
});
