import analyzeArray from "./analyzeArray";

test('returned object has all 4 properties', () => {
  expect(analyzeArray([1])).toMatchObject({
    average: expect.any(Number),
    min: expect.any(Number),
    max: expect.any(Number),
    length: expect.any(Number)
  });
});

test('computed average is correct', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test('computed min is correct', () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test('computed max is correct', () => {
  expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test('computed length is correct', () => {
  expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});

test('returns error on non array input', () => {
  expect(analyzeArray('test')).toBe('Input is not an array!');
});

test('returns error on empty array', () => {
  expect(analyzeArray([])).toBe('Inputted array is empty!');
});

test('returns error on if array has non number value', () => {
  expect(analyzeArray([1,8,3,'four',2,6])).toBe('Array must only contain numbers!');
});
