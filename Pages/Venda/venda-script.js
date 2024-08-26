const storeState = {
  listaProdutos: ([] = []),
  lista: ([] = []),
  listaNomes: ([] = []),
  preco: 0,
};

const produtoInputId = "produto";
const qtdInputId = "qtd";
const produtoInput = getElementById(produtoInputId);
const quantidadeInput = getElementById(qtdInputId);
const form = document.getElementById("produt");
const listaDisplay = document.getElementById("ulista");
const precoDisplay = document.getElementById("preco");

function getElementById(id) {
  return document.getElementById(id);
}

function getInputValueById(id) {
  return getElementById(id).value;
}

document.addEventListener("DOMContentLoaded", function () {
  setTotalPrice();
  loadOptions();
  loadLista();
});

function getSessionPrice() {
  let sessionPrice = localStorage.getItem("sessionPrice");
  return sessionPrice === null ? 0 : sessionPrice;
}

function getProdutos() {
  let produtos = JSON.parse(localStorage.getItem("produtos"));
  return produtos === null ? [] : produtos;
}

function getSessionList() {
  let sessionList = JSON.parse(localStorage.getItem("sessionList"));
  return sessionList === null ? [] : sessionList;
}

function setTotalPrice() {
  precoDisplay.innerHTML = "R$" + getSessionPrice() + ",00";
}

//Retorna as informações da fruta com base no nome informado
function getProdutoByName(produto) {
  getProdutoInfo();
  for (let i = 0; i < storeState.listaProdutos.length; i++) {
    if (storeState.listaProdutos[i].nome === produto) {
      return storeState.listaProdutos[i];
    }
  }
}

//Retorna o preço da fruta pelo nome informado
function getPriceByName(produto) {
  getProdutoInfo();
  for (let i = 0; i < storeState.listaProdutos.length; i++) {
    if (storeState.listaProdutos[i].nome === produto) {
      return storeState.listaProdutos[i].preco;
    }
  }
}

//Atualiza a lista de frutas cadastradas
function getProdutoInfo() {
  let produtos = getProdutos();
  storeState.listaProdutos = produtos;
}

//Busca as frutas armazenadas e carrega na variável
function setOptions() {
  getProdutoInfo();
  for (let i = 0; i < storeState.listaProdutos.length; i++) {
    storeState.listaNomes.push(storeState.listaProdutos[i].nome);
  }
}

//Carrega as frutas disponíveis na tela
function loadOptions() {
  setOptions();
  for (let i = 0; i < storeState.listaNomes.length; i++) {
    form.innerHTML +=
      "<option value=" +
      storeState.listaNomes[i] +
      ">" +
      storeState.listaNomes[i] +
      "</option>";
  }
}

//Carrega a lista de produtos na tela
function loadLista() {
  storeState.lista = getSessionList();
  if (storeState.lista) {
    for (let i = 0; i < storeState.lista.length; i++) {
      listaDisplay.innerHTML +=
        "<li id='Item'><div class='container'><h1>" +
        storeState.lista[i].nome +
        "</h1><h1> Qtd:" +
        storeState.lista[i].quantidade +
        "</h1> <h1>R$:" +
        storeState.lista[i].quantidade *
          getPriceByName(storeState.lista[i].nome) +
        "</h1></div></li>";
    }
  }
}

//Adiciona os itens informados nos inputs para lista de produtos para esta venda
function adicionarLista() {
  storeState.lista = getSessionList();

  let produtoPnputVale = getInputValueById(produtoInputId);
  let qtdInputValue = getInputValueById(qtdInputId);

  storeState.lista.push({
    nome: produtoPnputVale,
    quantidade: qtdInputValue,
  });
  localStorage.setItem("sessionList", JSON.stringify(storeState.lista));
}

//Calcula o preço e atualiza o página com base nos itens da lista
function calcularPreco() {
  storeState.preco = 0;
  if (storeState.lista) {
    for (let i = 0; i < storeState.lista.length; i++) {
      let exp = getPriceByName(storeState.lista[i].nome);
      storeState.preco += exp * storeState.lista[i].quantidade;
    }
  }
  localStorage.setItem("sessionPrice", JSON.stringify(storeState.preco));
}
