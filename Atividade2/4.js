import prompt from 'prompt-sync';
const input = prompt();

function fatorial(n) {
    if (n < 0) {
        throw new Error("Não existe fatorial de número negativo.");
    } else if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

try {
    const numero = parseInt(input("Digite um número para calcular o fatorial: "));
    const resultado = fatorial(numero);
    console.log(`Fatorial de ${numero} é ${resultado}`);
} catch (erro) {
    console.error("Erro:", erro.message);
}