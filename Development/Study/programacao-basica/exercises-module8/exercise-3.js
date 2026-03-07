// Exercício 3 — Verificar Idade para Cadastro
// Receba uma idade e retorne:
// ≥ 18 → “Cadastro aprovado”
// 13–17 → “Cadastro permitido com responsável”
// < 13 → “Cadastro não permitido”

let age = 38

if(age>=18){
    console.log("Cadastro aprovado!")
}else if(age>=13 && age<18){
    console.log("Cadastro permitido com responsável!")
}else{
    console.log("Cadastro não permitido!")
}