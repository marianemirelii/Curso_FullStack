import prompt from 'prompt-sync';
const input = prompt();

const frase = input("Digite uma frase: ").toLowerCase();
const palavras = frase.split(" ");
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let repetida = false;

    for (let j = 0; j < palavras.length; j++) {
        if (i !== j && palavras[i] === palavras[j]) {
            repetida = true;
            break;
        }
    }

    if (!repetida) {
        unicas.push(palavras[i]);
    }
}

console.log("Palavras únicas:", unicas);