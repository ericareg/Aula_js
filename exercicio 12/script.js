// Pede o total da compra ao usuário
const total = parseFloat(prompt("Digite o total da compra:"));

// Pede a quantidade de parcelas ao usuário
const parcelas = parseInt(prompt("Digite a quantidade de parcelas:"));

// Define os juros baseados na quantidade de parcelas
let juros = 0;
if (parcelas == 1) {
    juros = 0;
} else if (parcelas == 2) {
    juros = 3;
} else if (parcelas == 4) {
    juros = 7;
} else {
    alert("Número de parcelas não suportado.");
    throw new Error("Número de parcelas não suportado.");
}

// Calcula o total com juros
const totalComJuros = total + (total * (juros / 100));
const valorParcela = totalComJuros / parcelas;

// Exibe o total com juros e o valor de cada parcela
alert(`Total da compra com juros: R$ ${totalComJuros.toFixed(2)}\nValor de cada parcela (${parcelas}x): R$ ${valorParcela.toFixed(2)}`);
    