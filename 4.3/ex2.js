//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

//Cria um número random entre 1 e 5 e imprimi para o Dev saber qual é o valor ao rodar o código
let n = Math.ceil(Math.random() * 5);
console.log(`N = ${n}`);
let array = []

//Testa se o número é maior que 1 para poer rodar o programa, e somente números de 1 a 5
if (n <= 1) {
  console.log('O valor de "n" deve ser maior que 1');
} else { 
  for (let index = 0; index < n; index += 1) {
  array.push("*");
  console.log(array.join(''))
  }  
}