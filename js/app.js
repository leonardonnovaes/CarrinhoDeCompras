let totalGeral = 0; // Inicializa a variável que armazena o total geral da compra com 0.
document.getElementById('lista-produtos').innerHTML = ''; // Limpa o conteúdo da lista de produtos no carrinho ao carregar a página.
document.getElementById('valor-total').innerHTML = 'R$0'; // Define o valor total exibido na página como "R$0" ao carregar a página.

/**
 * Função para adicionar um produto ao carrinho.
 */
function adicionar() {
    let produto = document.getElementById('produto').value; // Obtém o valor selecionado no dropdown de produtos.
    let nomeProduto = produto.split('-')[0]; // Extrai o nome do produto do valor selecionado.
    let valorUnitario = produto.split('R$')[1]; // Extrai o valor unitário do produto do valor selecionado.
    let quantidade = document.getElementById('quantidade').value; // Obtém a quantidade inserida pelo usuário.
    let preco = quantidade * valorUnitario; // Calcula o preço total do produto (quantidade * valor unitário).
    let carrinho = document.getElementById('lista-produtos'); // Obtém o elemento HTML que representa a lista de produtos no carrinho.

    // Adiciona um novo item ao carrinho, formatando a exibição com quantidade, nome e preço.
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;

    totalGeral = totalGeral + preco; // Atualiza o total geral da compra, somando o preço do novo item.
    let campoTotal = document.getElementById('valor-total'); // Obtém o elemento HTML que exibe o valor total.
    campoTotal.textContent = `R$ ${totalGeral}`; // Atualiza o conteúdo do elemento com o novo valor total.
}

/**
 * Função para limpar o carrinho e resetar o total geral.
 */
function limpar() {
    totalGeral = 0; // Reseta o total geral para 0.
    document.getElementById('lista-produtos').innerHTML = ''; // Limpa a lista de produtos no carrinho.
    document.getElementById('valor-total').innerHTML = 'R$ 0'; // Reseta o valor total exibido para "R$ 0".
}