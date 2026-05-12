//Arrow Function (função de seta)
const showMessage = () => {
  console.log('Alo Mundo!')
}

console.log(showMessage) //mostra a função
showMessage() //chama a função

const showMessage2 = (username, email) => {
  console.log('Olá, ', username, ' seu email é: ', email)
}
showMessage2('Maria', 'maria@example.com') //chama a função e passa os parametros
