const stateBox = document.getElementById('state');
const inputDate = document.getElementById('input-date');
const submitButton = document.getElementById('submit')
const states = [
'Acre', 
  'Alagoas', 
  'Amapá', 
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espirito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso do Sul',
  'Mato Grosso',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
];

function fillStateBox() {
  for (let index = 0; index < states.length; index += 1) {
    let newOption = document.createElement('option');
    newOption.value = states[index];
    newOption.innerHTML = states[index];
    stateBox.appendChild(newOption);
    if (states[index] === 'São Paulo') {
      let selected = document.createAttribute('selected');
      newOption.setAttributeNode(selected);
    }
  }
}
fillStateBox();

function valiDate() {
  inputDate.addEventListener('keyup', () => {
    let digit1 = inputDate.value.split('')[0];
    let digit2 = inputDate.value.split('')[1];
    let digit3 = inputDate.value.split('')[2];
    let digit4 = inputDate.value.split('')[3];
    let digit5 = inputDate.value.split('')[4];
    let digit6 = inputDate.value.split('')[5];
    let digit7 = inputDate.value.split('')[6];
    let digit8 = inputDate.value.split('')[7];
    let day = Number(digit1 + digit2);
    let month = Number(digit3 + digit4);
    let year = Number(digit5 + digit6 + digit7 + digit8);
    
    // Define que o input aceite apenas números
    let validText = new RegExp("^[0-9]+$");
    let text = inputDate.value;
    
    // Se algum dígito não for um number, o input é zerado
    if (!validText.test(text)) {
      inputDate.value = "";
      alert('Apenas números são aceitos');
    }

    // Se o dia for maior que 31, mostra um erro e volta com o valor zerado;
    if (day > 31) {
      alert('Dia inválido! Dia válido 31 - 1');
      inputDate.value = '';
    }

    // Se o mês for maior que 12, mostra o erro e volta ao valor do dia;
    if (month > 12) {
      alert('Mẽs inválido! Mẽs válido 12 - 1');
      inputDate.value = `${day}`;
    }

    // Se o ano for menor que 1900 ou maior que 2021 mostra o erro, e volta ao valor do mês
    if (year < 1900 || year > 2021) {
      alert('Ano inválido! Ano válido 1900 - 2021');
      inputDate.value = `${day}${month}`;
    } else if (year) {
      inputDate.value = `${day}/${month}/${year}`;
    }
  });
}
valiDate();

function submit() {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let newDiv = document.createElement('div');
    newDiv.id = 'container-data'
    let form = document.getElementById('form');
    form.appendChild(newDiv);
    formData = new FormData(form);
    console.log(formData);
  });
}
submit();
