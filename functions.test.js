const myModule = require('./functions');

const { capatilize, reverseString, Calculator, ceaserCipher } = myModule;

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

test('Add two non-numeric strings', () => {
  expect(Calculator.add('!@#$', 'abc')).toBeNaN();
});

test('Subtract two numbers', () => {
  expect(Calculator.subtract(100, 90)).toBe(10);
});

test('Subtract two floating point numbers', () => {
  expect(Calculator.subtract(15.4, 90.000003)).toBe(-74.600003);
});

test('Subtract integer and float', () => {
  expect(Calculator.subtract(15, 0.005)).toBe(14.995);
});

test('Subtract integer alpha-string', () => {
  expect(Calculator.subtract(15, 'abc')).toBeNaN();
});

test('Subtract two non-numeric strings', () => {
  expect(Calculator.subtract('!@#$%', 'abc')).toBeNaN();
});

test('divide two integers', () => {
  expect(Calculator.divide(10, 3)).toBeCloseTo(3.333);
});

test('divide an integer and a float', () => {
  expect(Calculator.divide(10, 3.3)).toBeCloseTo(3.03);
});

test('divide two floating point numbers', () => {
  expect(Calculator.divide(1.5, 3.5)).toBeCloseTo(0.4286);
});

test('divide two non-numeric values', () => {
  expect(Calculator.divide('!@#$', 'abc')).toBeNaN();
});

test('multiple two integers', () => {
  expect(Calculator.multiply(10, 3)).toBe(30);
});

test('multiply an integer and a float', () => {
  expect(Calculator.multiply(10, 3.3)).toBeCloseTo(33);
});

test('multiply two floating point numbers', () => {
  expect(Calculator.multiply(1.5, 3.5)).toBeCloseTo(5.25);
});

test('multiply two non-numeric values', () => {
  expect(Calculator.multiply('!@#$', 'abc')).toBeNaN();
});

test('cipher lowercase string w/ shift factor 4', () => {
  expect(ceaserCipher('abcd', 4)).toBe('efgh');
});

test('cipher string w/ upper & lower case chars, shift factor 3', () => {
  expect(ceaserCipher('aBcDe', 3)).toBe('dEfGh');
});

test('cipher string w/ punctuations, shift factor 2', () => {
  expect(ceaserCipher('?aBcDe!', 2)).toBe('AcDeFh#');
});

test('cipher string w/ space, shift factor 5', () => {
  expect(ceaserCipher('Hello World!', 5)).toBe('Mjqqt%\\twqi&');
});

test('cipher string alphabet wrap around, shift factor 10', () => {
  expect(ceaserCipher('xyz', 10)).toBe('Mjqqt%\\twqi&');
});
