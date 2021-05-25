const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

function filterPeople(array) {
  return array.filter(({nationality, bornIn}) => nationality === 'Australian' && bornIn > 1900 && bornIn < 2001); 
}

const filteredPeople = filterPeople(people);

// console.log(filteredPeople[1]);
// console.log(filteredPeople[0]);
// console.log(filterPeople(people));

assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });