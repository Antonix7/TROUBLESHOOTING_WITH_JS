// romanToDecimal.test.js
const expandedForm = require('./expandedForm');

test('romanToDecimal of XXXIV', () => {
  expect(expandedForm(XXXIV)).toBe('34');
});

test('romanToDecimal of LXXIII', () => {
  expect(expandedForm(LXXIII)).toBe('73');
});

test('romanToDecimal of CDXCIV', () => {
  expect(expandedForm(CDXCIV)).toBe('494');
});