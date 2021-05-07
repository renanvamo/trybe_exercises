// const greetPeople = (people) => {
//   let greeting = 'Hello ';

//   for (const person in people) {
//     people[person] = greeting + people[person];
//   }
//   return people;
// };

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
// const assert = require('assert');
// assert.deepStrictEqual(greetPeople(parameter), result)

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let count = 0;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      count += 1;
      results.push(count);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const assert = require('assert')
assert.strictEqual(removeVowels(parameter), result)