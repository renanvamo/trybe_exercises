let angleA = -30;
let angleB = 60;
let angleC = 90;

/* Exercicio 5 */
if (typeof(angleA) === 'number' && typeof(angleB) === 'number' && typeof(angleC) === 'number') {
  if (angleA < 0 || angleB < 0 || angleC < 0) { 
    console.log('Favor inserir apenas valores positivos para os ângulos')
  } else if (angleA + angleB + angleC === 180) {
    console.log('Os 3 ângulos formam um triângulo');
  } else {
    console.log('Os 3 ângulos não formam um triângulo');
  }     
} else {
  console.log('Um dos valores não é um número, coloque outro valor');
}


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

/* Exercicio 3
if (numA > numB && numA > numC) {
  console.log(`${numA} é maior que ${numB} e ${numC}`);
} else if (numB > numA && numB > numC) {
  console.log(`${numB} é maior que ${numA} e ${numC}`);
} else if (numC > numA && numC > numB) {
  console.log(`${numC} é maior que ${numA} e ${numB}`);
} else {
  console.log('Não há um valor maior que os outros dois ao mesmo tempo');
}*/

/* Exercicio 4 
if (numA > 0) {
  console.log('Positive');
} else if (numA < 0) {
  console.log('Negative');
} else {
  console.log('0');
}*/

