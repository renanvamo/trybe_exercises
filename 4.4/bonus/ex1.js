let myNumber = 'MMMDCCCXLIV'
console.log(romanCalculator(myNumber));

function convertSymbols(myNumber) {
  let roman = {
   'I': 1,
   'V': 5,
   'X': 10,
   'L': 50,
   'C': 100,
   'D': 500,
   'M': 1000,
  }
  let arrayNumbers = [];
  for (let index in myNumber) {
    arrayNumbers[index] = roman[myNumber[index]];
  }
  return arrayNumbers; 
}

function romanCalculator() {
  let result = 0;
  let arrayNumbers = convertSymbols(myNumber);
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] < arrayNumbers[Number(index) + 1]) {
      result -= arrayNumbers[index];
    } else {
      result += arrayNumbers[index];
    } 
  }
  return result;
}
 