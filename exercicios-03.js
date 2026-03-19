function financeiro() {
    let ganhoAnual = 0
    let gastoAnual = 0

    for (let i = 1; i < 3; i++) {
        let ganho = Number(prompt("Ganho do mês " + i));
        let gasto = Number(prompt("Gasto do mês " + i));
        ganhoAnual += ganho;
        gastoAnual += gasto;
    }

    console.log(ganhoAnual);
    console.log(gastoAnual);
    let saldo = ganhoAnual - gastoAnual;
    alert("Ganho Anual: " + ganhoAnual);
    alert("Gasto Anual: "+ gastoAnual);
    alert("Saldo Anual: "+ saldo);

    if(saldo>0){
        alert("Lucro!!");
    }else{
        alert("Prejuízo :(")
    }
}
financeiro();