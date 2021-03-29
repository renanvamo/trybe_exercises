// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let myArray = [2, 3, 6, 7, 10, 1];

function verifyHigherNumber(array) {
  let higherNumber = array[0];
    for (let index in array) {
      if (array[index] > higherNumber) {
      higherNumber = array[index];
    }
  }
  return array.indexOf(higherNumber);
}
console.log(verifyHigherNumber(myArray));