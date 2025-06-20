
function ehDataValida(dia, mes, ano) {
    if (ano < 1000) return false;
    if (mes < 1 || mes > 12) return false;
    if (dia < 1 || dia > 31) return false;

    // Verifica fevereiro
    if (mes === 2) {
        const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
        if (bissexto && dia > 29) return false;
        if (!bissexto && dia > 28) return false;
    }

    // Verifica meses com 30 dias
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) return false;

    return true;
}


let test1 = ehDataValida(29, 2, 2025)
let test2 = ehDataValida(31, 12, 2010)
let test3 = ehDataValida(31, 4, 2020)

console.log(test1)
console.log(test2)
console.log(test3)