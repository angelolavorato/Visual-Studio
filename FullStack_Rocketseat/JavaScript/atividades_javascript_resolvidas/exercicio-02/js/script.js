const formConsumo = document.getElementById("formConsumo");
const resultado = document.getElementById("resultado");

formConsumo.addEventListener("submit", function (event) {
  event.preventDefault();

  const valorUnitario = Number(document.getElementById("valorUnitario").value);
  const quantidade = Number(document.getElementById("quantidade").value);

  resultado.className = "result-box";

  if (valorUnitario <= 0 || quantidade <= 0) {
    resultado.textContent = "Preencha os campos com valores maiores que zero.";
    resultado.classList.add("error");
    return;
  }

  const total = valorUnitario * quantidade;

  resultado.textContent = `O valor estimado do consumo mensal é R$ ${total.toFixed(2).replace(".", ",")}.`;
  resultado.classList.add("success");
});
