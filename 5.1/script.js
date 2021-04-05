// 1 - Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
let newP = document.getElementsByTagName('p');
newP[0].innerText = 'Em 2 anos estarei trabalhando na área de programação ganhando um salário ao menos 1.5 vezes maior que meu último emprego';

// 2 - Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';

// 3 - Crie uma função que mude a cor do quadrado vermelho para branco.
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';

// 4 - Crie uma função que corrija o texto da tag <h1>.
document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';

// 5 - Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
newP[0].style.textTransform = 'uppercase';

// 6 - Aqui você vai modificar os elementos já existentes utilizando apenas as funções:  
for (let index in newP) {
  console.log(newP[index].innerText);
};
