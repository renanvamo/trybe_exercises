// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};  

let secondInfo = {}
secondInfo.personagem = 'Tio Patinhas';
secondInfo.origem = 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178';
secondInfo.nota = 'O último MacPatinhas';
secondInfo.recorrente = 'Sim';


for (let key in info) {
  if (secondInfo[key] === 'Sim' && info[key] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + secondInfo[key]);
  }
};