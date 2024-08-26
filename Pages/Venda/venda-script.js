document.addEventListener("DOMContentLoaded", function (event) {
    produtoInput = document.getElementById("produto");
    quantidadeInput = document.getElementById("qtd");
    form = document.getElementById("frutas");
    listaDisplay = document.getElementById("ulista");
    precoDisplay = document.getElementById("preco");
    
    calcularPreco();
    
    precoDisplay.innerHTML="R$"+JSON.parse(localStorage.getItem("sessionPrice"))+",00";

    loadOptions();
    loadLista();
});

let lista=[];

let listaProdutos=[];
let listaNomes=[];

let preco = 0;

//Retorna as informações da fruta com base no nome informado
function getProdutoByName(produto){
    getProdutoInfo();
    for(let i = 0; i < listaProdutos.length; i++){
        if(listaProdutos[i].nome === produto){
            return listaProdutos[i];
        }        
    };
}

//Retorna o preço da fruta pelo nome informado
function getPriceByName(produto){
    getProdutoInfo();
    console.log(listaProdutos);
    for(let i = 0; i < listaProdutos.length; i++){
        if(listaProdutos[i].nome === produto){
            return listaProdutos[i].preco;
        }        
    };
}

//Atualiza a lista de frutas cadastradas
function getProdutoInfo(){
    listaProdutos=JSON.parse(localStorage.getItem("produtos"));
}

//Busca as frutas armazenadas e carrega na variável
function setOptions(){
    getProdutoInfo();
    console.log(listaNomes);
    for(let i = 0; i < listaProdutos.length; i++){
        listaNomes.push(listaProdutos[i].nome);
    };
}

//Carrega as frutas disponíveis na tela
function loadOptions(){
    setOptions();
    for(let i = 0; i < listaNomes.length; i++){
        form.innerHTML += "<option value=" + listaNomes[i] + "></option>"
    };
    
}

//Carrega a lista de produtos na tela
function loadLista(){
    lista = JSON.parse(localStorage.getItem("sessionList"));
    if (lista != null){
        for(let i = 0; i < lista.length; i++){
            listaDisplay.innerHTML += "<li id='Item'><div class='container'><h1>"+lista[i].nome+"</h1><h1> Qtd:"+lista[i].quantidade+"</h1> <h1>R$:"+"</h1></div></li>";
        };
    }
}

//Adiciona os itens informados nos inputs para lista de produtos para esta venda
function adicionarLista(){
    if(produtoInput.value != null && quantidadeInput.value != null){
        lista = JSON.parse(localStorage.getItem("sessionList"));
        if (lista != null){
            lista.push({
                nome: produtoInput.value,
                quantidade: quantidadeInput.value
            });
            localStorage.setItem("sessionList", JSON.stringify(lista));
        }
        else{
            lista = [{
                nome: produtoInput.value,
                quantidade: quantidadeInput.value
            }];
            localStorage.setItem("sessionList", JSON.stringify(lista));    
        }
    }
}

//Calcula o preço e atualiza o página com base nos itens da lista
function calcularPreco(){
    preco = 0;
    if (lista != null){
        for(let i = 0; i < lista.length; i++){
            let exp = getPriceByName(lista[i].nome);
            preco += exp * lista[i].quantidade; 
        };
    }
    localStorage.setItem("sessionPrice", JSON.stringify(preco));
    
}