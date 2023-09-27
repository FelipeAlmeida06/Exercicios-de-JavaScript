/* Faça um programa que leia 5 números e informe o maior número. Usar for */

function verificar() {
    let maiorNumero = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt(`Informe o ${i}º número:`));

    if (!isNaN(numero)) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    } else {
        alert(`Valor inválido. Por favor, insira um número válido.`);
        i--; // Volta para o mesmo índice para tentar novamente
    }
}

if (maiorNumero !== Number.MIN_SAFE_INTEGER) {
  alert(`O maior número informado é: ${maiorNumero}`);
}
}