### **Enunciado do Exercício**

Você deve criar uma **página web completa utilizando HTML e CSS**. O objetivo é construir uma página que apresente uma estrutura bem definida e estilização abrangente, abordando todos os conceitos principais de HTML e CSS que foram discutidos. A página final deve conter:

- Um **cabeçalho** com logo e menu de navegação.
- Um **banner** com uma imagem de fundo, título e botão de chamada para ação.
- Uma **seção de informações "Sobre Nós"** contendo um texto descritivo e uma imagem.
- Uma **seção de serviços** com ícones ilustrativos.
- Um **formulário de contato** completo, com campos para nome, email e mensagem.
- Um **rodapé** simples, contendo informações sobre direitos autorais.

### **Instruções Passo a Passo**

#### **Passo 1: Estrutura Básica do HTML**

Crie um arquivo chamado `index.html`. Comece criando a estrutura básica de um documento HTML:

1. Crie a estrutura inicial do HTML, usando `<!DOCTYPE html>` para definir o tipo de documento.
2. Defina o idioma como `pt-br` e inclua metadados essenciais (`<meta charset="UTF-8">` e `<meta name="viewport" content="width=device-width, initial-scale=1.0">`).
3. Crie o `<head>` para adicionar o título da página e linkar o arquivo CSS externo.
4. Crie o `<body>`, onde o conteúdo da página será inserido.

**Exemplo:**
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício de HTML e CSS Completo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Conteúdo será adicionado aqui -->
</body>
</html>
```

#### **Passo 2: Criação do Cabeçalho**

Adicione um cabeçalho no início da página, contendo a logo da empresa e um menu de navegação.

1. Dentro do `<body>`, crie uma tag `<header>`.
2. Dentro do `<header>`, crie uma `<div>` para conter a logo da empresa e insira a tag `<img>` para adicionar a imagem.
3. Crie um `<nav>` para o menu de navegação e, dentro dele, adicione uma lista não ordenada (`<ul>`) contendo links (`<li>` e `<a>`) para as seções da página.

**Exemplo:**

```html
<header>
    <div class="logo">
        <img src="logo.png" alt="Logo da Empresa">
    </div>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>
    </nav>
</header>
```

#### **Passo 3: Criação do Banner**

Adicione um banner na página com uma imagem de fundo, um título e um botão de chamada para ação.

1. Adicione uma tag `<section>` após o cabeçalho, com a classe `banner`.
2. Dentro dessa `<section>`, crie uma `<div>` chamada `banner-content` para centralizar o conteúdo do banner.
3. Adicione um `<h1>` para o título, um `<p>` para o texto e um `<button>` para o botão de chamada para ação.

**Exemplo:**

```html
<section class="banner">
    <div class="banner-content">
        <h1>Bem-vindo ao Nosso Site!</h1>
        <p>Explore todos os nossos serviços e saiba mais sobre o que oferecemos.</p>
        <button class="cta-button">Saiba Mais</button>
    </div>
</section>
```

#### **Passo 4: Seção "Sobre Nós"**

Crie uma seção que descreva a empresa e mostre uma imagem ilustrativa.

1. Adicione uma `<section>` com o ID `about` e a classe `about-section`.
2. Dentro dessa `<section>`, crie uma `<div>` com a classe `container`.
3. Adicione um título `<h2>` e um parágrafo `<p>` para a descrição.
4. Insira uma imagem com a tag `<img>`.

**Exemplo:**

```html
<section id="about" class="about-section">
    <div class="container">
        <h2>Sobre Nós</h2>
        <p>Somos uma empresa dedicada a oferecer soluções personalizadas para cada cliente. Nossa equipe está preparada para atender às suas necessidades.</p>
        <img src="team.jpg" alt="Equipe da Empresa">
    </div>
