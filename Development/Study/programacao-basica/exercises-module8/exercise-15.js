// Exercício 15 — Função que Verifica se número é Par ou Ímpar
// Receba um número e retorne:
// “Par” se número % 2 = 0
// “Ímpar” caso contrário

function evenOrOdd(number){
    if(number%2==0){
        return "O número "+ number +" é par!"
    }else{
        return "O número "+ number +" é ímpar!"
    }
}

console.log(evenOrOdd(73))