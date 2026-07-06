const botaoConverter = document.getElementById("btnConverter");
const resultado = document.getElementById("resultado");

function converterTemperatura(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

botaoConverter.addEventListener("click", function () {
  const campoCelsius = document.getElementById("celsius").value;
  resultado.className = "result";

  if (!campoCelsius && campoCelsius !== "0") {
    resultado.textContent = "Digite uma temperatura válida antes de converter.";
    resultado.classList.add("error");
    return;
  }

  const celsius = Number(campoCelsius);
  const fahrenheit = converterTemperatura(celsius);

  resultado.textContent = `${celsius} °C equivalem a ${fahrenheit.toFixed(1)} °F.`;
  resultado.classList.add("success");
});
