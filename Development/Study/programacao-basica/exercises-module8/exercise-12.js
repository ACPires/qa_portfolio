// Exercício 12 — Soma de 1 a 100
// Crie um algoritmo que some todos os números de 1 até 100 e mostre o resultado.

function somatoria(max){
    let sum = 0
    for(let i=1;i<=max;i++){
        sum += i
    }
    return sum
}

let max = 100
console.log(somatoria(max))