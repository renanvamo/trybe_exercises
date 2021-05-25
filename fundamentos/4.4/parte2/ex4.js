// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let myArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];




function verifyBiggerName(array) {
  let countWord = 0;
  let biggerName = array[0];
  for (let index in array) {
    if (myArray[index].length > biggerName.length) {
      biggerName = array[index];
    }
  }
  return biggerName
};

console.log(verifyBiggerName(myArray));