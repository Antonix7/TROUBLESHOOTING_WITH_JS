// simplePigLatin.test.js
const simplePigLatin = require('./simplePigLatin');

test('result of "Pig latin is cool"', () => {
  expect(simplePigLatin("Pig latin is cool")).toBe('igPay atinlay siay oolcay');
});

test('result of "Hello world !"', () => {
  expect(simplePigLatin("Hello world !")).toBe('elloHay orldway !');
});