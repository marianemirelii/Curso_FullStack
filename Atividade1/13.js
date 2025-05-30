// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let count = 0;

while (true) {
    const num = parseFloat(prompt("Digite um número decimal (0 para sair): "));
    if (num === 0) break;
    soma += num;
    count++;
}

if (count > 0) {
    const media = soma / count;
    console.log(`Média aritmética dos números digitados: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número válido foi digitado.");
}
