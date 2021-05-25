const testPromise = async () => {
  const promise = ((resolve, reject) => {
    let myArray = Array.from(
      { length: 10 },
      () => Math.ceil(Math.random() * 50) ** 2
    )
    let sum = myArray.reduce((acc, value) => acc + value);
    sum < 8000 ? resolve(sum) : reject(sum);
  })

  
  promise await ((result) => {
    return [2, 3, 5, 10].map(number => result / number)
  })
  await ((arrayResult) => arrayResult.reduce((acc, eachNumber) => acc + eachNumber))
  await (number => console.log(number))
  await((result) => console.log(`Falha ${result}`));
}

testPromise()