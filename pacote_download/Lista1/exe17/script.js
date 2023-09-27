/* Um comerciante possui uma mercearia. Os clientes costumam pagar as compras em dinheiro. Faça um programa que implemente 
uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. 
O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar 
o valor do troco. Após esta operação, o usuário pode selecionar um botão para zerar a caixa registradora. Usar for. */

function verificar() {
    let produtoA = parseFloat(document.getElementById('txtProd1').value);
    let produtoB = parseFloat(document.getElementById('txtProd2').value);
    let produtoC = parseFloat(document.getElementById('txtProd3').value);
    let valorPago = parseFloat(document.getElementById('txtValorPago').value);

    if (isNaN(produtoA) || isNaN(produtoB) || isNaN(produtoC) || isNaN(valorPago)) {
        document.getElementById("res").innerHTML = "Insira números inteiros válidos!<br>Tente novamente!";
    }

    // Total da compra
    let total = produtoA + produtoB + produtoC
    let formatadoTotal = total.toFixed(2);

    // Troco da compra
    let troco = valorPago - formatadoTotal;
    let formatadoTroco = troco.toFixed(2);

    //document.getElementById("res").innerHTML = `Valor total da compra: ${formatadoTotal}`;  // total da compra
    //document.getElementById("res").innerHTML = `Troco da compra: ${formatadoTroco}`;  // troco da compra

    document.getElementById("res").innerHTML = `Valor total da compra: R$ ${formatadoTotal} reais<br>Troco da compra: R$ ${formatadoTroco} reais`;
}

function limparCampos() {
    document.getElementById('txtProd1').value = "";
    document.getElementById('txtProd2').value = "";
    document.getElementById('txtProd3').value = "";
    document.getElementById('txtValorPago').value = "";
    document.getElementById("res").innerHTML = "";
}