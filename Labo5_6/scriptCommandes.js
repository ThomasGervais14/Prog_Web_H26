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



const creerOption = function(titre){
const element = document.createElement("option");
element.textContent = titre;
return element;
}

const ajouterCommande = function(event){
    event.preventDefault();
    const selectSaveur = document.querySelector("select");
    let saveurChoisie = selectSaveur.value;

    const maintenant = new Date();
    const dateString = maintenant.getFullYear() + "-" +
                       String(maintenant.getMonth()+1).padStart(2,'0') + "-" +
                       String(maintenant.getDate()).padStart(2,'0') + " " +
                       String(maintenant.getHours()).padStart(2,'0') + ":" +
                       String(maintenant.getMinutes()).padStart(2,'0') + ":" +
                       String(maintenant.getSeconds()).padStart(2,'0');

    commandes.push({
        "timeStamp": dateString,
        "crmglace": saveurChoisie
    });

    chargerCommandes();
    formCommandes.reset();
}

function chargerCommandes(){
    const liste = document.querySelector("ul");
    liste.innerHTML = "";
    for(let i = 0; i < commandes.length; i++){
    const comm = creerCommande(commandes[i].timeStamp, commandes[i].crmglace);
    document.querySelector("ul").appendChild(comm);
    }
}

for(let i = 0; i < options.length; i++){
    const opt = creerOption(options[i].option);
    document.querySelector("select").appendChild(opt);
}

const formCommandes = document.getElementById("frmAjoutCommande");
formCommandes.addEventListener("submit", ajouterCommande);
chargerCommandes();
})