// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let myArray = [2, 3, 2, 5, 8, 2, 3]; 

function verifyMostRepeatedValue(array) {
  let mostRepeatedValue = array[0]; 
  let numberAppearences = 0;
    for (let index in array) {
    let sameValue = 0; 
    for (let secondIndex in array) { 
      if (myArray[index] === array[secondIndex]) {
        sameValue += 1; 
        if (sameValue > numberAppearences) {
          mostRepeatedValue = array[index];
          numberAppearences = sameValue;
        }
      }
    }
  }
  return mostRepeatedValue;
}

console.log(verifyMostRepeatedValue(myArray));