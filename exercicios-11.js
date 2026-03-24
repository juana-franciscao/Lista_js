function calculoInss() {
    let salario = parseFloat(prompt("Digite o salário bruto:"));

    let taxa = 0;
    let desconto = 0;
    let salarioLiquido = 0;

    if (salario <= 1000) {
        taxa = 0.08;
    } else if (salario <= 1500) {
        taxa = 0.085;
    } else {
        taxa = 0.09;
    }


    desconto = salario * taxa;
    salarioLiquido = salario - desconto;

    alert("Salário informado: R$ " + salario.toFixed(2) +
        "\nTaxa de desconto aplicada: " + (taxa * 100) + "%" +
        "\nValor do desconto: R$ " + desconto.toFixed(2) +
        "\nSalário líquido: R$ " + salarioLiquido.toFixed(2));

}