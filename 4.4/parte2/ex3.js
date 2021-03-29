// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

myArray = [2, 4, 6, 7, 10, 0, -3];

function indexOfSmallerNumber(array) {
  let smallerNumber = array[0];
    for (let index in array) {
      if (array[index] < smallerNumber) {
      smallerNumber = array[index];
    }
  }
  return array.indexOf(smallerNumber);
}
console.log(indexOfSmallerNumber(myArray));