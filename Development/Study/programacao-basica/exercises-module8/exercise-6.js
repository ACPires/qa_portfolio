// Exercício 6 — Simular Busca de Produto 
// Use a lista:
// ["camiseta", "notebook", "mouse", "cadeira"]
// Peça um nome e retorne:
// “Produto encontrado”
// “Produto não encontrado”

function searchProduct(keyword,list){
    let found = false
    for(let i = 0;i<list.length && found == false;i++){
        if(list[i] == keyword){
            message = "Produto encontrado!"
            found = true
            //console.log(`${message} ${found}`)
        }else{
            message = "Produto não encontrado!"
            //console.log(`${message} ${found}`)
        }
    }
    return message
}

let productList = ["camiseta", "notebook", "mouse", "cadeira"]
let product = "bola"
console.log(searchProduct(product,productList))