//String
let username = 'Angelo'

console.log(username)
console.log(typeof username)

console.log('Uma string com aspas') //O auto corretor corrige para aspas simples, mas o correto seria usar aspas duplas para não ter que usar a barra invertida
console.log('Outra string com aspas simples')

//Quando usar uma ou outra?
//Se eu quiser usar aspas duplas dentro da string, eu posso usar aspas simples para delimitar a string
console.log('Usar aspas simples quando a string não contém "aspas simples".')
//Se eu quiser usar aspas simples dentro da string, eu posso usar aspas duplas para delimitar a string
console.log("Usar aspas duplas quando a string não contém 'aspas duplas'.")

//Como escrever utilizando tabulação, quebra de linha e outros caracteres especiais?
console.log(`
Usar crase para criar strings multilinhas
E para usar interpolação de variáveis, como por exemplo: ${username}
  `)
