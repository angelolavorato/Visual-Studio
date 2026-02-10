//callback function

function sayMyName(name) {
  console.log(name)
}

sayMyName(() => {
  console.log('estou em uma callback')
})

//Uma callback function é uma função que está sendo passada para outra função como parâmetro.

