//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

console.log("Sequência de Fibonacci (10 primeiros números):");

let a = 0, b = 1;

for (let i = 1; i <= 10; i++) {
    console.log(a);
    const proximo = a + b;
    a = b;
    b = proximo;
}
