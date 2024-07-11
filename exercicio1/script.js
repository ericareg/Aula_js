// Solicita o salário atual do usuário
const currentSalary = parseFloat(prompt("Digite o salário atual:"));


    // Calcula o novo salário com aumento de 25%
    const newSalary = currentSalary * 1.25;

    // Exibe os resultados na página
    const resultDiv = document.getElementById('result');
    const salaryInfo = `Salário Atual: R$ ${currentSalary.toFixed(2)}\nSalário com Aumento de 25%: R$ ${newSalary.toFixed(2)}`;
    resultDiv.innerText = salaryInfo;