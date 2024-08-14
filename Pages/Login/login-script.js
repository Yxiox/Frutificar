function getLogins(){
    return JSON.parse(localStorage.getItem("logins"));
}

function contains(logins, login){
    return logins.some(obj => JSON.stringify(obj) === JSON.stringify(login));
}

function validateLogin(usuario, senha){
    
    let local = getLogins();

    if(contains(local, login={user:usuario, pass:senha}) === true){
        localStorage.setItem("logged", JSON.stringify("true"));
        location.href = "../Landing/landing.html";
        return true;
    }
    else{
        alert("Login ou senha incorretos/inexistentes.");
        return false
    }
}