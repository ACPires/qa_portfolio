// Exercício 14 — Contar Vogais em uma Frase
// Receba uma frase e conte quantas vogais existem (a, e, i, o, u).
// Retorne, por exemplo:
// “A frase contém 12 vogais.”

let text = "I'm tired of being what you want me to be"
const pattern = /[aeiou]/gi

let result = text.match(pattern)

console.log(`A frase contém ${result.length} vogais!`)