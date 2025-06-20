function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice() 
        .sort((a, b) => a.preco - b.preco) 
        .map(produto => produto.nome); 
}

const produtos = [
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 1200 },
    { nome: "Teclado", preco: 150 },
    { nome: "Webcam", preco: 300 }
];

const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados);