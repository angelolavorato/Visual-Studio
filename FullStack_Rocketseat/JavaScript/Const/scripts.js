//Uma constante cria uma variável cujo valor é fixo, ou seja, não pode ser alterado. Para criar uma constante, utilizamos a palavra-chave "const" seguida do nome da constante e do valor atribuído a ela. Por exemplo:
const number = 42
console.log(number)
//Neste exemplo, a constante "number" é criada com o valor 42. Se tentarmos atribuir um novo valor a essa constante, ocorrerá um erro, pois as constantes não podem ser reatribuídas. Por exemplo:
number = 50 // Isso causará um erro, pois "number" é uma constante
console.log(number)
//No entanto, é importante notar que, embora o valor de uma constante não possa ser alterado, se a constante for um objeto ou um array, as propriedades ou elementos internos desse objeto ou array podem ser modificados. Por exemplo:
