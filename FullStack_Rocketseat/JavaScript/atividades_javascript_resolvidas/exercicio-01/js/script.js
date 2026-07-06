const botaoAtualizar = document.getElementById("btnAtualizar");
const apresentacao = document.getElementById("apresentacao");

botaoAtualizar.addEventListener("click", function () {
  const nome = "Ana Silva";
  const idade = 17;
  const curso = "Técnico em Informática";
  const cidade = "Ubá - MG";

  const textoApresentacao = `Olá! Meu nome é ${nome}, tenho ${idade} anos, estudo no curso ${curso} e moro em ${cidade}. Estou iniciando meus estudos em desenvolvimento web com HTML, CSS e JavaScript.`;

  apresentacao.textContent = textoApresentacao;
});
