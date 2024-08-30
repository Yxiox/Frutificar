localStorage.removeItem("sessionList");
localStorage.removeItem("sessionPrice");

const sumHtml = document.getElementById("sum");

const vendas = JSON.parse(localStorage.getItem("vendas"));
let totalArrecadado = 0;
let totalItens = 0;
let totalVendas = 0;

if (vendas) {
  for (let i = 0; i < vendas.length; i++) {
    document.write(
      `<li>
            <div class="listItem">
              <h3>Venda ` +
        vendas[i].numero +
        `</h3>
              <h3>Quantidade de itens: ` +
        vendas[i].itens +
        `</h3>
              <h3>Valor: R$ ` +
        vendas[i].valor +
        `</h3>
            </div>
          </li>`
    );

    totalArrecadado += parseFloat(vendas[i].valor);
    totalItens += parseInt(vendas[i].itens);
    totalVendas++;
  }
} else {
  document.write(`<li>
            <div class="listItem">
              <h3>Sem vendas cadastradas</h3>
            </div>
          </li>`);
}

document.write(
  `<li>
            <div class="listItemTotal">
              <h3>Número de Vendas: ` +
    totalVendas +
    `</h3><h3>Total de itens vendidos: ` +
    totalItens +
    `</h3><h3>Valor total arrecadado: R$ ` +
    totalArrecadado +
    `</h3>
            </div>
          </li>`
);

function limparLista() {
  if (confirm("Deseja limpar?")) {
    localStorage.removeItem("vendas");
    window.location.reload();
  }
}
