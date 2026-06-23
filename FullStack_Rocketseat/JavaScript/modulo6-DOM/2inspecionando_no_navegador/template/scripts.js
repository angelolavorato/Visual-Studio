/*//Visualizar o conteúdo do document
//console.log(document)

//Como obter o title da página
console.log(document.title)

//Como acessar um elemento pelo id (SELETOR ID)
const guest = document.getElementById('guest-2')
console.log(guest)

//Como visualizar as propriedades de um objeto
console.dir(guest)

//Como acessar elemento com class (SELETOR CLASS)
const guestByClass = document.getElementsByClassName('guest')
console.log(guestByClass)

//como acessar o primeiro elemento da coleção
console.log(guestByClass[0])
//outro jeito
console.log(guestByClass.item(0))

//Selecionar uma lista de elementos pela tag (SELETOR TAG)
const guestsByTag = document.getElementsByTagName('li')
console.log(guestsByTag)
*/

//******************************* */
//QUERY SELECTOR
//Acessa o elemento pelo selector ID
/*const guest = document.querySelector('#guest-1') //Colocando # indica que eu quero selecionar um elemento por id
console.log(guest)

//Acessa o elemento pelo selector CLASS
const guests = document.querySelector('.guest') //Colocando . indica que eu quero selecionar um elemento por class
console.log(guests)

//Como retornar TODOS os elementos encontrados pelo query
const guestsAll = document.querySelectorAll('.guest')
console.log(guests)
*/
//*************************************
// AULA 4 - Manipulando Conteúdo */

//const guest = document.querySelector('#guest-1')
//console.log(guest) //isso aqui me mostra o elemento inteiro, ou seja, a tag li com o span dentro

//Como exibir o conteúdo do elemento como texto
//console.log(guest.textContent) //Retorna o conteúdo vísível e oculto do elemento, ou seja, o texto que tem dentro do li e o texto que tem dentro do span

//guest.textContent = 'POMPEU' //Alterando o conteúdo do elemento (cuidado que isso elimina a tag span que tem dentro do li)

//para que isso não aconteça, é só adicionar um espaço span lá no #guest-1, assim o conteúdo do span não é eliminado ficando #guest-1 span

//Outras formas de acessar o conteúdo do elemento
//console.log(guest.innerText) //Retorna somente o conteúdo visível

//console.log(guest.innerHTML) //Retorna o HTML como texto.

/********************************************** */
//AULA 5 - Alterando Estilos

//Lembrar de adicionar o class="input-error" no html pra demonstrar o erro chamado no css

//Como fazer a borda vermelha aparecer no input através do javascript
//const input = document.querySelector('#name')
//input.classList.add('input-error') //Adiciona a classe input-error no elemento input, fazendo com que a borda vermelha apareça

//Como remover a borda vermelha do input (ou mesmo uma classe nesse caso)
//input.classList.remove('input-error') //Remove a classe input-error do elemento input, fazendo com que a borda vermelha desapareça

//Se não tiver a classe adiciona. Se tem, remove
//Propriedade toggle, que adiciona a classe se ela não existir e remove se ela existir
//input.classList.toggle('input-error') //Adiciona a classe input-error se ela não existir e remove se ela existir

//Posso utilizar um elemento direto alterando as propriedades de estilo css do elemento"
//const button = document.querySelector('button')
//button.style.backgroundColor = 'red' //Alterando a cor do background do botão para vermelho

/*************************************************************************  */
//Aula 6 - Criando Elementos
/*
const guests = document.querySelector('ul') //Selecionando a ul
//console.log(guests)//isso aqui só foi usado para mostrar a ul, mas o objetivo é criar um elemento li dentro da ul

//Criando um elemento li
const newGuest = document.createElement('li')
newGuest.classList.add('guest') //Adicionando a classe guest no elemento li criado
const guestName = document.createElement('span') //Criando um elemento span para colocar o nome do convidado dentro do li

guestName.textContent = 'POMPEU' //Adicionando o nome do convidado no span
const guestSurname = document.createElement('span') //Criando um elemento span para colocar o sobrenome do convidado dentro do li
guestSurname.textContent = 'POMPILHO' //Adicionando o sobrenome do convidado no span

//newGuest.append(guestName, guestSurname) //Adicionando o span dentro do li, o append adiciona após o último filho
//newGuest.prepend(guestSurname) //Adicionando o span do sobrenome dentro do li

//Método mais simples para adicionar o nome e o sobrenome do convidado dentro do li
newGuest.appendChild(guestName) //Adicionando o span do nome dentro do li

console.log(newGuest) //Isso aqui mostra o li com o span dentro, mas ainda não tem o sobrenome

//Para adicionar na tela mesmo ao invés nas ferramentas de desenvolvedor
guests.appendChild(newGuest) //adicionando um novo elemento, mas ele está sem a classe
//Para adicionar a classe do elemento li
*************************************************************************************************************************/

//AULA 7 - MANIPULANDO ATRIBUTOS
//vamos selecionar o input do meu projeto
//const input = document.querySelector('input')

//input.setAttribute('disabled', 'true') //Adicionando o atributo disabled no input bloqueando o input, ou seja, não é possível digitar nada nele

//input.setAttribute('type', 'file')

//Removendo o atributo disabled do input
//input.removeAttribute('id') //Removendo o atributo disabled do input, assim é possível digitar nele novamente

/****************************************************************************** */
//Aula 8 - MANIPULANDO EVENTOS
//São ações que acontecem no navegador, como por exemplo, clicar em um botão, passar o mouse em cima de um elemento, digitar algo em um input, etc
/*
window.addEventListener('load', () => {
  //Quando a página for carregada, o evento load é disparado
  console.log('Página carregada') //Isso aqui vai aparecer no console quando a página for carregada
})

addEventListener('click', event => {
  event.preventDefault() //Isso aqui vai impedir que o evento click seja disparado, ou seja, não vai acontecer nada quando eu clicar em qualquer lugar da página
  console.log(event) //Isso aqui vai aparecer no console quando eu clicar em qualquer lugar da página, mostrando o evento click
  console.log(event.target) //Isso aqui vai aparecer no console quando eu clicar em qualquer lugar da página, mostrando o elemento que foi clicado
})
*/

/******************************************************************************** */
//Aula 9 Eventos de um elemento específico
//Nesta aula, aprendemos a identificar eventos em elementos específicos em JavaScript. Foi mostrado como observar o evento de scroll em uma lista, exibindo informações como a distância do topo da lista. Também foi demonstrado como manipular o scroll, levando o usuário de volta ao topo da lista. Além disso, vimos como adicionar eventos de clique em botões específicos. A importância de desabilitar o comportamento padrão do evento de clique também foi destacada.

//Adicionar mais elementos na lista para que o scroll funcione