</section>
```

#### **Passo 5: Seção de Serviços**
Adicione uma seção para mostrar os serviços da empresa, usando ícones ilustrativos.

1. Crie uma `<section>` com o ID `services` e a classe `services-section`.
2. Adicione uma `<div>` com a classe `container`.
3. Dentro dessa `<div>`, crie múltiplas `<div>` com a classe `service`, cada uma contendo uma imagem SVG, um título `<h3>`, e uma descrição `<p>`.

**Exemplo:**
```html
<section id="services" class="services-section">
    <div class="container">
        <h2>Nossos Serviços</h2>
        <div class="service">
            <img src="service1.svg" alt="Serviço 1">
            <h3>Consultoria</h3>
            <p>Oferecemos consultoria especializada em várias áreas.</p>
        </div>
        <!-- Repita a estrutura para mais serviços -->
    </div>
</section>
```

#### **Passo 6: Formulário de Contato**
Crie um formulário para que os usuários possam entrar em contato.

1. Adicione uma `<section>` com o ID `contact` e a classe `contact-section`.
2. Dentro dessa `<section>`, crie uma `<div>` com a classe `container`.
3. Adicione um formulário `<form>` com campos para nome, email e mensagem usando `<input>` e `<textarea>`.
4. Adicione um botão `<button>` para enviar o formulário.

**Exemplo:**
```html
<section id="contact" class="contact-section">
    <div class="container">
        <h2>Entre em Contato</h2>
        <form action="#" method="post">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" required>
            
            <label for="message">Mensagem:</label>
            <textarea id="message" name="message" placeholder="Escreva sua mensagem" required></textarea>
            
            <button type="submit">Enviar</button>
        </form>
    </div>
</section>
```

#### **Passo 7: Rodapé da Página**
Adicione um rodapé simples no final da página.

1. Crie uma `<footer>` e, dentro dela, adicione uma `<div>` com a classe `container`.
2. Adicione um parágrafo `<p>` para mostrar os direitos reservados.

**Exemplo:**
```html
<footer>
    <div class="container">
        <p>&copy; 2024 - Todos os direitos reservados.</p>
    </div>
</footer>
```

#### **Passo 8: Estilização com CSS**
Crie um arquivo `styles.css` e siga o exemplo de estilização apresentado anteriormente, cobrindo todos os tópicos:

- **Reset Básico** para uniformizar o layout.
- **Estruturação** com Flexbox para o cabeçalho e layout das seções.
- **Box Model** para espaçamentos e bordas.
- **Tipografia**, **cores**, e **gradientes** para personalização visual.
- **Manipulação de Imagens** para dimensionamento e ajustes de visibilidade.

### **Conclusão**

Este exercício abrange a criação completa de uma página web, desde a estruturação até a estilização avançada com CSS, cobrindo todos os tópicos discutidos. Seguir o passo a passo é uma excelente forma de praticar e consolidar os conhecimentos adquiridos. Se precisar de mais detalhes ou ajustes, estou à disposição!

### **Passo 8: Estilização com CSS Detalhada**

Crie um arquivo chamado `styles.css`. Este arquivo conterá todas as regras de estilo que serão aplicadas ao HTML. O objetivo é utilizar os conceitos discutidos para transformar a estrutura HTML em uma página visualmente agradável. Abaixo, uma explicação detalhada de cada conceito e como aplicá-los:

#### **8.1 Reset Básico**
Antes de aplicar qualquer estilo, é importante adicionar um reset básico para remover margens, preenchimentos e bordas padrão dos navegadores, garantindo um layout uniforme.

- Utilize o seletor universal (`*`) para definir `margin` e `padding` como `0`.
- Ajuste a propriedade `box-sizing` para `border-box` em todos os elementos para facilitar o controle de dimensões.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

#### **8.2 Estilo Global e Tipografia**
Defina estilos globais para a página, como a tipografia, cores, e propriedades padrão.

1. Escolha uma fonte adequada para o corpo da página, como `sans-serif`.
2. Defina cores padrão para o texto (`color`) e para o plano de fundo (`background-color`).
3. Defina um espaçamento padrão entre linhas utilizando `line-height`.

```css
body {
    font-family: 'Arial', sans-serif;
    color: #333;
    background-color: #f4f4f4;
    line-height: 1.6;
}
```

#### **8.3 Cabeçalho com Flexbox**
Para estruturar o cabeçalho, utilize Flexbox, centralizando os elementos horizontalmente.

1. No `<header>`, utilize `display: flex` e `justify-content: space-between` para posicionar a logo à esquerda e o menu de navegação à direita.
2. Utilize `align-items: center` para alinhar os itens verticalmente no centro do cabeçalho.
3. Defina um `background-color` e um `padding` para o cabeçalho.

```css
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 10px 20px;
    color: white;
}
```

#### **8.4 Estilização do Banner**
O banner deve ter uma imagem de fundo, texto centralizado e um botão de chamada para ação.

1. Use `background-image` no seletor da classe do banner para definir uma imagem de fundo.
2. Defina propriedades como `background-size: cover` e `background-position: center` para ajustar a imagem.
3. Utilize Flexbox para centralizar o conteúdo do banner com `justify-content: center` e `align-items: center`.
4. Defina tamanhos e cores personalizadas para o título e o botão.

```css
.banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background-image: url('banner.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
}
```

#### **8.5 Seção "Sobre Nós"**
Estilize a seção de "Sobre Nós" para incluir imagens e textos com uma disposição agradável.

1. Utilize `display: flex` para organizar a imagem e o texto lado a lado.
2. Defina `padding` e `margin` para espaçar os elementos e utilizar um `max-width` para o texto.
3. Adicione uma borda arredondada e `box-shadow` à imagem para destacar visualmente.

```css
.about-section {
    display: flex;
    padding: 40px 20px;
    background-color: #fff;
}

