let totalGeral;
limpar();

function adicionar() {
  //recuperar valores, nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;

    //calcular o preço, o nosso subtotal
      //trocar o numero pelos let 
      //<section class="carrinho__produtos" id="lista-produtos">
        //<section class="carrinho__produtos__produto">
          //<span class="texto-azul">1x</span> Celular <span class="texto-azul">R$1400</span>
        //</section>
      //</section>
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;

    //adicionar ao carrinho
    //<p class="carrinho__total">
      //Total: <span class="texto-azul" id="valor-total">R$1400</span>
    //</p>
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}