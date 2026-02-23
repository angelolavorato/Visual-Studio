# Hoisting em JavaScript – Explicação Completa

## 1. Introdução

O **hoisting** é um comportamento interno do JavaScript no qual **declarações de variáveis e funções são movidas implicitamente para o topo de seu escopo durante a fase de compilação**, antes da execução do código.

É importante destacar que o JavaScript é uma linguagem **interpretada com compilação em duas fases**:

1. Fase de compilação (criação do contexto de execução)
2. Fase de execução do código

O hoisting ocorre na **fase de compilação**, não na fase de execução.

---

## 2. Conceito Fundamental

De forma simplificada:

> Hoisting é o processo no qual o JavaScript registra declarações de variáveis e funções antes de executar o código.

Isso significa que você pode, em alguns casos, usar variáveis ou funções antes de declará-las no código.

Exemplo:

```javascript
console.log(nome);

var nome = "João";