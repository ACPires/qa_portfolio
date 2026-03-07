// Exercício 4 — Calculando Valor Final de Compra
// Some os valores: 50, 30 e 20.
// Depois aplique 10% de desconto e mostre o valor final.

function somatoria(array){
    let soma = 0
    for(let i=0;i<array.length;i++){
        soma += array[i]
    }
    return soma
}

function discount(total){
    final = total*0.9
    return "O valor com desconto é: "+final
}


let prices = [50,30,20]

let total = somatoria(prices)
console.log(discount(total))