//throw

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log(name)
}
//try Catch
try {
  sayMyName()
} catch (e) {
  console.log(e)
}

console.log('após ao try/catch')
