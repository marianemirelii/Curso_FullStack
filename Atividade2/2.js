import prompt from 'prompt-sync'
const input = prompt()

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpite;

console.log("=== Jogo de Adivinhação ===");
console.log("Tente adivinhar um número entre 1 e 100.");

do {
    palpite = parseInt(input("Digite seu palpite: "));
    tentativas++;

    if (isNaN(palpite)) {
        console.log("Por favor, digite um número válido.");
        continue;
    }

    if (palpite < numeroSecreto) {
        console.log("Mais alto!");
    } else if (palpite > numeroSecreto) {
        console.log("Mais baixo!");
    } else {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
    }
} while (palpite !== numeroSecreto);