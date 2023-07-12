// Faça um programa que receba um número do usuário e informe
// se este número é par ou ímpar.

let prompt = require('prompt-sync')();

let numero = parseInt(prompt("digite um numero: "))

let restante = numero % 2

if (restante != 0) {
    console.log("O numero es impar")
} else {
    console.log("O numero es par")
}