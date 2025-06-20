function paresParaObjeto(pares) {
    const obj = {};
    for (const [chave, valor] of pares) {
        obj[chave] = valor;
    }
    return obj;
}

function objetoParaPares(obj) {
    const pares = [];
    for (const chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            pares.push([chave, obj[chave]]);
        }
    }
    return pares;
}

const pares = [["nome", "Ana"], ["idade", 30], ["profissao", "Dev"]];

const obj = paresParaObjeto(pares);
console.log(obj);

const paresConvertidos = objetoParaPares(obj);
console.log(paresConvertidos);
