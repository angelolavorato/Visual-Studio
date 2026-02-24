//var user = 'John Doe'
//console.log(user) // John Doe
//Isso é o correto a se fazer nesse sentido, declarar a variável antes de usá-la, mas o JavaScript tem um comportamento chamado Hoisting, onde as declarações de variáveis são "elevadas" para o topo do escopo, permitindo que você use a variável antes de declará-la. No entanto, isso pode levar a resultados inesperados e é considerado uma má prática.

//console.log(user) // undefined
//var user = 'John Doe'

var email = 'john.doe@example.com' //escopo global
{
  //escopo de bloco
  console.log(email)
}

{
  var age = 30 //escopo global
} //se eu mudar essa variável para "let" ou "const", ela não estará mais disponível fora do bloco, e o console.log(age) resultará em um erro de referência.

console.log(age)

{
  let endereco = 'Rua x 1234' //escopo de bloco
  console.log(endereco) // Rua x 1234
}
