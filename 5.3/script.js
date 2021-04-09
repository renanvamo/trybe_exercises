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
    if (index === 4 || index === 11 || index === 18 || index ===    25) {
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
  let fridayButton = document.createElement('input');
  fridayButton.id = 'btn-friday';
  fridayButton.value = 'Friday';
  fridayButton.type = 'button';
  document.getElementsByClassName('buttons-container')[0].appendChild(fridayButton);
}

// 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira. É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

