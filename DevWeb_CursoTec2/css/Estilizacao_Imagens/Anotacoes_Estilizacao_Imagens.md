# Manipulação de Imagens com HTML e CSS

## Parte 1: Conceitos Teóricos

1. **Inserção de Imagens com HTML**
   - A tag `<img>` é utilizada para inserir imagens em um documento HTML. Os atributos `src` e `alt` são essenciais, onde `src` especifica o caminho da imagem e `alt` fornece uma descrição alternativa que é útil para acessibilidade e SEO.

2. **Responsividade de Imagens**
   - Imagens responsivas se ajustam automaticamente ao tamanho do contêiner pai. Isso pode ser alcançado usando a propriedade CSS `max-width: 100%` e `height: auto`, permitindo que as imagens mantenham suas proporções ao redimensionar.

3. **Estilização de Imagens com CSS**
   - Você pode aplicar estilos às imagens utilizando CSS, como bordas, sombras, e bordas arredondadas. Isso permite que você personaliza a aparência visual das imagens em sua página.

4. **Imagens como Fundos**
   - O CSS permite que imagens sejam usadas como fundos de elementos, utilizando a propriedade `background-image`. Isso é útil para criar seções visualmente atraentes em uma página.

5. **Sprites de Imagem**
   - Sprites são uma técnica que combina várias imagens em um único arquivo para reduzir o número de requisições HTTP. Você pode exibir partes do sprite usando a propriedade `background-position`.

6. **SVG (Scalable Vector Graphics)**
   - SVG é um formato de imagem vetorial que pode ser redimensionado sem perda de qualidade. Ele é utilizado para gráficos e ícones escaláveis, sendo uma escolha popular para design responsivo.

7. **Manipulação de Imagens com Filtros CSS**
   - O CSS oferece uma variedade de filtros que podem ser aplicados às imagens, como `grayscale`, `blur`, e `sepia`. Esses filtros ajudam a modificar visualmente as imagens diretamente no CSS.

8. **Lazy Loading de Imagens**
   - Lazy loading é uma técnica que adia o carregamento de imagens até que elas estejam prestes a entrar na tela do usuário. Isso melhora o desempenho da página, especialmente em sites com muitas imagens.

9. **Imagens Decorativas vs. Imagens Informativas**
   - É importante distinguir entre imagens que têm um significado informativo e aquelas que são apenas decorativas. As imagens decorativas devem ter um atributo `alt` vazio para que leitores de tela as ignorem.

10. **Acessibilidade e SEO**
    - Usar o atributo `alt` corretamente nas imagens é crucial para acessibilidade e otimização para motores de busca (SEO). Uma descrição adequada ajuda usuários com deficiência visual e também melhora a indexação das imagens nos motores de busca.

## Parte 2: Exemplos Práticos

Agora, vamos ver exemplos práticos que ilustram cada um dos conceitos mencionados.

### 1. Inserção de Imagens com HTML

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>Inserção de Imagens</title>
</head>
<body>
    <h1>Exemplo de Imagem</h1>
    <img src="caminho-da-imagem.jpg" alt="Descrição da imagem" width="300" height="200">
</body>
</html>
```

#### 2. Responsividade de Imagens

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Responsividade de Imagens</title>
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

#### 3. Estilização de Imagens com CSS

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Estilização de Imagens</title>
</head>
<body>
    <h1>Estilização de Imagens</h1>
    <img src="caminho-da-imagem.jpg" alt="Descrição da imagem" class="imagem-estilizada">
</body>
</html>
```

**CSS (`styles.css`):**

```css
.imagem-estilizada {
    border: 5px solid black;
    box-shadow: 10px 10px 5px grey;
    border-radius: 15px;
}
```

#### 4. Imagens como Fundos

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Imagens como Fundos</title>
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

#### 5. Sprites de Imagem

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Sprites de Imagem</title>
</head>
<body>
    <h1>Sprite de Imagem</h1>
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

#### 6. SVG (Scalable Vector Graphics)

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>SVG</title>
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

#### 7. Manipulação de Imagens com Filtros CSS

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
    <img src="caminho-da-imagem.jpg" alt="Descrição da imagem" class="imagem-filtro">
</body>
</html>
```

**CSS (`styles.css`):**

```css
.imagem-filtro {
    filter: grayscale(100%);
}
```

#### 8. Lazy Loading de Imagens

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Lazy Loading</title>
</head>
<body>
    <h1>Lazy Loading de Imagens</h1>
    <img src="caminho-da-imagem.jpg" alt="Descrição da imagem" loading="lazy">
</body>
</html>
```

#### 9. Imagens Decorativas vs. Imagens Informativas

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Imagens Decorativas e Informativas</title>
</head>
<body>
    <h1>Exemplo de Imagens Decorativas e Informativas</h1>
    <img src="caminho-da-imagem.jpg" alt="Descrição da imagem informativa">
    <img src="caminho-da-imagem-decorativa.jpg" alt="" class="decorativa">
</body>
</html>
```

**CSS (`styles.css`):**

```css
.decorativa {
    width: 100px;
    height: auto;
}
```

#### 10. Acessibilidade e SEO

**HTML (`index.html`):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
    <title>Acessibilidade e SEO</title>
</head>
<body>
    <

h1>Acessibilidade e SEO</h1>
    <img src="caminho-da-imagem.jpg" alt="Uma descrição que ajuda na acessibilidade e SEO">
</body>
</html>
```
