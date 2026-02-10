# Exercícios sobre conceitos básicos 09_10

## 1. Sintaxe Básica do CSS

### Exercício 1

Crie uma página HTML com três títulos (`h1`, `h2`, e `h3`) e um parágrafo. Estilize o título `h1` com uma cor diferente, o título `h2` com um tamanho de fonte maior e o título `h3` com uma fonte em itálico.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Exercício CSS</title>
</head>
<body>
    <h1>Título 1</h1>
    <h2>Título 2</h2>
    <h3>Título 3</h3>
    <p>Este é um parágrafo de exemplo.</p>
</body>
</html>
```

**CSS (`styles.css`):**

```css
h1 {
    color: blue;
}

h2 {
    font-size: 28px;
}

h3 {
    font-style: italic;
}
```

### Exercício 2

Crie dois parágrafos e aplique o estilo CSS inline (direto no arquivo HTML) para o primeiro parágrafo e o estilo externo (usando um arquivo CSS) para o segundo.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Exercício CSS</title>
</head>
<body>
    <p style="color: red; font-weight: bold;">Parágrafo com estilo inline.</p>
    <p class="externo">Parágrafo com estilo externo.</p>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.externo {
    color: green;
    font-size: 16px;
}
```

---

## 2. Seletores

### Exercício 1

Crie três botões no HTML e estilize cada um utilizando seletores de **atributo**, de **classe**, e de **ID**, aplicando cores diferentes a cada um.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Exercício Seletores</title>
</head>
<body>
    <button class="btn-classe">Botão Classe</button>
    <button id="btn-id">Botão ID</button>
    <button type="button">Botão Atributo</button>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.btn-classe {
    background-color: lightblue;
}

#btn-id {
    background-color: lightgreen;
}

button[type="button"] {
    background-color: lightcoral;
}
```

### Exercício 2

Crie uma lista não ordenada com cinco itens e use seletores de **tipo**, **pseudoclasse** e **seletor universal** para aplicar estilos diferentes.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Exercício Seletores</title>
</head>
<body>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>
</body>
</html>
```

**CSS (`styles.css`):**

```css
li {
    color: blue;
}

li:first-child {
    font-weight: bold;
}

* {
    margin: 10px;
}
```

---

## 3. Especificidade e Cascata

### Exercício 1

Crie um parágrafo com duas classes aplicadas a ele. Use a cascata para que a segunda classe sobrescreva a primeira e altere a cor do texto.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Especificidade CSS</title>
</head>
<body>
    <p class="primeira segunda">Este é um parágrafo estilizado com duas classes.</p>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.primeira {
    color: red;
}

.segunda {
    color: blue;
}
```

### Exercício 2

Crie um parágrafo estilizado por uma classe e um ID ao mesmo tempo, aplicando regras conflitantes. Observe a especificidade dos seletores para ver qual estilo prevalece.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Especificidade CSS</title>
</head>
<body>
    <p class="classe" id="identificador">Este parágrafo possui uma classe e um ID.</p>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.classe {
    color: green;
}

#identificador {
    color: purple;
}
```

---

## 4. Unidades de Medida em CSS

### Exercício 1

Crie uma div com largura definida em **porcentagem**, altura em **pixels**, e padding usando a unidade **rem**.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Unidades CSS</title>
</head>
<body>
    <div class="box">Caixa de exemplo</div>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.box {
    width: 50%;
    height: 200px;
    padding: 1.5rem;
    background-color: lightblue;
}
```

### Exercício 2

Crie um texto e defina seu tamanho de fonte usando **em**. Alterne entre valores de `em` para ajustar o tamanho da fonte em relação ao elemento pai.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Unidades CSS</title>
</head>
<body>
    <div class="container">
        <p class="normal-text">Texto com tamanho padrão.</p>
        <p class="larger-text">Texto com tamanho maior (em).</p>
    </div>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.normal-text {
    font-size: 1em;
}

.larger-text {
    font-size: 1.5em;
}
```

---

## 5. Box Model

### Exercício 1

Crie três caixas e aplique diferentes valores de **borda**, **padding**, e **margem** para cada uma delas.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Box Model CSS</title>
</head>
<body>
    <div class="box1">Caixa 1</div>
    <div class="box2">Caixa 2</div>
    <div class="box3">Caixa 3</div>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.box1 {
    border: 2px solid black;
    padding: 10px;
    margin: 5px;
}

