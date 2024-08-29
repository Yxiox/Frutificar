document.addEventListener("DOMContentLoaded", function (event) {
  userInput = document.getElementById("user");
  passInput = document.getElementById("password");
  buttonCadastro = document.getElementById("cadastrar");
});

function getLogins() {
  return JSON.parse(localStorage.getItem("logins"));
}

function saveLogins(user, password) {
  if (user != "") {
    if (password != "") {
      logins = getLogins();

      console.log(userInput.value, passInput.value);

      logins.push({
        user: user,
        pass: password,
      });
      console.log(logins);
      localStorage.setItem("logins", JSON.stringify(logins));
      location.href = "../Login/login.html";
    } else {
      alert("Senha não informada");
    }
  } else {
    alert("Usuário não informado");
  }
}
