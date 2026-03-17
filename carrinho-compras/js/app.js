//document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';
let listaProdutos = []
let valorTotalCarrinho = 0
//listaProdutos = document.getElementById('lista-produtos')

function adicionar() {
    let produto = document.getElementById('produto').value;
    let valorUnitario = produto.split('R$')[1];
    let quantidadeProduto = document.getElementById('quantidade').value;
    let produtoCarrinho = document.querySelector('.carrinho__produtos__produto');
    //console.log(produto)

    listaProdutos.push(produto);

    let valorProduto = valorUnitario * quantidadeProduto;
    produtoCarrinho.innerHTML += `<br><span class="texto-azul">${quantidadeProduto}x</span>${produto}<span class="texto-azul">R$${valorProduto}</span>`;

    valorTotalCarrinho += valorProduto;

    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.textContent = `R$ ${valorTotalCarrinho}`
    document.getElementById('quantidade').value = 0;
    /*
    valorTotalCarrinho = parseInt(produto.split('R$')[1]).value;
    valorTotalCarrinho = valorTotalCarrinho + valorUnitario;
    totalCarrinho.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotalCarrinho}</span>`
*/
    console.log(totalCarrinho)
    console.log(listaProdutos);
}

function limpar() {
    listaProdutos.length = 0;
    console.log(listaProdutos)
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

function exibirLista() {

}