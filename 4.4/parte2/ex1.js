/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */


function verifyPalindrome(word) {
  let reverseWord = '';
  for (let index = word.length-1; index >= 0.; index -= 1) {
    reverseWord += word[index];
  }
  if (reverseWord === word) {
  return true;
  } else {
  return false;
  }
}

console.log(verifyPalindrome('arara'));