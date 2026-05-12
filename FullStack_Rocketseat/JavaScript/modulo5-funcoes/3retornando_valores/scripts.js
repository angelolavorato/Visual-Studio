function sum(a, b) {
  let result = a + b

  return result // A palavra-chave return é usada para retornar um valor de uma função. Quando a função é chamada, ela executa o código dentro dela e, quando encontra a palavra-chave return, ela retorna o valor especificado e encerra a execução da função. O valor retornado pode ser armazenado em uma variável ou usado diretamente em outras partes do código.
}

let resposta = sum(2, 3)
console.log(resposta) // 5

// Também é possível retornar diretamente a expressão sem armazená-la em uma variável intermediária:
console.log(sum(5, 7)) // 12
