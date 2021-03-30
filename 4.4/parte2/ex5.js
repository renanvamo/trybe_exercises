// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let myArray = [2, 3, 2, 5, 8, 2, 3]; 

function verifyMostRepeatedValue() {
  let mostRepeatedValue = myArray[0]; 
  let numberAppearences = 0;
    for (let index in myArray) {
    let sameValue = 0; 
    for (let secondIndex in myArray) { 
      if (myArray[index] === myArray[secondIndex]) {
        sameValue += 1; 
        if (sameValue > numberAppearences) {
          mostRepeatedValue = myArray[index];
          numberAppearences = sameValue;
        }
      }
    }
  }
  return mostRepeatedValue;
}

console.log(verifyMostRepeatedValue(myArray));