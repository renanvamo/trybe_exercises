let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalOddNumbers = 0

for (let number of numbers) {
  if (number % 2 === 1) {
    totalOddNumbers += 1;
  }
}
console.log(totalOddNumbers);