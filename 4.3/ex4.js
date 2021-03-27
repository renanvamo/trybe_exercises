//4 - Por fim, faça uma pirâmide com n asteriscos de base:
let number = Math.ceil(Math.random() * 15)
console.log(`N = ${number}`);
let inputLine = '';
let symbol = '*';

let counterDown = Math.ceil(number / 2);
let counterUp = Math.ceil(number / 2);

//verificamos se o número é impar, se não for, o number vai diminuir 1 para o exerício funcionar como esperado
if (number % 2 === 0) {
  number -= 1;
  console.log(`O número foi alterado para ${number}`);
}
for (let lineIndex = 1; lineIndex <= number; lineIndex += 1) {
  for (let columnIndex = 1; columnIndex <= number; columnIndex += 1) { 
    if (lineIndex % 2 === 1) {
      if (columnIndex <= counterUp && columnIndex >= counterDown) {
        inputLine += '*';
      } else {
        inputLine += ' ';
      }
    } else {
      inputLine += ' ';
    } 
  } 
  console.log(inputLine);
  inputLine = '';
  //se for uma linha impar, os contadores se alteram, senão não
  if (lineIndex % 2 === 1) {
  counterUp += 1;
  counterDown -= 1;
  }
}

      
