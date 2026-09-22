function comprarPruduto(){

    const nome = document.getElementById("nome");
    const produto = document.getElementById("produto");
    const preco = parseFloat(document.getElementById("preco"));
    const qtd = Number(document.getElementById("quantidade"));
    const formadePagamento = document.getElementById("formadp");

    const subtotal = produto + qtd + preco    
    const valorTotal = subtotal

    const formadeDinheiro = 0.10
    const formadePIX = 0.05

    let situacao

    if (formadePagamento * formadeDinheiro ){
        situacao = "Você recebeu um desconto de 10%"
    } else if (formadePagamento * formadePIX ){
        situacao = "Você recebeu um desconto de 5%"
    } else {
        situacao = "Você não recebeu nenhum desconto"
    }

    document.getElementById("listaProdutos").textContent =
    
"Nome :" + nome + 
"Produto : " + produto + 
"Preço : " + preco + 
"Quantidade : " + qtd +
"Valor Total : " + valorTotal
"Forma de Pagamento : " + formadePagamento + 
"Situação : " + situacao

}