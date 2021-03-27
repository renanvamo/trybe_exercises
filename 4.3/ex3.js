let number = 5
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