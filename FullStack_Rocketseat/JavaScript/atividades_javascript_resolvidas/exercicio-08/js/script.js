const formAtendimento = document.getElementById("formAtendimento");
const mensagemFinal = document.getElementById("mensagemFinal");

function obterDescricaoMotivo(motivo) {
  switch (motivo) {
    case "suporte":
      return "Suporte técnico";
    case "financeiro":
      return "Financeiro";
    case "duvidas":
      return "Dúvidas gerais";
    default:
      return "";
  }
}

function gerarMensagem(nome, email, motivo) {
  const descricaoMotivo = obterDescricaoMotivo(motivo);

  return `Olá, ${nome}. Sua solicitação sobre ${descricaoMotivo} foi registrada. Em breve nossa equipe entrará em contato pelo e-mail ${email}.`;
}

formAtendimento.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const motivo = document.getElementById("motivo").value;

  mensagemFinal.className = "response-card";

  if (!nome || !email || !motivo) {
    mensagemFinal.textContent = "Preencha todos os campos antes de enviar a solicitação.";
    mensagemFinal.classList.add("error");
    return;
  }

  mensagemFinal.textContent = gerarMensagem(nome, email, motivo);
  mensagemFinal.classList.add("success");
});
