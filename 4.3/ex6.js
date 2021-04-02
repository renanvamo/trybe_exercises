//6 - Faça um programa que diz se um número definido numa variável é primo ou não.

//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.


// Cria um número aleatório de 1 a 50 para testes
let numberToCheck = Math.ceil(Math.random() * 100);
let divisible = 1

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) {
    divisible += 1;
    if (divisible > 2) {
      console.log(`O número ${numberToCheck} não é um número primo =(`);
      break;
    }
  }
}
if (divisible === 2) console.log(`${numberToCheck} é primo! Uhuuu`);
