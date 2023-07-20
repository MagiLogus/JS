// Faça um programa que receba o nome, cargo e salário de um
// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
// desse funcionário.

let prompt = require('prompt-sync')();
let nome = prompt ("Digite seu nome: ");
let cargo = prompt ("Digite o seu cargo: ");
let salario = parseFloat(prompt ("Digite seu salário: "));

if (salario < 1000) {
    salarioAcrescido = (salario * 0.01) + salario
    console.log(`
    Funcionário: ${nome}
    salário: ${salarioAcrescido}
    cargo: ${cargo}
    `)
} else {
    console.log(`
    Funcionário: ${nome}
    salário: ${salario}
    cargo: ${cargo}
    `)
}