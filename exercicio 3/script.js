// Pede os coeficientes ao usuário
const a = parseFloat(prompt("Digite o valor de 'a':"));
const b = parseFloat(prompt("Digite o valor de 'b':"));
const c = parseFloat(prompt("Digite o valor de 'c':"));

// Calcula o discriminante
const delta = b * b - 4 * a * c;

// Verifica se o discriminante é negativo
if (delta < 0) {
    console.log("A equação não possui raízes reais.");
} else {
    // Calcula as raízes usando a fórmula de Bhaskara
    const raizDelta = Math.sqrt(delta);
    const raiz1 = (-b + raizDelta) / (2 * a);
    const raiz2 = (-b - raizDelta) / (2 * a);

    // Exibe as raízes
    console.log(`As raízes da equação são: ${raiz1} e ${raiz2}`);
}
