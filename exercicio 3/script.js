// Coeficientes da equação
const a = 1;
const b = -3;
const c = 2;

// Calcula o discriminante
const delta = b * b - 4 * a * c;

// Calcula as raízes usando a fórmula de Bhaskara
const raizDelta = Math.sqrt(delta);
const raiz1 = (-b + raizDelta) / (2 * a);
const raiz2 = (-b - raizDelta) / (2 * a);

// Exibe as raízes
console.log(`As raízes da equação são: ${raiz1} e ${raiz2}`);
