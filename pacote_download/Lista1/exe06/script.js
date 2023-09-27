/* Desenvolva o algoritmo abaixo usando Switch/case obrigatoriamente. Ler o código de um determinado produto e mostrar sua classificação. 
Utilizar a seguinte tabela como referência:
Código          Classificação
1               Alimento não-perecível
2,3 ou 4        Alimento perecível
5 ou 6          Vestuário
7               Higiene pessoal
8 até 15        Limpeza e Utensílios Domésticos
Qlquer outro    Código Inválido */

function verificar() {
    let codEscolhido = parseFloat(document.getElementById('txtCod').value);

    if (isNaN(codEscolhido)) {
        document.getElementById("res").innerHTML = `Valor inválido`
    }

    // Utilizando SWITCH-CASE
    switch (codEscolhido) {
        case 1:
          document.getElementById("res").innerHTML = `Você informou um código IGUAL a 1!<br>Classificação: Alimento não-perecível`;
          break;
        case 2:
        case 3:
        case 4:
          document.getElementById("res").innerHTML = `Você informou um código ENTRE 2 e 4!<br>Classificação: Alimento perecível`;
          break;
        case 5:
        case 6:
          document.getElementById("res").innerHTML = `Você informou um código IGUAL a 5 ou IGUAL a 6!<br>Classificação: Vestuário`;
          break;
        case 7:
          document.getElementById("res").innerHTML = `Você informou um código IGUAL a 7!<br>Classificação: Higiene pessoal`;
          break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          document.getElementById("res").innerHTML = `Você informou um código ENTRE 8 e 15!<br>Classificação: Limpeza e Utensílios Domésticos`;
          break;
        default:
          document.getElementById("res").innerHTML = `Você informou um código desconhecido!<br>Classificação: Código Inválido`;
      }
      
}