.box2 {
    border: 4px solid blue;
    padding: 20px;
    margin: 10px;
}

.box3 {
    border: 6px solid red;
    padding: 30px;
    margin: 15px;
}
```

### Exercício 2

Crie uma caixa e aplique a propriedade **box-sizing: border-box** para ajustar o tamanho da caixa levando em consideração a borda e o padding.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Box Model CSS</title>
</head>
<body>
    <div class="box-border-box">Caixa com border-box</div>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.box-border-box {
    width: 300px;
    height: 150px;
    padding: 20px;
    border: 5px solid black;
    background-color: lightgray;
    box-sizing: border-box;
}
```

---

## 6. Posicionamento e Layout

### Exercício 1

Crie um layout básico com dois blocos posicionados usando **position: relative** e **position: absolute**.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Posicionamento CSS</title>
</head>
<body>
    <div class="parent">
        <div class="child">Elemento Absoluto</div>
    </div>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.parent {
    position: relative;
    width: 300px;
    height

: 200px;
    background-color: lightblue;
}

.child {
    position: absolute;
    top: 50px;
    left: 50px;
    background-color: lightgreen;
    width: 100px;
    height: 50px;
}
```

### Exercício 2

Crie um layout flexível utilizando **display: flex** para organizar três caixas em linha.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Flexbox CSS</title>
</head>
<body>
    <div class="container">
        <div class="box">Caixa 1</div>
        <div class="box">Caixa 2</div>
        <div class="box">Caixa 3</div>
    </div>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.container {
    display: flex;
}

.box {
    width: 100px;
    height: 100px;
    background-color: lightcoral;
    margin: 5px;
}
```

---

## 7. Tipografia

### Exercício 1

Crie um parágrafo com uma fonte personalizada usando a propriedade **font-family**. Experimente definir fontes alternativas caso a primeira não esteja disponível.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Tipografia CSS</title>
</head>
<body>
    <p class="texto">Texto com fontes personalizadas.</p>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.texto {
    font-family: "Arial", "Helvetica", sans-serif;
}
```

### Exercício 2

Ajuste o **espaçamento entre linhas** (line-height) e o **espaçamento entre letras** (letter-spacing) de um parágrafo.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Tipografia CSS</title>
</head>
<body>
    <p class="spacing">Texto com espaçamento ajustado entre linhas e letras.</p>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.spacing {
    line-height: 1.8;
    letter-spacing: 2px;
}
```

---

## 8. Cores e Fundos

### Exercício 1

Crie três blocos com diferentes cores de fundo (background-color) e aplique um **gradiente linear** a um dos blocos.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Cores e Fundos CSS</title>
</head>
<body>
    <div class="bloco1">Bloco 1</div>
    <div class="bloco2">Bloco 2</div>
    <div class="bloco3">Bloco 3</div>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.bloco1 {
    background-color: red;
    width: 100px;
    height: 100px;
}

.bloco2 {
    background-color: blue;
    width: 100px;
    height: 100px;
}

.bloco3 {
    background: linear-gradient(to right, red, yellow);
    width: 100px;
    height: 100px;
}
```

### Exercício 2

Aplique uma **imagem de fundo** a uma div, ajustando o posicionamento e o dimensionamento da imagem.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Imagem de Fundo CSS</title>
</head>
<body>
    <div class="fundo">Texto sobre imagem de fundo</div>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.fundo {
    background-image: url('caminho-da-imagem.jpg');
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 200px;
}
```

---

## 9. Animações e Transições

### Exercício 1

Crie um botão que muda de cor quando o mouse passa sobre ele usando **transições** para suavizar a mudança.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Transições CSS</title>
</head>
<body>
    <button class="transicao">Passe o mouse</button>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.transicao {
    background-color: lightblue;
    padding: 10px;
    transition: background-color 0.3s ease;
}

.transicao:hover {
    background-color: blue;
}
```

### Exercício 2

Crie um círculo que se move da esquerda para a direita em uma animação contínua usando a propriedade **@keyframes**.

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Animação CSS</title>
</head>
<body>
    <div class="circulo"></div>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.circulo {
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    animation: mover 5s infinite;
}

@keyframes mover {
    0% {
        left: 0;
    }
    100% {
        left: 300px;
    }
}
```
