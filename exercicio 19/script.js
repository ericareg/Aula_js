function verificarPositivoNegativo() {
    // Pedir ao usuário para inserir um número inteiro
    let numero = prompt("Digite um número inteiro:");

    // Converter o valor recebido para um número inteiro
    numero = parseInt(numero);

    // Verificar se o número é positivo, negativo ou zero
    if (numero > 0) {
        alert("O número " + numero + " é positivo.");
    } else if (numero < 0) {
        alert("O número " + numero + " é negativo.");
    } else {
        alert("O número é zero.");
    }
}

// Chamando a função para começar a verificação
verificarPositivoNegativo();
