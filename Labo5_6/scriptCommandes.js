document.addEventListener("DOMContentLoaded", function() {
let commandes = [
    {"timeStamp":"2025-01-01 18:00:00", "crmglace":"Fraise."},
    {"timeStamp":"2025-01-01 17:50:00", "crmglace":"Chocolat."}
    ]

let options = [
    { "option": "Fraise" },
    { "option": "Chocolat" },
    { "option": "Double Chocolat" }
]

const creerCommande = function(date, saveur){
const element = document.createElement("li");
element.innerHTML = date + " - Crème glacé saveur de <strong>" + saveur + "</strong>.";
return element;
}

for(let i = 0; i < commandes.length; i++){
    const comm = creerCommande(commandes[i].timeStamp, commandes[i].crmglace);
    document.querySelector("ul").appendChild(comm);
}

const creerOption = function(titre){
const element = document.createElement("option");
element.textContent = titre;
return element;
}

for(let i = 0; i < options.length; i++){
    const opt = creerOption(options[i].option);
    document.querySelector("select").appendChild(opt);
}



})