// expandedForm.test.js
const expandedForm = require('./expandedForm');

test('expandedForm of 34', () => {
  expect(expandedForm(34)).toBe('30 + 4');
});

test('expandedForm of 70304', () => {
  expect(expandedForm(70304)).toBe('70000 + 300 + 4');
});

test('expandedForm of 420', () => {
  expect(expandedForm(420)).toBe('400 + 20');
});
