//Grouping Operator (ordem de precedência)
//O operador de agrupamento é representado por parênteses e tem precedência mais alta que todos os outros operadores.
//Exemplo:
console.log((2 + 3) * 4) //20
console.log(2 + 3 * 4) //14

//suponhamos que eu queira calcular a média de um aluno, onde a média é dada por (nota1 + nota2 + nota3) / 3
let average = 7 + 8 + 9 / 3
console.log(average) //14, mas o resultado esperado é 8

//para corrigir isso, precisamos usar o operador de agrupamento para garantir que a soma das notas seja feita antes da divisão:
average = (7 + 8 + 9) / 3
console.log(average) //8, agora o resultado é o esperado
