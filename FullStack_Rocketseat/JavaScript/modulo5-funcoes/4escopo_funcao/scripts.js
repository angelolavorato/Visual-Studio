showMessage('Olá, mundo!')

function showMessage(message) {
  console.log(message)
  endLine()
  //Posso criar funções dentro de funções, mas não posso acessar variáveis de uma função dentro de outra função por exemplo:
  function endLine() {
    console.log('------------------')
  }
}

showMessage('TESTE')

//se eu tentar executar a função endLine() fora da função showMessage() vai dar erro, pois ela só existe dentro do escopo da função showMessage() e não pode ser acessada de fora dela.
endLine() // Uncaught ReferenceError: endLine is not defined
