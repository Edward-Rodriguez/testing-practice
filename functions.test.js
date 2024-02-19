const myModule = require('./functions');

const { capatilize, reverseString, Calculator } = myModule;

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

test('Add two numbers', () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test('Add two floating point numbers', () => {
  expect(Calculator.add(0.01, 0.02)).toBeCloseTo(0.03);
});

test('Add integer and float', () => {
  expect(Calculator.add(1, 0.02)).toBeCloseTo(1.02);
});

test('Add integer and alpha-string', () => {
  expect(Calculator.add(1, 'abc')).toBeNaN();
});
