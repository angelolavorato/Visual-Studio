const showMessage1 = function () {
  return 'ALO'
}

console.log(showMessage1())

//posso também passar parametros na função anônima
const showMessage2 = function (name) {
  return 'ALO, ' + name
}

console.log(showMessage2('JOÃO'))
