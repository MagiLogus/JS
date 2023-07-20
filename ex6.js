// Faça um programa que receba 4 notas de um aluno, calcule e
// imprima a média aritmética das notas e a mensagem de APROVADO
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
// 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite a primeira nota: "))
let num2 = parseInt(prompt("Digite a segunda nota: "))
let num3 = parseInt(prompt("Digite a terceira nota: "))
let num4 = parseInt(prompt("Digite a quarta nota: "))

let media = (num1 + num2 + num3 + num4) / 4

if (media >= 7) {
    console.log("APROVADO")
} else if (media < 5) {
    console.log("REPROVADO")
} else if (media >= 5 && media <= 7) {
    console.log("RECUPERAÇÃO")
}
