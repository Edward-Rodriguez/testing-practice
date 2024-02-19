const myModule = require('./functions');

const { capatilize, reverseString } = myModule;

test('Capitalize', () => {
  expect(capatilize('odin')).toBe('Odin');
});

test('Capitalize leading spaces', () => {
  expect(capatilize('  apple')).toBe('Apple');
});

test('Capitalize trailing spaces', () => {
  expect(capatilize('apple   ')).toBe('Apple');
});

test('Capitalize number', () => {
  expect(capatilize('1aabc')).toBe('1aabc');
});

test('Reverse string', () => {
  expect(reverseString('odin')).toBe('nido');
});

test('Reverse string with multiple words', () => {
  expect(reverseString('odin project')).toBe('tcejorp nido');
});

test('Reverse string spaces at both ends', () => {
  expect(reverseString('  moon shine  ')).toBe('enihs noom');
});
