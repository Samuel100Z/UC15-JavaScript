const celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
const temperatura = celsius;

let mensagem = "";

if (temperatura < 15) {
  mensagem = "Está frio! 🥶";
} else if (temperatura <= 25) {
  mensagem = "O clima está agradável! 😊";
} else if (temperatura <= 35) {
  mensagem = "Está quente! 🥵";
} else {
  mensagem = "Está muito quente! 🔥";
}

document.getElementById("temperatura").textContent = "Temperatura informada: " + temperatura + "°C";
document.getElementById("mensagem").textContent = mensagem;

console.log("Temperatura informada:", temperatura + "°C");
console.log("Classificação:", mensagem);