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
  expect(Calculator.multiply(10, 3)).toBeCloseTo(3.333);
});

test('multiply an integer and a float', () => {
  expect(Calculator.multiply(10, 3.3)).toBeCloseTo(3.03);
});

test('multiply two floating point numbers', () => {
  expect(Calculator.multiply(1.5, 3.5)).toBeCloseTo(0.4286);
});

test('multiply two non-numeric values', () => {
  expect(Calculator.multiply('!@#$', 'abc')).toBeNaN();
});
