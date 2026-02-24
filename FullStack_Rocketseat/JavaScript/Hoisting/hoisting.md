# Hoisting em JavaScript – Explicação Completa e Profissional

## 1. Introdução

O **hoisting** é um dos comportamentos fundamentais do JavaScript e está diretamente relacionado ao modo como o motor da linguagem interpreta e executa o código.

De forma técnica, o hoisting é o processo pelo qual o JavaScript **registra declarações de variáveis e funções na memória antes da execução efetiva do código**, durante a fase de criação do contexto de execução (*Execution Context Creation Phase*).

Esse comportamento pode dar a impressão de que declarações foram "movidas para o topo" do código, embora isso não ocorra literalmente no arquivo fonte. Trata-se de um comportamento interno do motor JavaScript.

O domínio desse conceito é essencial para compreender:

* Escopo de variáveis
* Contexto de execução
* Funcionamento interno do interpretador JavaScript
* Prevenção de bugs imprevisíveis

---

## 2. Como o JavaScript executa o código

Antes de compreender o hoisting, é necessário entender que o JavaScript executa o código em duas fases principais:

### 2.1 Fase de Criação (Creation Phase)

Nesta fase, o motor JavaScript:

* Cria o contexto de execução
* Registra variáveis na memória
* Registra funções na memória
* Define o escopo
* Define o valor inicial das variáveis

### 2.2 Fase de Execução (Execution Phase)

Nesta fase, o motor executa o código linha por linha.

O hoisting ocorre na primeira fase.

---

## 3. Conceito Formal de Hoisting

Definição técnica:

> Hoisting é o mecanismo pelo qual o motor JavaScript registra declarações de variáveis e funções no topo de seu escopo durante a fase de criação do contexto de execução.

Importante:

* Apenas as declarações são elevadas
* As atribuições não são elevadas

---

## 4. Hoisting com var

Variáveis declaradas com `var` são elevadas e inicializadas com o valor `undefined`.

Exemplo:

```javascript
console.log(nome);

var nome = "Carlos";
```

Resultado:

```
undefined
```

O que ocorre internamente:

```javascript
var nome;

console.log(nome);

nome = "Carlos";
```

A variável existe, mas ainda não recebeu valor.

---

## 5. Inicialização implícita com undefined

Toda variável declarada com `var` recebe automaticamente o valor:

```
undefined
```

Isso significa que a variável existe na memória, mas não possui valor definido.

Exemplo:

```javascript
var x;

console.log(x);
```

Resultado:

```
undefined
```

---

## 6. Hoisting com let

Variáveis declaradas com `let` também sofrem hoisting, porém não são inicializadas.

Elas entram em um estado chamado:

## Temporal Dead Zone (TDZ)

A TDZ é o período entre:

* O início do escopo
* A linha onde a variável é declarada

Durante esse período, a variável não pode ser acessada.

Exemplo:

```javascript
console.log(x);

let x = 10;
```

Resultado:

```
ReferenceError: Cannot access 'x' before initialization
```

---

## 7. Hoisting com const

O comportamento é idêntico ao let, porém com uma restrição adicional: a variável deve ser inicializada obrigatoriamente.

Exemplo:

```javascript
console.log(pi);

const pi = 3.14;
```

Resultado:

```
ReferenceError
```

---

## 8. Comparação entre var, let e const

| Característica                     | var             | let   | const |
| ---------------------------------- | --------------- | ----- | ----- |
| Hoisting                           | Sim             | Sim   | Sim   |
| Inicialização automática           | Sim (undefined) | Não   | Não   |
| Permite acesso antes da declaração | Sim             | Não   | Não   |
| Permite reatribuição               | Sim             | Sim   | Não   |
| Escopo                             | Função          | Bloco | Bloco |

---

## 9. Hoisting com funções (Function Declaration)

Funções declaradas com a palavra-chave `function` são completamente elevadas.

Exemplo:

```javascript
saudacao();

function saudacao() {
    console.log("Olá mundo");
}
```

Resultado:

```
Olá mundo
```

Interpretação interna:

```javascript
function saudacao() {
    console.log("Olá mundo");
}

saudacao();
```

A função inteira é registrada na memória.

---

## 10. Hoisting com Function Expression

Function expressions são tratadas como variáveis.

Exemplo:

```javascript
saudacao();

var saudacao = function() {
    console.log("Olá");
};
```

Resultado:

```
TypeError: saudacao is not a function
```

