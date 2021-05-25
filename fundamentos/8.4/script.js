// const numbers = [50, 85, -30, 3, 15];

// let biggerNumber = numbers[0]
// for (let index = 0; index < numbers.length; index += 1) {
//   biggerNumber < numbers[index] ? biggerNumber = numbers[index] : biggerNumber;
// }
// console.log(biggerNumber);

// let numbers = [50, 85, -30, 3, 15];

// console.log(numbers.reduce((result, number) => result > number ? result : number));

// numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// console.log(numbers.filter((number) => number % 2 === 0).reduce((sumResult, number) => sumResult + number));

// console.log(numbers.reduce((sumEven, number) => number % 2 === 0 ? sumEven + number : sumEven));

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

console.log(estudantes.map(student => {
  const betterResult = {
    name: student.nome,
    melhorMateria: student.materias.reduce((betterResult, result) => betterResult > Number(result.nota) ? betterResult : result.name, 0) 
  }
  return betterResult
  })); 
// .reduce((biggerGrades, number) => biggerGrades > Number(number.nota) ? biggerGrades : Number(number.nota), 0));

