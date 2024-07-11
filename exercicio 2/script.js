const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const num3 = parseFloat(prompt("Digite o terceiro número:"));
const num4 = parseFloat(prompt("Digite o quarto número:"));

// Calcula a média aritmética
const media = (num1 + num2 + num3 + num4) / 4;

// Exibe o resultado na página
const resultDiv = document.getElementById('result');
resultDiv.textContent = `A média aritmética dos números digitados é: ${media.toFixed(2)}`;