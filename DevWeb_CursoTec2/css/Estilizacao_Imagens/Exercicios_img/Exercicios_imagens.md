# Exercícios de fixação sobre manipulação de imagens com HTML e CSS

---

## Exercício 1: Inserção de Imagem Básica

Crie uma página HTML com uma imagem centralizada. A imagem deve usar a tag `<img>`, com um `src` apontando para o arquivo da imagem e um `alt` com uma descrição adequada.

---

## Exercício 2: Imagem Responsiva

Adicione uma imagem à página que se ajuste automaticamente ao tamanho da janela. Utilize CSS para torná-la responsiva, definindo `max-width: 100%` e `height: auto`.

---

## Exercício 3: Estilização de Imagem com CSS

Insira uma imagem e, usando CSS, aplique:

- Uma borda de 5px sólida,
- Bordas arredondadas de 10px,
- Uma sombra leve.

---

## Exercício 4: Imagem como Fundo de Elemento

Crie uma `div` com texto dentro e configure uma imagem como fundo dessa `div` usando `background-image`. Ajuste o fundo para cobrir toda a área da `div` (`background-size: cover`) e centralize a imagem (`background-position: center`).

---

## Exercício 5: Sprite de Imagem

Crie uma `div` com 50px por 50px e use um sprite como fundo. Posicione o fundo para exibir apenas uma parte do sprite usando `background-position`.

---

## Exercício 6: Imagem SVG em HTML

Insira uma imagem SVG diretamente no HTML. Use o código SVG (como um círculo ou ícone simples) e aplique um estilo CSS que altere a cor do SVG.

---

## Exercício 7: Filtro CSS em Imagem

Adicione uma imagem e aplique um filtro CSS para deixá-la em escala de cinza. Em seguida, adicione outro filtro para um efeito de desfoque (`blur`), criando duas imagens diferentes com esses efeitos.

---

## Exercício 8: Lazy Loading

Crie uma página com duas imagens grandes que não aparecem imediatamente na tela. Configure ambas com `loading="lazy"` para que carreguem somente quando o usuário rolar até elas.

---

## Exercício 9: Imagem Informativa vs. Decorativa

Adicione duas imagens à página: uma que tenha uma função informativa, com uma descrição significativa no `alt`, e outra puramente decorativa, com o `alt` vazio. Escreva um breve texto explicando o uso de cada imagem.

---

## Exercício 10: Acessibilidade e SEO de Imagens

Escolha uma imagem representativa para o conteúdo de uma página e adicione um `alt` descritivo que seja útil tanto para acessibilidade quanto para SEO. Inclua um título no HTML (`<h1>` ou `<h2>`) que complemente o conteúdo visual da imagem.

Aqui estão as respostas para os exercícios sobre manipulação de imagens com HTML e CSS. Cada exemplo de código implementa uma solução baseada nas especificações de cada exercício.

---

### Exercício 1: Inserção de Imagem Básica

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>Inserção de Imagem Básica</title>
</head>
<body>
    <h1>Imagem de Exemplo</h1>
    <img src="caminho-da-imagem.jpg" alt="Descrição da imagem" style="display: block; margin: 0 auto;">
</body>
</html>
```

---

### Exercício 2: Imagem Responsiva

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Imagem Responsiva</title>
</head>
<body>
    <h1>Imagem Responsiva</h1>
    <img src="caminho-da-imagem.jpg" alt="Descrição da imagem" class="imagem-responsiva">
</body>
</html>
```

**CSS (`styles.css`):**

```css
.imagem-responsiva {
    max-width: 100%;
    height: auto;
}
```

---

### Exercício 3: Estilização de Imagem com CSS

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Estilização de Imagem</title>
</head>
<body>
    <h1>Imagem com Estilos</h1>
    <img src="caminho-da-imagem.jpg" alt="Descrição da imagem" class="imagem-estilizada">
</body>
</html>
```

**CSS (`styles.css`):**

```css
.imagem-estilizada {
    border: 5px solid black;
    border-radius: 10px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
}
```

---

### Exercício 4: Imagem como Fundo de Elemento

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Imagem de Fundo</title>
</head>
<body>
    <h1>Imagem de Fundo</h1>
    <div class="fundo-imagem">
        Texto sobre a imagem de fundo
    </div>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.fundo-imagem {
    background-image: url('caminho-da-imagem.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 300px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}
```

---

### Exercício 5: Sprite de Imagem

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Sprite de Imagem</title>
</head>
<body>
    <h1>Exemplo de Sprite</h1>
    <div class="sprite"></div>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.sprite {
    width: 50px;
    height: 50px;
    background-image: url('caminho-do-sprite.png');
    background-position: -50px 0;
    background-size: 200px 50px;
}
```

---

### Exercício 6: Imagem SVG em HTML

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Imagem SVG</title>
</head>
<body>
    <h1>Imagem SVG</h1>
    <svg width="100" height="100" class="svg-exemplo">
        <circle cx="50" cy="50" r="40" fill="blue" />
    </svg>
</body>
</html>
```

**CSS (`styles.css`):**

```css
.svg-exemplo {
    border: 2px solid black;
}
```

---

### Exercício 7: Filtro CSS em Imagem

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Filtros CSS</title>
</head>
<body>
    <h1>Filtros CSS</h1>
    <img src="caminho-da-imagem.jpg" alt="Descrição da imagem" class="imagem-cinza">
    <img src="caminho-da-imagem.jpg" alt="Descrição da imagem" class="imagem-desfocada">
</body>
</html>
```

**CSS (`styles.css`):**

```css
.imagem-cinza {
    filter: grayscale(100%);
}

.imagem-desfocada {
    filter: blur(5px);
}
```

---

### Exercício 8: Lazy Loading

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>Lazy Loading</title>
</head>
<body>
    <h1>Lazy Loading de Imagens</h1>
    <p>Desça para ver as imagens carregando...</p>
    <img src="imagem1.jpg" alt="Imagem 1" loading="lazy">
    <img src="imagem2.jpg" alt="Imagem 2" loading="lazy">
</body>
</html>
```

---

### Exercício 9: Imagem Informativa vs. Decorativa

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>Imagem Informativa e Decorativa</title>
</head>
<body>
    <h1>Exemplo de Imagens Informativas e Decorativas</h1>
    <img src="informativa.jpg" alt="Mapa do Brasil mostrando as regiões">
    <img src="decorativa.jpg" alt="" class="imagem-decorativa">
</body>
</html>
```

**CSS (`styles.css`):**

```css
.imagem-decorativa {
    width: 150px;
    height: auto;
}
```

---

### Exercício 10: Acessibilidade e SEO de Imagens

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>Acessibilidade e SEO</title>
</head>
<body>
    <h1>Uma Paisagem Natural</h1>
    <img src="paisagem.jpg" alt="Imagem de uma floresta com árvores e montanhas ao fundo">
</body>
</html>
```
