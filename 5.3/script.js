function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.

// 1.1 - Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// 1.2 - Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// 1 3 - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ulElement = document.getElementById('days');
createDays();

function createDays() {
  for (let index = 0; index < dezDaysList.length; index += 1) {  
  let createDay = document.createElement('li');
  createDay.className = 'day';
  ulElement.appendChild(createDay).innerText = dezDaysList[index];
    if (index === 24 || index === 25 || index === 31) {
      createDay.className += ' holiday';
    }
    if (index === 5 || index === 12 || index === 19 || index ===    26) {
      createDay.className += ' friday';
    }
  }
} 

// 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

// 2.1 - Adicione a este botão a ID "btn-holiday" .
// 2.2 - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function buttonHoliday(buttonName) {
  let newButton = document.createElement('input');
  newButton.type = 'button';
  newButton.value = buttonName;
  newButton.id = 'btn-holiday';
  let buttonCont = document.querySelector('.buttons-container');
  buttonCont.appendChild(newButton);
}

buttonHoliday('Feriados');

// 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// 3.1 - interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

let button = document.querySelector('#btn-holiday');  
button.addEventListener('click', changeHolidayColors);

function changeHolidayColors() {
  let holidays = document.querySelectorAll('.holiday');
  let textFriday = document.getElementsByClassName('friday')[1].innerText 
  console.log(textFriday);
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'white'){
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[index].style.backgroundColor = 'white';
    }
  }
}

// 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// 4.1 - Adicione a este botão o ID "btn-friday" .
// 4.2 - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
buttonFriday('Friday');
function buttonFriday (friday) {
  let newButton = document.createElement('input');
  newButton.id = 'btn-friday';
  newButton.value = 'Friday';
  newButton.type = 'button';
  document.getElementsByClassName('buttons-container')[0].appendChild(newButton);
}

// 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira. É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
function fridayChangeText() {
  let fridayButton = document.querySelector('#btn-friday');
  let fridayOldText = [4, 11, 18, 25];
  let fridayDays = document.getElementsByClassName('friday');
  
  fridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridayDays.length; index += 1) {
      if (fridayDays[index].innerText !== 'Sexta Feira') {
        fridayDays[index].innerText = 'Sexta Feira';
      } else {
        fridayDays[index].innerText = fridayOldText[index];
      }
    }
  })
}
fridayChangeText()

// 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
let elementZoom = document.querySelector('.day').parentElement;

function zoomIn() {
  elementZoom.addEventListener('mouseover', function(element) {
    element.target.style.fontSize = '25px';
    element.target.style.fontWeight = 'bold';
  })
}

function zoomOut() {
  elementZoom.addEventListener('mouseout', function(element) {
    element.target.style.fontSize = '20px';
    element.target.style.fontWeight = 'normal';
  })
}
zoomIn()
zoomOut()

//7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

taskCreator('Cozinhar')

function taskCreator(task) {
  let tasks = document.querySelector('.my-tasks');
  let newTag = document.createElement('span');
  newTag.innerText = task
  tasks.appendChild(newTag);
}

// 8 - Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .