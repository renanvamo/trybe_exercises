//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

//Cria um número random entre 1 e 5 e imprimi para o Dev saber qual é o valor ao rodar o código
let n = Math.ceil(Math.random() * 5);
console.log(`N = ${n}`);
let array = []

//Testa se o número é maior que 1 para poer rodar o programa 
if (n <= 1) {
  console.log('O valor de "n" deve ser maior que 1');
} else { 
  for (let index = 0; index < n; index += 1) {
  array.push("*");
  }  
  for (index = 0; index < n; index += 1) {
  //.join faz eu mostrar apenas esse caractere entre o conteúdo da string
  console.log(array.join(''));
  }
}
