//Visualizar o conteúdo do document
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
