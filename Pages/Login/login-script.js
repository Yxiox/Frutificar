function getLogins(){
    return JSON.parse(localStorage.getItem("logins"));
}

function contains(logins, login){
    return logins.some(obj => JSON.stringify(obj) === JSON.stringify(login));
}

function validateLogin(usuario, senha){
    
    let local = getLogins();

    if(contains(local, login={user:usuario, pass:senha}) === true){
        location.href = "../Landing/landing.html";
        return true;
    }
    else{
        return false
    }
}