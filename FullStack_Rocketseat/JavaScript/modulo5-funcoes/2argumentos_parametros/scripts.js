/*
 */

//Passando o parâmetro para a função
function mensagem(username) {
  console.log('Olá, ' + username + '!')
}

//Passando argumentos para a função
mensagem('Maria')
mensagem('João')

//outro exemplo
function sum(a, b) {
  console.log(a + b)
}

sum(5, 10)
sum(20, 30)

//Na função acima, a, b são os parâmetros e 5, 10, 20, 30 são os argumentos.

//Obs não podemos esquecer que os argumentos devem ser passados na mesma ordem dos parâmetros, caso contrário, a função pode não funcionar como esperado. Pois a ordem dos parâmetros é importante para a função entender quais valores estão sendo passados. Por exemplo:

function joinText(text1, text2, text3) {
  console.log(text1 + ' ' + text2 + ' ' + text3)
}

joinText('Angelo', 'Soldati', 'Lavorato') // Saída: "Angelo Soldati Lavorato"
joinText('Lavorato', 'Angelo', 'Soldati') // Saída: "Lavorato Angelo Soldati"

//No exemplo acima, a ordem dos argumentos é importante para que a função possa juntar os textos corretamente. Se a ordem dos argumentos for alterada, o resultado final será diferente.

//Consigo também atribuir um valor padrão para os parâmetros, caso o argumento não seja passado. Por exemplo:
// Definindo um valor (argumento) padrão.
function joinText(text1, text2 = '', text3 = '') {
  console.log(text1, text2, text3)
}

joinText('Rodrigo', 'Gonçalves', 'Santana')
joinText('Gonçalves', 'Rodrigo', 'Santana')

joinText('Rodrigo', 'Gonçalves')
