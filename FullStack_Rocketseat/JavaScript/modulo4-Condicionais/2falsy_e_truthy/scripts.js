//Exemplos
console.log('### EXEMPLOS DE FALSY ###')
console.log(false ? 'Verdadeiro' : 'Falso') //false
console.log(0 ? 'Verdadeiro' : 'Falso') //false
console.log(-0 ? 'Verdadeiro' : 'Falso') //false
console.log('' ? 'Verdadeiro' : 'Falso') //false
console.log(null ? 'Verdadeiro' : 'Falso') //false
console.log(undefined ? 'Verdadeiro' : 'Falso') //false
console.log(NaN ? 'Verdadeiro' : 'Falso') //false

console.log('### EXEMPLOS DE TRUTHY ###')
console.log(true ? 'Verdadeiro' : 'Falso') //true
console.log(1 ? 'Verdadeiro' : 'Falso') //true
console.log(-1 ? 'Verdadeiro' : 'Falso') //true
console.log(' ' ? 'Verdadeiro' : 'Falso') //true
console.log('0' ? 'Verdadeiro' : 'Falso') //true
console.log('false' ? 'Verdadeiro' : 'Falso') //true
console.log([] ? 'Verdadeiro' : 'Falso') //true
console.log({} ? 'Verdadeiro' : 'Falso') //true
console.log(Infinity ? 'Verdadeiro' : 'Falso') //true
console.log(-Infinity ? 'Verdadeiro' : 'Falso') //true
