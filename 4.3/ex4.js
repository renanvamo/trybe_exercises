//4 - Por fim, faça uma pirâmide com n asteriscos de base:

let number = Math.ceil(Math.random() * 15)
console.log(`Number = ${number}`);
let inputLine = '';
let symbol = '*';

//Como o número é muito baixo para fazer uma pirâmide, aumentamos o valor de number
if (number < 3) {
  number += 4;
  console.log(`Número muito baixo - O number foi alterado para = ${number}`);
}
//verificamos se o número é impar, se não for, o number vai diminuir 1 para o exerício funcionar como esperado
if (number % 2 === 0) {
  number -= 1;
  console.log(`Como o nṹmero é par - O número foi alterado para ${number}`);
}
//Descobrimos qual a metade do number para usar de referência
let counterDown = Math.ceil(number / 2);
let counterUp = Math.ceil(number / 2);

for (let lineIndex = 1; lineIndex <= number; lineIndex += 2) {
  for (let columnIndex = 1; columnIndex <= number; columnIndex += 1) { 
    if (columnIndex <= counterUp && columnIndex >= counterDown) {
      inputLine += symbol;
    } else {
      inputLine += ' ';
    }
  } 
  console.log(inputLine);
  inputLine = '';
  counterUp += 1;
  counterDown -= 1;
  
}

      
