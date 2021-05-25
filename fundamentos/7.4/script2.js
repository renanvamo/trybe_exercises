// const assert = require('assert');
// escreva a função addOne aqui


// let addOne = (array) => {
//   for (let index in array) {
//     array[index] = array[index] + 1
//   }
// }
// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

// escreva a função wordLengths aqui

// const wordLengths = (words) => {
//   const lengths = []
//   for (let index in words) {
//     lengths.push(words[index].length)
//   }
//   return lengths
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// const assert = require('assert');
// // escreva a função sumAllNumbers aqui

// const sumAllNumbers = (array) => {
//   let sum = 0
//   for (let index in array) {
//     sum += array[index] 
//   }
//   return sum
// }

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);

const assert = require('assert');
// escreva a função findTheNeedle aqui

const findTheNeedle = (array, word) => {
  if (array.includes(word)) {
    return array.indexOf(word);
  }
  return -1
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);