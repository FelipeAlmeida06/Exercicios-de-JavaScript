/* Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. 
Um número primo é aquele que é divisível somente por ele mesmo e por 1. Usar for. */

function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero === 2) {
        return true;
    }
    if (numero % 2 === 0) {
        return false;
    }

    let metade = Math.floor(numero / 2);
    let resto = 1;
    let possivelDivisor = 3;

    while (possivelDivisor <= metade && resto !== 0) {
        resto = numero % possivelDivisor;
        possivelDivisor += 2;
    }

    return resto !== 0;
}

function verificar() {
    let numero = parseInt(document.getElementById('txtValor1').value);
    let resElement = document.getElementById('resultado');
            
    if (isNaN(numero)) {
        resElement.innerHTML = "Por favor, insira um número válido.";
        return;
    }
    if (numero < 0) {
        resElement.innerHTML = "Por favor, insira um número positivo.";
        return;
    }
    if (ehPrimo(numero)) {
        resElement.innerHTML = `${numero} é primo!`;
    } else {
        resElement.innerHTML = `${numero} não é primo!`;
    }
}
