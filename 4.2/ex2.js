let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let number of numbers) {
  //Mostra qual o valor da somatório até o momento e com qual número está sendo somado.
  console.log(`${sum} + ${number}`);
  sum += number;
}