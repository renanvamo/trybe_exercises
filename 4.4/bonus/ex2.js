let num1 = 18
let num2 = 24

function add(num1, num2) {
  let arr1 = num1.toString().split('').map(Number);
  let arr2 = num2.toString().split('').map(Number);
  let result = [];
  
  for (let index = 0; index < arr1.length + arr2.length; index += 1) { 
    if (arr1.length !== arr2.length) {
      if (arr1.length > arr2.length) {
        arr2.splice(0, 0, 0)
      } else {
        arr1.splice(0, 0, 0)
      }
    }
  }
  
  for (let index in arr1) {
    result[index] = arr2[index] + arr1[index];
  } 
  
  return parseInt(result.join(''));
}
console.log(add(num1, num2));
