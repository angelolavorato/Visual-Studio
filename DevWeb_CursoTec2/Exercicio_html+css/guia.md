### **Arquivo HTML (`index.html`)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Completo - Página Web</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Cabeçalho -->
    <header>
        <div class="logo">
            <h1>Minha Página Web</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre Nós</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    </header>

    <!-- Banner -->
    <section class="banner">
        <div class="banner-content">
            <h2>Bem-vindo à Nossa Página</h2>
            <p>Aqui você encontra todas as informações sobre nossos serviços.</p>
            <button>Saiba Mais</button>
        </div>
    </section>

    <!-- Seção Sobre Nós -->
    <section id="about" class="about">
        <div class="about-content">
            <img src="exemplo.jpg" alt="Imagem de Exemplo">
            <div>
                <h2>Sobre Nós</h2>
                <p>Somos uma empresa dedicada a fornecer os melhores serviços para nossos clientes, sempre priorizando qualidade e excelência.</p>
            </div>
        </div>
    </section>

    <!-- Seção de Serviços -->
    <section id="services" class="services">
        <h2>Nossos Serviços</h2>
        <div class="service-items">
            <div class="service-item">
                <h3>Serviço 1</h3>
                <p>Descrição do serviço 1.</p>
            </div>
            <div class="service-item">
                <h3>Serviço 2</h3>
                <p>Descrição do serviço 2.</p>
            </div>
            <div class="service-item">
                <h3>Serviço 3</h3>
                <p>Descrição do serviço 3.</p>
            </div>
        </div>
    </section>

    <!-- Formulário de Contato -->
    <section id="contact" class="contact">
        <h2>Entre em Contato</h2>
        <form>
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Mensagem:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Enviar</button>
        </form>
    </section>

    <!-- Rodapé -->
    <footer>
        <p>&copy; 2024 Minha Página Web. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```

### **Arquivo CSS (`styles.css`)**

```css
/* Reset Básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilo Global */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;
}

/* Cabeçalho */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 1rem 2rem;
}

header .logo h1 {
    margin: 0;
}

nav ul {
    list-style-type: none;
    display: flex;
}

nav ul li {
    margin-left: 1.5rem;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

nav ul li a:hover {
    text-decoration: underline;
}

/* Banner */
.banner {
    background-image: url('banner.jpg');
    background-size: cover;
    background-position: center;
    color: #fff;
    text-align: center;
    padding: 4rem 2rem;
}

.banner-content {
    max-width: 600px;
    margin: 0 auto;
}

.banner button {
    background-color: #ff5733;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 1rem;
}

.banner button:hover {
    background-color: #e64a19;
}

/* Sobre Nós */
.about {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    background-color: #fff;
}

.about-content {
    display: flex;
    align-items: center;
}

.about-content img {
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-right: 2rem;
}

/* Serviços */
.services {
    background-color: #f1f1f1;
    padding: 2rem;
    text-align: center;
}

.service-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.service-item {
    background-color: #fff;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Formulário de Contato */
.contact {
    background-color: #fff;
    padding: 2rem;
}

.contact form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.contact label {
    margin: 0.5rem 0 0.2rem;
}

.contact input,
.contact textarea {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.contact button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
}

.contact button:hover {
    background-color: #555;
}

/* Rodapé */
footer {
    text-align: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
}

/* Manipulação de Tamanho de Imagens */
img {
    max-width: 100%;
    height: auto;
}
```
