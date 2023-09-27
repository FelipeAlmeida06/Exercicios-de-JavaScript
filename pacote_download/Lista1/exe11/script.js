/* Faça um programa que leia 5 números e informe a soma e a média dos números. Usar for */

function verificar() {
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt(`Informe o ${i}º número:`));

    if (!isNaN(numero)) {
        soma += numero;
    } else {
        alert(`Valor inválido. Por favor, insira um número válido.`);
        i--; // Volta para o mesmo índice para tentar novamente
  }
}

let media = soma / 5;

alert(`A soma dos números é: ${soma}\nA média dos números é: ${media}`);
}