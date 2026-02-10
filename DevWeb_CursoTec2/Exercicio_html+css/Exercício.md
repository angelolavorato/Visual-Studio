# Exercício

Você deve criar uma **página web completa utilizando HTML e CSS**. O objetivo é construir uma página que apresente uma estrutura bem definida e estilização abrangente, abordando todos os conceitos principais de HTML e CSS que foram discutidos. A página final deve conter:

* Um **cabeçalho** com logo e menu de navegação.  
* Um **banner** com uma imagem de fundo, título e botão de chamada para ação.  
* Uma **seção de informações "Sobre Nós"** contendo um texto descritivo e uma imagem.  
* Uma **seção de serviços** com ícones ilustrativos.  
* Um **formulário de contato** completo, com campos para nome, email e mensagem.  
* Um **rodapé** simples, contendo informações sobre direitos autorais.

### **Instruções Passo a Passo**

#### Passo 1: Estrutura Básica do HTML**

Crie um arquivo chamado index.html. Comece criando a estrutura básica de um documento HTML:

1. Crie a estrutura inicial do HTML, utilizando \<\!DOCTYPE html\> para definir o tipo de documento.  
2. Defina o idioma como pt-br e inclua metadados essenciais (\<meta charset="UTF-8"\> e \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>).  
3. Crie o \<head\> para adicionar o título da página e linkar o arquivo CSS externo.  
4. Crie o \<body\>, onde o conteúdo da página será inserido.

#### **Passo 2: Criação do Cabeçalho**

Adicione um cabeçalho no início da página, contendo a logo da empresa e um menu de navegação.

1. Dentro do \<body\>, crie uma tag \<header\>.  
2. Dentro do \<header\>, crie uma \<div\> para conter a logo da empresa e insira a imagem correspondente.  
3. Crie um \<nav\> para o menu de navegação e, dentro dele, adicione uma lista não ordenada (\<ul\>) contendo links (\<li\> e \<a\>) para as seções da página.

#### **Passo 3: Criação do Banner**

Adicione um banner na página com uma imagem de fundo, um título e um botão de chamada para ação.

1. Adicione uma \<section\> após o cabeçalho, com a classe banner.  
2. Dentro dessa \<section\>, crie uma \<div\> chamada banner-content para centralizar o conteúdo do banner.  
3. Adicione um \<h1\> para o título, um \<p\> para o texto e um \<button\> para o botão de chamada para ação.

#### **Passo 4: Seção "Sobre Nós"**

Crie uma seção que descreva a empresa e mostre uma imagem ilustrativa.

1. Adicione uma \<section\> com o ID about e a classe about-section.  
2. Dentro dessa \<section\>, crie uma \<div\> com a classe container.  
3. Adicione um título \<h2\> e um parágrafo \<p\> para a descrição.  
4. Insira uma imagem com a tag \<img\>.

#### **Passo 5: Seção de Serviços**

Adicione uma seção para mostrar os serviços da empresa, usando ícones ilustrativos.

1. Crie uma \<section\> com o ID services e a classe services-section.  
2. Adicione uma \<div\> com a classe container.  
3. Dentro dessa \<div\>, crie múltiplas \<div\> com a classe service, cada uma contendo uma imagem, um título \<h3\>, e uma descrição \<p\>.

#### **Passo 6: Formulário de Contato**

Crie um formulário para que os usuários possam entrar em contato.

1. Adicione uma \<section\> com o ID contact e a classe contact-section.  
2. Dentro dessa \<section\>, crie uma \<div\> com a classe container.  
3. Adicione um formulário \<form\> com campos para nome, email e mensagem usando \<input\> e \<textarea\>.  
4. Adicione um botão \<button\> para enviar o formulário.

#### **Passo 7: Rodapé da Página**

Adicione um rodapé simples no final da página.

1. Crie uma \<footer\> e, dentro dela, adicione uma \<div\> com a classe container.  
2. Adicione um parágrafo \<p\> para mostrar os direitos reservados.

### **Passo 8: Estilização com CSS Detalhada**

