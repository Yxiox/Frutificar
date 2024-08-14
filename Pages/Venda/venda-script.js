document.addEventListener("DOMContentLoaded", function (event) {
    produtoInput = document.getElementById("produto");
    quantidadeInput = document.getElementById("qtd");
 });

lista=[{}];

var listaProdutos=[{}];

function getProdutoInfo(produto){
    listaProdutos=JSON.parse(localStorage.getItem("produtos"));
    listaProdutos.forEach(pd => {
        if(pd.nome = produto){
            return pd;
        }        
    });
}

function adicionarLista(){
    
    if(produtoInput.value != null && quantidadeInput.value != null){
        lista.push({
            produto: getProdutoInfo(),
            quantidade: quantidadeInput
        });
    }



}