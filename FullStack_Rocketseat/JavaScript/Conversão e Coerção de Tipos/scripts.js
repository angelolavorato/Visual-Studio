//Conversão de tipos (type casting ou type conversion) é quando fazemos a conversão de um tipo de dado para outro tipo. Feito de forma consiente, ou seja, quando o programador deseja a conversão, ou de forma implícita, quando a linguagem de programação converte automaticamente.

//Exemplos de conversão de tipos:
let value = '123'
console.log(typeof Number(value)) // "number"
console.log(typeof value) // "string"

let age = 30
console.log(typeof age.toString()) // "string"
console.log(typeof String(age)) // "string"

//Coerção de tipos (type coercion) é quando a linguagem de programação converte automaticamente um tipo de dado para outro tipo, sem que o programador tenha solicitado essa conversão. A coerção pode ocorrer em operações que envolvem diferentes tipos de dados, como comparação ou concatenação.

//Exemplos de coerção de tipos:
console.log('5' + 10) // "510" (coerção de número para string) foi utilizado "" para indicar que o resultado é uma string
console.log('5' - 10) // -5 (coerção de string para número)
console.log('5' * 2) // 10 (coerção de string para número)
console.log('5' / 2) // 2.5 (coerção de string para número)
