const botaoVerificar = document.getElementById("btnVerificar");
const mensagem = document.getElementById("mensagem");

botaoVerificar.addEventListener("click", function () {
  const campoIdade = document.getElementById("idade").value;
  mensagem.className = "message";

  // Validação com base em valor falsy: string vazia é avaliada como falso.
  if (!campoIdade) {
    mensagem.textContent = "Informe uma idade antes de realizar a verificação.";
    mensagem.classList.add("warning");
    return;
  }

  const idade = Number(campoIdade);

  if (idade >= 18) {
    mensagem.textContent = "Acesso permitido. Usuário autorizado para acessar o conteúdo.";
    mensagem.classList.add("allowed");
  } else {
    mensagem.textContent = "Acesso negado. O usuário precisa ter pelo menos 18 anos.";
    mensagem.classList.add("denied");
  }
});
