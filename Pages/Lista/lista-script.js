localStorage.removeItem("sessionList");
localStorage.removeItem("sessionPrice");

const produtos = getProdutos();
const telaEdicao = document.getElementById("telaEdicao");
let listagem;

document.addEventListener("DOMContentLoaded", function () {
  listagem = document.getElementById("container");
  listagem.innerHTML = writeItens();
});

function getProdutos() {
  let produtos = JSON.parse(localStorage.getItem("produtos"));
  return produtos === null ? [] : produtos;
}

function getProdutoByName(produto) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === produto) {
      return produtos[i];
    }
  }
}

function writeItens() {
  let string = "";
  if (produtos.length > 0) {
    for (let i = 0; i < produtos.length; i++) {
      string +=
        "<div class='item'><h1>" +
        produtos[i].nome +
        "</h1><h3>" +
        produtos[i].descricao +
        "</h3><h2>Preço: R$ " +
        produtos[i].preco +
        "</h2><button onclick='deletarFruta(this.value);' value='" +
        i +
        "'>X</button>" +
        "</h2><button onclick='editar(this.value);' style='background-color: grey' value='" +
        i +
        "'>Editar</button></div>";
    }
    return string;
  } else {
    return "<div class='item'><h1>Sem itens cadastrados</h1></div>";
  }
}

function deletarFruta(frutaId) {
  if (confirm("Confirma exclusão?")) {
    produtos.splice(frutaId, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    window.location.reload();
  } else {
    alert("Item não excluído!");
  }
}

function efetivar() {
  let novoNome = document.getElementById("novoNome");
  let novaDescricao = document.getElementById("novaDescricao");
  let novoPreco = document.getElementById("novoPreco");

  atualizado = {
    nome: novoNome.value,
    descricao: novaDescricao.value,
    preco: parseFloat(novoPreco.value),
  };

  produtos.splice(telaEdicao.value, 1, atualizado);

  if (confirm("Confirma atualização?")) {
    localStorage.setItem("produtos", JSON.stringify(produtos));
    alert("Item atualizado com sucesso!");
    window.location.reload();
  } else {
    alert("Atualização abortada!");
  }
}

function editar(frutaId) {
  telaEdicao.style.display = "flex";
  telaEdicao.value = frutaId;
}

function fecharEdicao() {
  telaEdicao.style.display = "none";
}
