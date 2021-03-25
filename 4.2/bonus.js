


/* Exercicio 1

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
console.log(array);
*/

/* Exercicio 2

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] > array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
console.log(array);
*/

/* Exercicio 3*/

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
let arrayModel = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

for (let index = 0; index < array.length; index += 1) {
  if (index === array.length -1) {
    newArray.push(array[index] * 2);
  } else {
    newArray.push(array[index] * array[index + 1]);
  }
}

console.log(newArray);
console.log(arrayModel);
