import reverseString from './reverseString';

test('"test" becomes "tset"', () => {
  expect(reverseString('test')).toBe('tset');
});

test('case of each character is maintained', () => {
  expect(reverseString('TeSt')).toBe('tSeT');
});

test('works with spaces and special characters', () => {
  expect(reverseString('This is a TEST!')).toBe('!TSET a si sihT');
});

test('empty string returns itself', () => {
  expect(reverseString('')).toBe('');
});
