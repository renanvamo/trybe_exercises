// function createEmployeeLogin(empName) {
//   let orgEmail = empName.toLowerCase().split(' ').join('_');
//   orgEmail = `${orgEmail}@trybe.com`;
  
//   return { 
//     nome: empName, 
//     email: orgEmail 
//   }
// }

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
//     id2: callback('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
//     id3: callback('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
//   }
//   return employees;
// };

// console.log(newEmployees(createEmployeeLogin));

const drawnNumber = () => Math.ceil(Math.random() * 5);

const resultDrawn = (bet, myFunction)  => bet === myFunction() ? `Parabéns você acertou` : `Errou feio, errou rude!`; 

console.log(resultDrawn(3, drawnNumber))