Interpretação interna:

```javascript
var saudacao;

saudacao();

saudacao = function() {
    console.log("Olá");
};
```

A variável é elevada, mas não a função.

---

## 11. Hoisting com Arrow Functions

Arrow functions seguem o mesmo comportamento de function expressions.

Exemplo:

```javascript
teste();

var teste = () => {
    console.log("Teste");
};
```

Resultado:

```
TypeError
```

---

## 12. Hoisting dentro de funções

Cada função cria seu próprio contexto de execução.

Exemplo:

```javascript
function exemplo() {

    console.log(x);

    var x = 50;
}

exemplo();
```

Resultado:

```
undefined
```

Interpretação interna:

```javascript
function exemplo() {

    var x;

    console.log(x);

    x = 50;
}
```

---

## 13. Hoisting em escopo de bloco

Variáveis com let e const respeitam escopo de bloco.

Exemplo:

```javascript
{
    console.log(x);

    let x = 10;
}
```

Resultado:

```
ReferenceError
```

---

## 14. Prioridade do Hoisting

Ordem de prioridade:

1. Function declarations
2. var
3. let e const

Exemplo:

```javascript
console.log(a);

function a() {}

var a = 10;
```

Resultado:

```
function a() {}
```

---

## 15. Execution Context (Contexto de Execução)

Cada execução possui um contexto com duas fases:

### Memory Creation Phase

Memória é alocada:

```
variável var → undefined
função → referência completa
let/const → TDZ
```

### Execution Phase

Código é executado linha por linha.

---

## 16. Exemplo completo

Código:

```javascript
console.log(a);
console.log(b);
console.log(c);

var a = 1;
let b = 2;
const c = 3;
```

Resultado:

```
undefined
ReferenceError
ReferenceError
```

---

## 17. Exemplo avançado

```javascript
var x = 1;

function teste() {

    console.log(x);

    var x = 2;
}

teste();
```

Resultado:

```
undefined
```

---

## 18. Representação interna

O motor interpreta como:

```javascript
var x = 1;

function teste() {

    var x;

    console.log(x);

    x = 2;
}
```

---

## 19. Por que o hoisting existe

O hoisting existe devido ao modelo de compilação e execução do JavaScript, que precisa:

* Registrar variáveis
* Registrar funções
* Organizar escopos
* Gerenciar memória

Isso permite:

* Execução eficiente
* Controle de escopo
* Gerenciamento de memória

---

## 20. Boas práticas modernas

Evite var.

Prefira:

```javascript
const nome = "Carlos";
```

ou

```javascript
let idade = 25;
```

Nunca dependa de hoisting para funcionamento do código.

Declare sempre antes de usar.

---

## 21. Exemplo correto

```javascript
const nome = "João";

console.log(nome);
```

---

## 22. Exemplo incorreto

```javascript
console.log(nome);

var nome = "João";
```

Embora funcione, não é recomendável.

---

## 23. Exercício 1

Determine o resultado:

```javascript
console.log(x);

var x = 10;
```

Resposta:

```
undefined
```

---

## 24. Exercício 2

```javascript
console.log(y);

let y = 10;
```

Resposta:

```
ReferenceError
```

---

## 25. Exercício 3

```javascript
teste();

function teste() {
    console.log("OK");
}
```

Resposta:

```
OK
```

---

## 26. Exercício 4

```javascript
teste();

var teste = function() {
    console.log("OK");
};
```

Resposta:

```
TypeError
```

---

## 27. Conclusão

Hoisting é um mecanismo interno fundamental do JavaScript que:

* Registra declarações na memória antes da execução
* Afeta variáveis e funções
* Possui comportamentos diferentes dependendo da forma de declaração
* É essencial para compreender o funcionamento interno da linguagem

Seu entendimento é obrigatório para qualquer desenvolvedor JavaScript profissional.

---

## 28. Resumo Final

| Tipo                 | Hoisting | Pode acessar antes |
| -------------------- | -------- | ------------------ |
| var                  | Sim      | Sim                |
| let                  | Sim      | Não                |
| const                | Sim      | Não                |
| function declaration | Sim      | Sim                |
| function expression  | Parcial  | Não                |
| arrow function       | Parcial  | Não                |

---

## Fim do material

```

---

Se desejar, posso também:

- Converter em PDF didático
- Adicionar diagramas visuais do Execution Context
- Incluir exercícios avançados no nível de prova técnica ou entrevista profissional
```
