document.addEventListener("DOMContentLoaded", function (event) {
    produtoInput = document.getElementById("produto");
    quantidadeInput = document.getElementById("qtd");
    form = document.getElementById("frutas");
    localStorage.setItem("produtos", JSON.stringify([{nome:"Pera", preco:15}]));
    
    loadOptions();
});

let lista=[{}];

let listaProdutos=[{}];
let listaNomes=["Pera", "Abacate"];

let preco = 0;

function getProdutoByName(produto){
    getProdutoInfo
    for(let i = 0; i < listaProdutos.length; i++){
        if(listaProdutos[i].nome == produto){
            return listaProdutos[i];
        }        
    };
}

function getProdutoInfo(){
    listaProdutos=JSON.parse(localStorage.getItem("produtos"));
}

function setOptions(){
    getProdutoInfo();
    console.log(listaNomes);
    for(let i = 0; i < listaProdutos.length; i++){
        listaNomes.push(listaProdutos[i].nome);
    };
}

function loadOptions(){
    setOptions();
    for(let i = 0; i < listaNomes.length; i++){
        form.innerHTML += "<option value=" + listaNomes[i] + "></option>"
    };
    
}

function adicionarLista(){
    if(produtoInput.value != null && quantidadeInput.value != null){
        lista.push({
            produto: getProdutoByName(produtoInput.value),
            quantidade: quantidadeInput.value
        });
        console.log(lista);
    }
}