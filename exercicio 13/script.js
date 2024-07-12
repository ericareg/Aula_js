const numero = parseInt(prompt("Digite um número inteiro:"));

// Verifica se o número é ímpar ou par
if (numero % 2 === 0) {
    console.log(`${numero} é um número par.`);
    alert(`${numero} é um número par.`);
} else {
    console.log(`${numero} é um número ímpar.`);
    alert(`${numero} é um número ímpar.`);
}