// Faça um programa receba dois valores e imprima qual é o maior
// número digitado.

let prompt = require('prompt-sync')();

let num1 = prompt("Digite o primeiro número: ")
let num2 = prompt("Digite o segundo número: ")

if (num1 > num2) {
    console.log("O primeiro número é maior")
} else {
    console.log("O segundo número é maior")
}

