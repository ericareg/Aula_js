// Pede a altura de um degrau em metros
const alturaDegrau = parseFloat(prompt("Digite a altura de um degrau em metros:"));

// Pede a altura que o pedreiro deseja alcançar em metros
const alturaDesejada = parseFloat(prompt("Digite a altura que deseja alcançar em metros:"));

// Calcula o número de degraus necessários
let numeroDegraus = alturaDesejada / alturaDegrau;

// Se o resultado não for um número inteiro, arredonda para o próximo inteiro
if (numeroDegraus % 1 !== 0) {
    numeroDegraus = Math.floor(numeroDegraus) + 1;
}

// Exibe o número de degraus necessários
console.log(`Número de degraus necessários: ${numeroDegraus}`);
alert(`Número de degraus necessários: ${numeroDegraus}`);