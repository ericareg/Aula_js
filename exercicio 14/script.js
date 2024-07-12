const numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
const numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

// Verifica qual número é maior ou se são iguais
if (numero1 > numero2) {
    alert(`O número ${numero1} é maior que o número ${numero2}.`);
} else if (numero1 < numero2) {
    alert(`O número ${numero2} é maior que o número ${numero1}.`);
} else {
    alert(`Os números ${numero1} e ${numero2} são iguais.`);
}