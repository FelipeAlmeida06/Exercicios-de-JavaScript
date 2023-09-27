/* Desenvolva um algoritmo que receba dois números e um código de seleção (usar radio) do usuário. 
Se o código digitado for 1, faça o algoritmo adicionar os dois números previamente digitados e mostrar o resultado; 
se o código de seleção for 2, os números deverão ser multiplicados; 
se o código de seleção for 3, o primeiro número deve ser dividido pelo segundo. Mostrar o resultado na tela. */

function verificar() {
    let a = parseFloat(document.getElementById('txtValor1').value);
    let b = parseFloat(document.getElementById('txtValor2').value);
    let radSelec = window.document.getElementsByName("radselec")

    // Código 1
    if (radSelec[0].checked) {
        document.getElementById("res").innerHTML = `Você selecionou a opção/código 1,<br> portanto os números informados serão SOMADOS!<br>Resultado: ${a+b}`
    }
    if (radSelec[1].checked) {
        document.getElementById("res").innerHTML = `Você selecionou a opção/código 2,<br> portanto os números informados serão MULTIPLICADOS!<br>Resultado: ${a*b}`
    }
    if (radSelec[2].checked) {
        document.getElementById("res").innerHTML = `Você selecionou a opção/código 3,<br> portanto os números informados serão DIVIDIDOS!<br>Resultado: ${a/b}`
    }
}