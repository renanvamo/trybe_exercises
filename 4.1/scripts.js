let numA = 4;
let numB = 2;

/* Exercício 1
console.log(`A soma de ${numA} + ${numB} é igual a ${numA + numB}`);
console.log(`A subtração de ${numA} - ${numB} é igual a ${numA - numB}`);
console.log(`A multiplicação de ${numA} * ${numB} é igual a ${numA * numB}`);
console.log(`A divisão de ${numA} / ${numB} é igual a ${numA / numB}`);
console.log(`O módulo de ${numA} % ${numB} é igual a ${numA % numB}`);
*/

if (numA > numB) {
  console.log(`${numA} é maior que ${numB}`);
} else if (numB > numA) {
  console.log(`${numB} é maior que ${numA}`);
} else if (numA === numB){
  console.log(`${numA} é igual a ${numB}`);
} 