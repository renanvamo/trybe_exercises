// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
let number = 3

function sumOfAllValuesUntil(testNumber) {
  let sumOfAllValues = 0
  for (let index = testNumber; index > 0; index -= 1) {
    sumOfAllValues += index;
  }
   return sumOfAllValues;
};


console.log(sumOfAllValuesUntil(number));