/* Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
O usuário deve informar de qual numero ele deseja ver a tabuada. Usar for. */

const inputNumero = document.getElementById("numero")
const resultado = document.getElementById("resultado")
const calcular = () => {
    const numero = parseInt(inputNumero.value)
    if(Number.isNaN(numero)) {
        return
    }
    const tabuada = []
    for(let i = 0; i <= 10; i++) {
        tabuada.push(`${numero} x ${i} = ${numero*i}`)
    }
    resultado.innerText = tabuada.join("\n")
}