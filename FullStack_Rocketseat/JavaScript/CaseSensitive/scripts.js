/*
  Quando uma linguagem de programação é case sensitive, isso significa que ela diferencia letras maiúsculas de minúsculas. Por exemplo, as variáveis "nome" e "Nome" seriam consideradas diferentes em uma linguagem case sensitive.

  por exemplo, em JavaScript, as seguintes variáveis são consideradas diferentes:

  let nome = "João";
  let Nome = "joão";
 */

var produto = 'Camiseta'
var Produto = 'Bermuda'

var produto = 'Caneca' // Isso aqui gera uma sobrescrita da variável produto, ou seja, o valor 'Camiseta' é substituído por 'Caneca'

console.log(produto)
console.log(Produto)
