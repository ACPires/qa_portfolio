// Exercício 13 — Verificar se o Número é Primo
// Receba um número e retorne:
// “É primo” se só for divisível por 1 e por ele mesmo
// “Não é primo” caso contrário

function primeNumber(number){
    let prime = 1
    let message = "É primo!"
    for(let i=2;i<=number;i++){
        if(number%i==0){
            if(prime<3){
                prime++
                message = "É primo!"
            }else{
                message = "Não é primo!"
            }
        }else{
            message = message
        }
    }
    return message
}

let number = 8
console.log(primeNumber(number))