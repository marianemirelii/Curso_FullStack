function agruparVendasPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const { cliente, total } = venda;

        if (!acumulador[cliente]) {
            acumulador[cliente] = 0;
        }

        acumulador[cliente] += total;
        return acumulador;
    }, {});
}

const vendas = [
    { cliente: "Ana", total: 100 },
    { cliente: "Bruno", total: 200 },
    { cliente: "Ana", total: 150 },
    { cliente: "Carlos", total: 300 },
    { cliente: "Bruno", total: 50 }
];

const resultado = agruparVendasPorCliente(vendas);
console.log(resultado);