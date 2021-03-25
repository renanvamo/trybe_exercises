/* Exercicio 11 */
let salary = 6570.88;
let inss;
let ir = 0;

if (salary <= 1556.94) {
  inss = salary * 8 / 100;
} else if (salary <= 2594.92 && salary > 1556.94) {
  inss = salary * 9 / 100;
} else if (salary <= 5189.82 && salary > 2594.92) {
  inss = salary * 11 / 100;
} else if (salary > 5189.82) {
  inss = 570.88; 
}
salary -= inss;

if (salary > 4664.68) {
  ir = 27.5 / 100 * salary - 869.36;  
} else if (salary >= 3751.06 && salary <= 4664.68) {
  ir = 22.5 / 100 * salary - 636.13; 
} else if (salary >= 2826.66 && salary < 3751.06) {
  ir = 15 / 100 * salary - 354.80;
} else if (salary >= 1903.99 && salary < 2826.66) {
  ir = 7.5 / 100 * salary - 142.80;
} 
salary -= ir;

console.log(salary.toFixed(2))
console.log(inss.toFixed(2))
console.log(ir.toFixed(2))

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

/* Exercicio 5
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
}*/

/* Exercicio 6 
if (chessPiece.toLowerCase() === 'king') {
  console.log(`${chessPiece} <- One square in any direction`);
} else if (chessPiece.toLowerCase() === 'bishop') {
  console.log(`${chessPiece} <- diagonally any number of squares`);
} else if (chessPiece.toLowerCase() === 'queen') {
  console.log(`${chessPiece} <- diagonally, horizontally, or vertically any number of squares`);
} else if (chessPiece.toLowerCase() === 'rook') {
  console.log(`${chessPiece} <- horizontally or vertically any number of squares`);
} else if (chessPiece.toLowerCase() === 'knight') {
  console.log(`${chessPiece} <- in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.`);
} else if (chessPiece.toLowerCase() === 'pawn') {
  console.log(`${chessPiece} <-  vertically forward one square, with the option to move two squares if they have not yet moved.`);
} else {
  console.log(`${chessPiece} isn't a known piece of chess... yet`); 
}*/

/* Exercicio 7 
if (examScore > 100 || examScore < 0) {
  console.log('A nota do aluno deve ser entre 0 e 100')
} else if (examScore >= 90) {
  console.log(`A nota final do aluno é A`);
} else if (examScore >= 80) {
  console.log(`A nota final do aluno é B`);
} else if (examScore >= 70) {
  console.log(`A nota final do aluno é C`);
} else if (examScore >= 60) {
  console.log(`A nota final do aluno é D`);
} else if (examScore >= 50) {
  console.log(`A nota final do aluno é E`);
} else if (examScore >= 0) {
  console.log(`A nota final do aluno é F`);
}*/

/* Exercicio 8
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log('true');
} else {
  console.log('false');
} */

/* Exercicio 9 
if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1) {
  console.log('true')
} else {
  console.log('false')
}*/

/* Exercicio 10 
let costPrice = 50;
let sellPrice = 1000;
if (costPrice < 0 || sellPrice < 0) {
  console.log('Ambos os valores devem ser maiores do que 0');
}
  console.log(`O lucro ao vender 1000 produtos é de ${(sellPrice * 1000) - ((costPrice + 20 / 100 * 10) * 1000)}`);
  */