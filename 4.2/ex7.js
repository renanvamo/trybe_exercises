let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0];
for (let number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
} 
console.log(smallestNumber);