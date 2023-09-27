/* Criar um algoritmo que leia dois valores inteiros A e B. Se os valores forem iguais devem ser somados os dois. 
Caso contrário multiplique A por B. Ao final do cálculo, atribuir o valor para uma variável C e mostrar o resultado. */

function verificar() {
    let a = parseFloat(document.getElementById('txtValorDeA').value);
    let b = parseFloat(document.getElementById('txtValorDeB').value);

    if (a == b) {
        //document.getElementById("res").innerHTML = "Os números informados são IGUAIS!"
        //document.getElementById("res").innerHTML = "Resultado: " + (a + b);
        document.getElementById("res").innerHTML = `Os números informados são IGUAIS!<br>Resultado: ${a+b}`
        return;
    } else {
        //document.getElementById("res").innerHTML = "Os números informados são DIFERENTES!"
        //document.getElementById("res").innerHTML = "Resultado: " + a * b;
        document.getElementById("res").innerHTML = `Os números informados são DIFERENTES!<br>Resultado: ${a*b}`
        return;
    }
}