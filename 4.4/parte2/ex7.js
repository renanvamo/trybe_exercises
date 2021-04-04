// 7 - Crie uma função que receba uma string word , e outra, uma string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

/*
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false*/

function verifyEndingWord(word, endingWord) {
  //substring - remove os primeiros caracteres de uma string, eu determino a quantidade entre ()
  word = word.substring(word.length - endingWord.length); 
  return (endingWord === word);
};

console.log(verifyEndingWord('trybe', 'be')); //true
console.log(verifyEndingWord('joaofernando', 'fernan')); //false
