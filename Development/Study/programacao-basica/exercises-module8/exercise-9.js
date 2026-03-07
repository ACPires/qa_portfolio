// Exercício 9 — Função para Validar Email
// Retorne “Email válido” se o texto contiver “@”.
// Caso contrário, retorne “Email inválido”.

function validEmail(email){
    if(email.includes("@")){
        return "Email válido!"
    }else{
        return "Email inválido!"
    }
}

let email = "arthur98_4hotmail.com"
console.log(validEmail(email))