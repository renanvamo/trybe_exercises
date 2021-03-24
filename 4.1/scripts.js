let numA = 10;
let numB = 9;
let numC = 6;

/* Exercício 1
console.log(`A soma de ${numA} + ${numB} é igual a ${numA + numB}`);
console.log(`A subtração de ${numA} - ${numB} é igual a ${numA - numB}`);
console.log(`A multiplicação de ${numA} * ${numB} é igual a ${numA * numB}`);
console.log(`A divisão de ${numA} / ${numB} é igual a ${numA / numB}`);
console.log(`O módulo de ${numA} % ${numB} é igual a ${numA % numB}`);
*/

/* Exercício 2
if (numA > numB) {
  console.log(`${numA} é maior que ${numB}`);
} else if (numB > numA) {
  console.log(`${numB} é maior que ${numA}`);
} else if (numA === numB){
  console.log(`${numA} é igual a ${numB}`);
} 
*/

/* Exercicio 3*/
if (numA > numB && numA > numC) {
  console.log(`${numA} é maior que ${numB} e ${numC}`);
} else if (numB > numA && numB > numC) {
  console.log(`${numB} é maior que ${numA} e ${numC}`);
} else if (numC > numA && numC > numB) {
  console.log(`${numC} é maior que ${numA} e ${numB}`);
} else {
  console.log('Não há um valor maior que os outros dois ao mesmo tempo');
}



