//IF ELSE IF
//Esse é um exemplo incorreto pois o código irá verificar todas as condições, mesmo que a primeira seja verdadeira. O correto seria usar o ELSE IF para evitar isso.
let hour = 19
/*
}
if (hour <= 12) {
  console.log('Bom dia!')
}
if (hour > 18) {
  console.log('Boa noite!')
}
if (hour > 12) {
  console.log('Boa tarde!')
*/

//CORRETO
/*
if (hour <= 12) {
  console.log('Bom dia!')
} else if (hour > 18) {
  console.log('Boa noite!')
} else if (hour > 12) {
  console.log('Boa tarde!')
}*/

//Outro exemplo mais correto

if (hour <= 12) {
  console.log('Bom dia')
} else if (hour > 12 && hour <= 18) {
  console.log('Boa tarde!')
} else {
  console.log('Boa noite')
}
