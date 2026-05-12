/*
Comentário de documentação em JavaScript (Sintaxe do JSDoc)
O JSDoc é um padrão para incorporar documentação no código-fonte a partir desses comentários. Ele é amplamente utilizado para gerar documentação automática e fornecer informações sobre funções, parâmetros, tipos de dados, etc.

Exemplo de comentário de documentação usando JSDoc:
 */
/**
 * Signs in a user.
 * @param {String} email user email.
 * @param {String} password more than 6 characters.
 * @returns {Number} user ID.
 */
function signIn(email, password) {
  //Fluxo de autenticação do usuário
  return 7
}

signIn('user@example.com', 'password123')
