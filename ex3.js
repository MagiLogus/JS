// Faça um programa que receba um número inteiro do usuário e informe
// se este número é positivo ou negativo.

let prompt = require('prompt-sync')();

let numero = parseInt(prompt("digite um número: "))

if (numero > 0) {
    console.log("O número é positivo")
} else {
    console.log("O número é negativo")
}