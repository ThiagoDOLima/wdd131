const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('ul');// você precisa preencher o espaço em branco para referenciar o elemento HTML que é um elemento de lista não ordenada.


const li = document.createElement('li');

const botaoExcluir = document.createElement('button');


li.textContent = input.value;


botaoExcluir.textContent = '❌';


li.append(li);

