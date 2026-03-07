function compararNumeros(num1,num2){
    if (num1<num2){
        return "Número 2 é maior"
    }else if(num2<num1){
        return "Número 1 é maior"
    }else{
        return "Os números são iguais"
    }
}

function numberCheck(numero){
    if(numero>0){
        return "Numero Positivo"
    }else if(numero<0){
        return "Numero Negativo"
    }else{
        return "Numero Zero"
    }
}

function dayOfTheWeek(dia){
    switch (dia){
        case 1:
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "Tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
        default:
            return "Dia da semana não encontrado"
    }
}

console.log(dayOfTheWeek(4))