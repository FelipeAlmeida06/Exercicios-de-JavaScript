/* Desenvolva um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva o nome do aluno, 
sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual ou superior a 5.0. */

function verificar() {
    let nome = document.getElementById("txtNome").value;
    let n1 = parseFloat(document.getElementById('txtNota1').value);
    let n2 = parseFloat(document.getElementById('txtNota2').value);
    let n3 = parseFloat(document.getElementById('txtNota3').value);

    if (isNaN(n1 || n2 || n3)) {
        document.getElementById("res").innerHTML = "Valor inválido"
        return;
    }

    let media = (n1 + n2 + n3) / 3

    if (media >= 5.0) {
        document.getElementById("res").innerHTML = `Nome do aluno: ${nome}<br>Média: ${media}<br>Aprovado(a)!`
    } else {
        document.getElementById("res").innerHTML = `Nome do aluno: ${nome}<br>Média: ${media}<br>Reprovado(a)!`
    }
}