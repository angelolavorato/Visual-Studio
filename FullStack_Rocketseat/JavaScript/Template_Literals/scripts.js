//Template Literals (template strings, interpolação de strings)
let username = 'Angelo'
let email = 'angelo@email.com'
//Como escrever uma mensagem utilizando as variáveis acima?
console.log(username, 'tem o email', email)

//Concatenação de strings
let message = 'Bem-vindo ' + username + ', seu email é ' + email

console.log(message)

//Template Literals
console.log(`Bem-vindo ${username}, você se conectou com o email ${email}`)
