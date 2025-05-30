// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

const ladoA = parseFloat(prompt("Digite o lado A: "));
const ladoB = parseFloat(prompt("Digite o lado B: "));
const ladoC = parseFloat(prompt("Digite o lado C: "));

// Verificar se os lados formam um triângulo
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log("Os lados formam um triângulo.");

    // Verificar o tipo de triângulo
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Tipo: Triângulo Equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Tipo: Triângulo Isósceles");
    } else {
        console.log("Tipo: Triângulo Escaleno");
    }
} else {
    console.log("Os lados NÃO formam um triângulo.");
}
