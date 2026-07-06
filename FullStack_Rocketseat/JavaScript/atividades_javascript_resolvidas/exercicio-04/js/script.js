const botaoClassificar = document.getElementById("btnClassificar");
const resultado = document.getElementById("resultado");

botaoClassificar.addEventListener("click", function () {
  const nota = Number(document.getElementById("nota").value);
  resultado.className = "result";

  if (nota < 0 || nota > 100 || Number.isNaN(nota)) {
    resultado.textContent = "Nota inválida. Digite um valor entre 0 e 100.";
    resultado.classList.add("error");
  } else if (nota >= 90) {
    resultado.textContent = `Nota ${nota}: desempenho Excelente.`;
    resultado.classList.add("excellent");
  } else if (nota >= 70) {
    resultado.textContent = `Nota ${nota}: desempenho Bom.`;
    resultado.classList.add("good");
  } else if (nota >= 50) {
    resultado.textContent = `Nota ${nota}: desempenho Regular.`;
    resultado.classList.add("regular");
  } else {
    resultado.textContent = `Nota ${nota}: desempenho Insuficiente.`;
    resultado.classList.add("insufficient");
  }
});
