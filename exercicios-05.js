function parImpar() {
    let impar = 0;
    let par = 0;

    let numero = parseFloat(prompt("Digite um numero inteiro de 1 a 10 "));

    if (numero % 2 == 0) {
        console.log("Esse numero vai ser transformado em IMPAR");
        impar = numero + 1
        console.log(impar)
    } else {
        console.log("Esse numero vai ser transformado em PAR");
        par = numero + 1
        console.log(par)
    }
}
