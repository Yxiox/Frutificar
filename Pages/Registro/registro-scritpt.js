logins= [{
    user:"admin",
    pass:"admin"
}]

function saveLogins(usuario, senha){
    logins += {
        user: usuario,
        pass: senha
    }
    localStorage.setItem("logins", logins);
}

