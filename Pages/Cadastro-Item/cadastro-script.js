document.addEventListener("DOMContentLoaded", function (event) {
  nomeInput = document.getElementById("product-name");
  descricaoInput = document.getElementById("product-description");
  precoInput = document.getElementById("product-price");
  listaProdutos = JSON.parse(localStorage.getItem("produtos"));
});

let listaProdutos = [];

function addContent() {
  let nomeInput = document.getElementById("product-name");
  let descricaoInput = document.getElementById("product-description");
  let precoInput = document.getElementById("product-price");

  if (nomeInput.value != null) {
    if (precoInput != null) {
      if (descricaoInput.value != null) {
        if (listaProdutos != null) {
          if (precoInput.value > 0) {
            listaProdutos.push({
              nome: nomeInput.value,
              preco: parseFloat(precoInput.value),
              descricao: descricaoInput.value,
            });
            localStorage.setItem("produtos", JSON.stringify(listaProdutos));
            alert("Cadastrado com sucesso!");
            window.location.reload();
          } else {
            alert("Preço não permitido!");
          }
        } else {
          if (precoInput.value > 0) {
            listaProdutos = [
              {
                nome: nomeInput.value,
                preco: parseFloat(precoInput.value),
                descricao: descricaoInput.value,
              },
            ];
            localStorage.setItem("produtos", JSON.stringify(listaProdutos));
            alert("Cadastrado com sucesso!");
            window.location.reload();
          } else {
            alert("Preço não permitido!");
          }
        }
      }
    }
  }
}
