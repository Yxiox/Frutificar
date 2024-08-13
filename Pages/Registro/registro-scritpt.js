document.addEventListener("DOMContentLoaded", function (event) {
     userInput = document.getElementById("user");
     passInput = document.getElementById("password");
     emailInput = document.getElementById("e-mail");
     buttonCadastro = document.getElementById("cadastrar");
  });


function getLogins(){
    return JSON.parse(localStorage.getItem("logins"));
}

function saveLogins(){
    logins = getLogins();

    console.log(userInput.value, passInput.value);

    logins.push({
        user: userInput.value,
        pass: passInput.value
    });
    console.log(logins)
    localStorage.setItem("logins", JSON.stringify(logins));
    location.href = "../Login/login.html";
}
