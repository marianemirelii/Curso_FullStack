// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

const prompt = require('prompt-sync')();

const peso = parseFloat(prompt("Digite seu peso em kg: "));
const altura = parseFloat(prompt("Digite sua altura em metros: "));

const imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log("Classificação: Baixo peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Classificação: Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Classificação: Sobrepeso");
} else if (imc >= 30) {
    console.log("Classificação: Obesidade");
} else {
    console.log("Valores inválidos.");
}
