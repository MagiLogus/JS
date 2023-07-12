// Faça um programa receba dois valores e imprima qual é o maior
// número digitado.

let prompt = require('prompt-sync')();

let num1 = prompt("digite o primeiro numero: ")
let num2 = prompt("digite o segundo numero: ")

if (num1 > num2) {
    console.log("o primeiro numero es maior")
} else {
    console.log("o segundo numero es maior")
}

