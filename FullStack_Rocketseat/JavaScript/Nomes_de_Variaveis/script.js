//Devemos lembrar que o JS é case sensitive, ou seja, letras maiúsculas e minúsculas fazem diferença.
//Exemplo de variáveis com nomes válidos:
let username = 'João'
let userName = 'Maria'

console.log(username) // Saída: João
console.log(userName) // Saída: Maria

//Podemos iniciar o nome de uma variável com letras, $, ou _, mas não podemos iniciar com números ou caracteres especiais.
let $email = 'joao@exemplo.com'
let _email = 'maria@exemplo.com'
console.log($email) // Saída:
console.log(_email) // Saída:

//Podemos também utilizar acentos e caracteres especiais, mas é recomendado evitar para manter a legibilidade do código.
let usuário = 'João'
let senha = '123456'
console.log(usuário) // Saída: João



//Não podemos
let 1username = 'João' // Erro: Identificador inválido
let @username = 'Maria' // Erro: Identificador inválido
let user-name = 'João' // Erro: Identificador inválido
let user name = 'Maria' // Erro: Identificador inválido

//RECOMENDAÇÕES PARA NOMES DE VARIÁVEIS:
//1.Utilizar nomes em inglês, pois é a língua mais utilizada na programação.
//2.Evitar usar acentos e caracteres especiais para manter a legibilidade do código.
//3.Evitar usar apenas uma letra para nomear uma variável, pois isso pode causar confusão e dificultar a compreensão do código.
//4.Utilizar camelCase para nomear variáveis, ou seja, a primeira palavra em minúscula e as seguintes com a primeira letra maiúscula, para melhorar a legibilidade do código.
//5.Snake_case é uma alternativa, mas é menos recomendado em JavaScript, pois a convenção mais comum é camelCase.
let userName = 'João' // Correto
let user_name = 'Maria' // Correto, mas menos recomendado
let u = 'João' // Evitar, pois não é claro o que representa a variável
let productPrice = 19.99 // Correto
let product_price = 19.99 // Correto, mas menos recomendado
