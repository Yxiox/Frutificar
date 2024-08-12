
const items = [{
    name:'bom noite',
    price:'R$1.000,00'
},
{
    name:'teste',
    price:'R$800,00'
}];

function saveItems(toSave){
    localStorage.setItem("items", toSave);
}

function getItems(){
    items = localStorage.getItem("items");
}

