// Exercício 8 — Criar Função: Calcular Média
// Crie uma função que recebe 3 números e retorna a média.

function average(list){
    let soma = 0
    for(let i=0;i<list.length;i++){
        soma+=list[i]
    }
    let media = soma/list.length
    return "A média dos números é: "+media
}

let numberList = [50,73,34]
console.log(average(numberList))