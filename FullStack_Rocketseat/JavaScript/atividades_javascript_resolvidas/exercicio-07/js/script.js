const botaoTema = document.getElementById("btnTema");
const corpoPagina = document.body;

botaoTema.addEventListener("click", function () {
  corpoPagina.classList.toggle("dark-theme");

  const temaEscuroAtivo = corpoPagina.classList.contains("dark-theme");

  if (temaEscuroAtivo) {
    botaoTema.textContent = "Ativar tema claro";
  } else {
    botaoTema.textContent = "Ativar tema escuro";
  }
});
