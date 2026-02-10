/*

Function() constructor
  *expressão new
  *criar um novo objeto
  *this keyword

*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' está andando'
  }
}

const angelo = new Person('Angelo')
const jao = new Person('Jao')
console.log(angelo.walk())
console.log(jao.walk())
