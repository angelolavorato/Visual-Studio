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

const guest = document.querySelector('#guest-1')
console.log(guest)
//Como exibir o conteúdo do elemento como texto
console.log(guest.textContent) //Retorna o conteúdo como texto

//guest.textContent = 'POMPEU' //Alterando o conteúdo do elemento (cuidado que isso elimina a tag span que tem dentro do li)

//para que isso não aconteça, é só adicionar um espaço span lá no #guest-1, assim o conteúdo do span não é eliminado ficando #guest-1 span

//Outras formas de acessar o conteúdo do elemento
console.log(guest.innerText) //Retorna o conteúdo do elemento como texto, mas respeitando a formatação (quebra de linha, etc)

console.log(guest.innerHTML) //Retorna o conteúdo do elemento como HTML, ou seja, com as tags
