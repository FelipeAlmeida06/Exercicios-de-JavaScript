/* A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o valor da prestação mensal, 
referentes ao pagamento parcelado, mostrando os resultados. 
Se o pagamento for parcelado em três vezes, deve ser dado um acréscimo de 5% no total a ser pago. 
Se o parcelamento for a quatro vezes, o acréscimo será de 10%. 
Se o parcelamento for a cinco vezes, o acréscimo será de 15%. 
Se o cliente não parcelar, mostrar o preço a vista. */

function verificar() {
    let precoOriginal = parseFloat(document.querySelector('#precoVista').value)
    let precoFinal
    let resultado = window.document.querySelector('div#res')

    if(document.querySelector('#zero').checked){
        precoFinal = precoOriginal
    } else if (document.querySelector("#tres").checked){
                precoFinal = precoOriginal + (precoOriginal * 0.05)
           } else if(document.querySelector("#quatro").checked){
                    precoFinal = precoOriginal + (precoOriginal * 0.1)
                }else if(document.querySelector("#cinco").checked){
                    precoFinal = precoOriginal + (precoOriginal * 0.15)
                }
    resultado.innerHTML = precoFinal
}