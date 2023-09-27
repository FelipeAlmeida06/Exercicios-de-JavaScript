/* Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 a 100. Utilizar while */

function verificar() {
    let num = 2;
    let quadradosTexto = "";

    while (num <= 100) {
        let quadrado = num * num;
        quadradosTexto += `O quadrado de ${num} é ${quadrado}<br>`;
        num += 2;
    }

    document.getElementById("res").innerHTML = quadradosTexto;
}