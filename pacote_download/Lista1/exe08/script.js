/* Leia 5 valores reais e calcule seu somatório utilizando a instrução while. Adicionei uma também uma funcionalidade (NÃO OBRIGATÓRIA):
Funcionalidade: O programa/aplicação verifica se o valor informado é maior que 0.0 e somando enquanto o usuário continuar inserindo valores positivos.
Neste código, além de verificar se o valor é inválido como no código original, também verificamos se o valor é negativo. Se o valor for negativo, 
o loop é interrompido e apenas os valores maiores que 0.0 são somados. Se o valor for positivo, ele é adicionado à soma. Isso permite que o programa 
pare assim que um valor negativo for inserido e exiba a soma apenas dos valores positivos */

function verificar() {
    //let a = parseFloat(document.getElementById('txtValor1').value);
    //let b = parseFloat(document.getElementById('txtValor2').value);
    //let c = parseFloat(document.getElementById('txtValor3').value);
    //let d = parseFloat(document.getElementById('txtValor4').value);
    //let e = parseFloat(document.getElementById('txtValor5').value);

    let i = 1;
    let soma = 0;

    do {
        let valor = parseFloat(document.getElementById('txtValor' + i).value);
    if (isNaN(valor)) {
        document.getElementById("res").innerHTML = `Valor inválido`;
        return;
    }
    if (valor < 0) {
        break; // Sai do loop se o valor for negativo
    } 
    if (valor > 0) {
        soma += valor;
    }
    i++;
} while (i <= 5);

    if (soma > 0.0) {
    document.getElementById("res").innerHTML = `Resultado: ${soma}`;
    } else {
    document.getElementById("res").innerHTML = `ERRO`;
    }
}