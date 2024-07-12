const nome = prompt("Digite seu nome:");

// Pede a data de nascimento da pessoa (formato: YYYY)
const anoNascimento = parseInt(prompt("Digite o ano de seu nascimento:"));

// Pede o ano atual
const anoAtual = parseInt(prompt("Digite o ano atual:"));

// Calcula a idade da pessoa
const idade = anoAtual - anoNascimento;

// Exibe o nome e a idade da pessoa em linhas separadas
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade} anos`);

alert(`Nome:\n${nome}\n\nIdade:\n${idade} anos`);