const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addKey() {
  lesson2.turno = 'manhã';
}
addKey()


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

let createReport = (obj, teacher) => {
  let array = Object.values(obj);
  let students = 0;
  let classes = []
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].professor === teacher) {
      students += array[index].numeroEstudantes;
      classes.push(array[index].materia);
    }
  }
  return {
    professor: teacher,
    aulas: classes,
    estudantes: students
  }
}

console.log(createReport(allLessons, 'Maria Clara'))
//Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */