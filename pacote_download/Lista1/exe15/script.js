/* Fazer um programa que calcula o fatorial de um número, permitindo ao usuário calcular o fatorial várias vezes e 
limitando o fatorial a números inteiros positivos e menores que 16. */

function calcularFatorial(numInteiro) {
    let fatorial = 1;
    for (let contador = 1; contador <= numInteiro; contador++) {
        fatorial *= contador;  // fatorial = fatorial * contador
    }
    return fatorial;
}

function calcularEExibirFatorial() {
    let fat = parseFloat(document.getElementById('txtValor1').value);
    let resFatorial = document.getElementById('resultadoDoFatorial');
    let res = document.getElementById('res');

    if(isNaN(fat)) {
        resFatorial.innerHTML = "";
        res.innerHTML = `Insira um valor inteiro válido`;
        return;
    }

    if(fat > 16) {
        resFatorial.innerHTML = "";
        res.innerHTML = `ERRO:<br>O valor informado deve ser MENOR ou IGUAL a 16!`;
        return;
    }

    let resultadoFatorial = calcularFatorial(fat);
    resFatorial.innerHTML = `O fatorial de ${fat} é: ${resultadoFatorial}`;
    res.innerHTML = "";
}