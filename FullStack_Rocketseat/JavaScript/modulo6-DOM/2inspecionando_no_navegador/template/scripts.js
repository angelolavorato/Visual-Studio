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

