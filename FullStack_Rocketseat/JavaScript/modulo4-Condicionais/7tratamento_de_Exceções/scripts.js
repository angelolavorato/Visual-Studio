//Exemplos práticos de tratamento de exceções
/*
try {
  //TENTA executar algo
  console.log(result)
} catch (error) {
  //CAPTURA o erro para tratar
  console.log('Ops, algo deu errado!', error)
} finally {
  console.log('FIM')
}*/

//Lançando uma exceção personalizada
let result = 0
try {
  if (result === 0) {
    throw new Error('O resultado não pode ser zero!')
  }
} catch (error) {
  console.log(error)
} finally {
  console.log('FIM')
}
