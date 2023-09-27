/* Criar um programa que digite o nome e o salário de um funcionário e mostre seu novo salário, 
sabendo que o mesmo teve um aumento de 10%. */

function verificar() {
    let nome = document.getElementById("txtNome").value;
    let salario = parseFloat(document.getElementById("txtSalario").value);

    if (isNaN(salario)) {
        document.getElementById("res").innerHTML = "Por favor, digite um valor válido para o salário.";
        return;
    }

    let novoSalario = salario * 1.1;

    document.getElementById("res").innerHTML = "Nome: " + nome + "<br>Novo salário: R$" + novoSalario.toFixed(2);
}