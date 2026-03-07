// Exercício 7 — Encontrar o Maior Preço
// Dado:
// [10, 50, 30, 80, 20]
// Mostre qual é o maior valor.

function highestPrice(prices){
    let highest = 0
    for(let i=0;i<prices.length;i++){
        if(prices[i]>highest){
            highest = prices[i]
        }
    }
    return "O maior preço é: $"+highest

}

let priceList = [10, 50, 30, 80, 20]
console.log(highestPrice(priceList))