Crie um arquivo chamado styles.css. Este arquivo conterá todas as regras de estilo que serão aplicadas ao HTML. O objetivo é utilizar os conceitos discutidos para transformar a estrutura HTML em uma página visualmente agradável. Abaixo, uma explicação detalhada de cada conceito e como aplicá-los:

#### **8.1 Reset Básico**

Antes de aplicar qualquer estilo, é importante adicionar um reset básico para remover margens, preenchimentos e bordas padrão dos navegadores, garantindo um layout uniforme.

* Utilize o seletor universal para definir a remoção de margens e preenchimentos padrão dos elementos.  
* Ajuste a propriedade que controla o cálculo das dimensões dos elementos, facilitando o controle de tamanhos.

  #### **8.2 Estilo Global e Tipografia**

Defina estilos globais para a página, como a tipografia, cores e propriedades padrão.

1. Escolha uma fonte adequada para o corpo da página, como sans-serif ou qualquer fonte que combine com o estilo desejado.  
2. Defina cores padrão para o texto e para o plano de fundo.  
3. Defina um espaçamento padrão entre linhas, garantindo uma leitura mais confortável.

   #### **8.3 Cabeçalho com Flexbox**

Para estruturar o cabeçalho, utilize Flexbox para organizar os elementos horizontalmente.

1. No cabeçalho, utilize o Flexbox para posicionar a logo e o menu de navegação de forma adequada.  
2. Alinhe verticalmente os elementos dentro do cabeçalho e defina um plano de fundo.  
3. Adicione espaçamento ao conteúdo para que o cabeçalho não fique sobrecarregado.

   #### **8.4 Estilização do Banner**

O banner deve ter uma imagem de fundo, texto centralizado e um botão de chamada para ação.

1. Utilize uma imagem de fundo e ajuste suas propriedades para que ela preencha o espaço desejado sem distorção.  
2. Centralize o conteúdo do banner utilizando Flexbox e defina cores adequadas para contraste.  
3. Ajuste o tamanho do texto do título e aplique estilos no botão de ação, como cores de fundo, bordas arredondadas e espaçamento.

   #### **8.5 Seção "Sobre Nós"**

Estilize a seção de "Sobre Nós" para incluir imagens e textos com uma disposição agradável.

1. Utilize Flexbox para organizar a imagem e o texto lado a lado.  
2. Defina espaçamentos adequados para os elementos e limite a largura do texto para uma melhor leitura.  
3. Aplique estilos visuais à imagem, como bordas arredondadas e sombra, para destacá-la na página.

   #### **8.6 Estilização da Seção de Serviços**

Os serviços serão apresentados em uma grade (grid) de ícones e textos.

1. Use a propriedade de grade (grid) para criar uma disposição responsiva dos elementos. A configuração deve garantir que os itens se ajustem automaticamente de acordo com o tamanho da tela.  
2. Adicione espaçamento, bordas e sombras aos itens de serviço para criar cartões visuais que se destaquem na página.

   #### **8.7 Estilização do Formulário de Contato**

Para o formulário, utilize uma disposição simples e elegante.

1. Defina larguras adequadas para os campos de entrada e utilize preenchimento para melhorar a experiência do usuário.  
2. Adicione um efeito visual quando o usuário estiver digitando nos campos, como mudança de cor na borda.  
3. Estilize o botão de envio com cores diferenciadas, bordas, e adicione um efeito ao passar o cursor sobre ele.

   #### **8.8 Rodapé da Página**

Finalize o rodapé com um estilo simples e direto.

1. Centralize o conteúdo do rodapé e adicione espaçamento adequado.  
2. Utilize um plano de fundo que contraste com o restante da página, adicionando um toque de estilo à finalização.

   #### **8.9 Manipulação de Tamanho de Imagens**

Para controlar o tamanho das imagens de forma eficaz:

1. Defina larguras e alturas específicas utilizando CSS, ajustando conforme o espaço desejado.  
2. Utilize propriedades para evitar que as imagens ultrapassem os limites do contêiner em dispositivos menores, garantindo uma adaptação responsiva.  
3. Ajuste a propriedade de preenchimento da imagem para garantir que ela ocupe o espaço disponível sem distorções, mantendo proporções corretas.
