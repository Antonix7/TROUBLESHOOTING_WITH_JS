// romanToDecimal.test.js
const romanToDecimal = require('./romanToDecimal');

test('romanToDecimal of XXXIV', () => {
  expect(romanToDecimal('XXXIV')).toBe(34);
});

test('romanToDecimal of LXXIII', () => {
  expect(romanToDecimal('LXXIII')).toBe(73);
});

test('romanToDecimal of CDXCIV', () => {
  expect(romanToDecimal('CDXCIV')).toBe(494);
});