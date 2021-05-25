const sumOfNumbers = require('./script.js');

test('sums two values', () => {
  expect(sumOfNumbers(2, 3)).toEqual(5);
});