const botoesPlano = document.querySelectorAll("button[data-plano]");
const mensagemPlano = document.getElementById("mensagemPlano");

function apresentarPlano(plano) {
  let mensagem = "";

  switch (plano) {
    case "basico":
      mensagem = "Você escolheu o Plano Básico. Este plano inclui acesso individual, qualidade padrão e catálogo essencial.";
      break;
    case "padrao":
      mensagem = "Você escolheu o Plano Padrão. Este plano inclui duas telas simultâneas, qualidade HD e catálogo completo.";
      break;
    case "premium":
      mensagem = "Você escolheu o Plano Premium. Este plano inclui quatro telas, qualidade 4K e suporte prioritário.";
      break;
    default:
      mensagem = "Plano não identificado. Selecione uma opção válida.";
  }

  mensagemPlano.textContent = mensagem;
}

botoesPlano.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const planoSelecionado = botao.dataset.plano;
    apresentarPlano(planoSelecionado);
  });
});
