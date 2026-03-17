function somarNumero(){
    let soma = 0;
    let continuar = true;

    while( continuar ) {
        let numero = parseFloat(prompt("Didite um número (ou digite '0' para encerrar):"));

        if(!isNaN(numero)){

            soma+=numero;

        }else{
            alert("Por favor, digite  um número válido.");
        }

        continuar = confirm("Deseja continuar a adicionar mais números?");
    }
    alert("Soma dos números é:" + soma)
}

//somarNumero()