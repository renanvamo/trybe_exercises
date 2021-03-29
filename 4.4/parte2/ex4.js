// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let myArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];




function verifyBiggerName() {
  let countWord = 0;
  let biggerName = myArray[0];
  for (let index in myArray) {
    if (myArray[index].length > biggerName.length) {
      biggerName = myArray[index];
    }
  }
  return biggerName
}

console.log(verifyBiggerName(myArray));