function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId); // limpa o timer anterior
        timeoutId = setTimeout(() => {
            fn(...args); // executa a função após o delay
        }, delay);
    };
}

const log = (mensagem) => {
    console.log("Executado:", mensagem);
};

const logComDebounce = debounce(log, 1000); // delay de 1 segundo

// Simulando chamadas rápidas
logComDebounce("A");
logComDebounce("B");
logComDebounce("C");