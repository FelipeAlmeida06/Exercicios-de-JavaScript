/* Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.  
O primeiro número deve ser menor que o segundo número. Caso contrário avisar o usuário. Usar for para gerar os números. */

function verificar() {
    let a = parseFloat(document.getElementById('txtValor1').value);
    let b = parseFloat(document.getElementById('txtValor2').value);
    let numExibElem = document.getElementById("numerosDoIntervalo");

    if (isNaN(a) || isNaN(b)) {
        numExibElem.innerHTML = "Insira números inteiros válidos!<br>Tente novamente!";
    } else if (a >= b) {
       numExibElem.innerHTML = "O valor de A deve ser MENOR que o valor de B!<br>Tente novamente!";
    } else {
        let numIntervalo = "";
        for (let intervalo = a; intervalo <= b; intervalo++) {
            numIntervalo += intervalo + " ";
        }
        numExibElem.innerHTML = numExibElem.innerHTML = `Os números que estão no intervalo de ${a} e ${b} são:<br>${numIntervalo}`
    }
}