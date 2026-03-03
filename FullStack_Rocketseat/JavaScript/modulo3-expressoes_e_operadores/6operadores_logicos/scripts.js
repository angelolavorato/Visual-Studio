let one = 1
let two = 2

// == igual a
console.log('### IGUAL A ###')
console.log(one == two) // false
console.log(one == 1) // true
console.log(one == '1') // true, pois nesse caso ele vai olhar para o conteúdo e não para o tipo da variável

// != diferente de
console.log('### DIFERENTE DE ###')
console.log(one != two) // true
console.log(one != 1) // false
console.log(one != '1') // false, pois nesse caso ele vai olhar para o conteúdo e não para o tipo da variável

// === estritamente igual a
//ele vai olhar para o tipo e para o valor na hora de verificar se é de fato igual ou não
console.log('### ESTRITAMENTE IGUAL A ###')
console.log(one === two) // false
console.log(one === 1) // true
console.log(one === '1') // false, pois nesse caso ele vai olhar para o conteúdo e para o tipo da variável

// !== estritamente diferente de
//ele vai olhar para o tipo e para o valor na hora de verificar se é de fato diferente ou não
console.log('### ESTRITAMENTE DIFERENTE DE ###')
console.log(one !== two) // true
console.log(one !== 1) // false
console.log(one !== '1') // true, pois nesse caso ele vai olhar para o conteúdo e para o tipo da variável
console.log(one !== 2) // true, pois nesse caso ele vai olhar para o conteúdo e para o tipo da variável
console.log(one !== '2') // true, pois nesse caso ele vai olhar para o conteúdo e para o tipo da variável
