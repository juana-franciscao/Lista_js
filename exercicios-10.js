function calculSalario() {
    let nome = prompt("Digite seu nome:");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto:"));


    let descontoINSS = salarioBruto * 0.08;
    let salarioLiquido = salarioBruto - descontoINSS;

    alert("Nome do funcionário:" + nome +
        "\nSalário bruto: R$" + salarioBruto.toFixed(2) +
        "\nDesconto INSS (8%): R$" + descontoINSS.toFixed(2) +
        "\nSalário líquido: R$" + salarioLiquido.toFixed(2));

}