document.write(`
    <header>
      <div
        style="
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
        "
      >
        <a href="../Landing/landing.html"><img src="../../Images/Icon.png" height="70px" /></a>
        <h2>Frutificar</h2>
      </div>
      <div
        style="
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 15px;
        "
      >
        <a href="../Cadastro-Item/cadastro.html"><button id="cadastroSection">Cadastro de Produto</button></a>
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
          "
        >
          <a href="../Venda/venda.html"><button id="venderSection">Vender</button></a>
          <a href="../Historico/historico.html"><button id="recentesSection">Recentes</button></a>
        </div>

        <button id="logoff" style="height: 60px; width: 60px" onclick="location.href='../Login/login.html'">
          <img
            src="../../Images/Logoff.webp"
            height="40px"
          />
        </button>
      </div>
    </header>
`);