.about-section img {
    max-width: 50%;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-right: 20px;
}
```

#### **8.6 Estilização da Seção de Serviços**
Os serviços serão apresentados em uma grade (grid) de ícones e textos.

1. Use `display: grid` para criar uma grade responsiva. Defina `grid-template-columns` com valores `repeat(auto-fit, minmax(200px, 1fr))` para garantir que os itens se ajustem conforme o tamanho da tela.
2. Adicione `padding`, `border`, e `box-shadow` nos itens de serviço para criar cartões visuais.

```css
.services-section {
    padding: 60px 20px;
    background-color: #f8f8f8;
}

.service {
    background-color: white;
    padding: 20px;
    margin: 10px;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}
```

#### **8.7 Estilização do Formulário de Contato**
Para o formulário, utilize uma disposição simples e elegante.

1. Defina larguras adequadas para os campos de entrada, use `padding` para melhor espaçamento e `border-radius` para bordas arredondadas.
2. Adicione `focus` nos campos de entrada para destacar o campo ativo.
3. Estilize o botão de envio com cores, tamanhos e efeitos de `hover`.

```css
form input, form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

form input:focus, form textarea:focus {
    border-color: #555;
    outline: none;
}

form button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
}
```

#### **8.8 Rodapé da Página**
Finalize o rodapé com um estilo simples e direto.

1. Utilize `text-align: center` para centralizar o conteúdo e adicione um `padding` vertical.
2. Defina um `background-color` mais escuro para contraste com o restante da página.

```css
footer {
    background-color: #222;
    color: #bbb;
    text-align: center;
    padding: 20px 0;
}
```

#### **8.9 Manipulação de Tamanho de Imagens**
Para controlar o tamanho das imagens de forma eficaz:

1. Defina larguras e alturas específicas utilizando CSS, ajustando para `width` e `height` diretamente nas imagens.
2. Use a propriedade `max-width` para evitar que a imagem ultrapasse o contêiner em dispositivos menores.
3. Utilize `object-fit: cover` quando quiser que a imagem se ajuste ao espaço disponível sem distorção.

```css
img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
}
```