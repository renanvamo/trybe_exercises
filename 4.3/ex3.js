//3 - Agora inverta o lado do triângulo. Por exemplo:

//Cria um número random entre 1 e 5 e imprimi para o Dev saber qual é o valor ao rodar o código
let number = Math.ceil(Math.random() * 5);
console.log(`N = ${n}`);

let inputLine = ''
let symbol = '*'
let counter = number

for (let lineIndex = 0; lineIndex < number; lineIndex += 1) {
  counter -= 1
  for (let columnIndex = 0; columnIndex < number; columnIndex += 1) {
    if (columnIndex >= counter) {
      inputLine += symbol;
    } else {
      inputLine += '.';
    }
  } 
  console.log(inputLine)
  inputLine = ''
 
  
}