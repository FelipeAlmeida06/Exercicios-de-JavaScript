/* Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 a 100. Utilizar while */

function verificar() {
    let numImpares = document.getElementById("numerosImpares");
    let numeros = "";

    for (let i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            numeros += i + " ";
        }
    }
    numImpares.innerHTML = numeros;
}