document.addEventListener("DOMContentLoaded", function() {
    let saveurs = [
    {"saveur":"Fraise","prix": "3"},
    {"saveur":"Chocolat","prix":"4"},
    {"saveur":"Double Chocolat","prix":"4"}
]

const creerSaveur = function(nom,prix,idd){
    const ligne = document.createElement("tr");
    const id = document.createElement("td");
    id.textContent = idd;
    const nomtab = document.createElement("td");
    nomtab.textContent = nom;
    const prixtab = document.createElement("td");
    prixtab.textContent = prix + "$";
    const slotSup = document.createElement("td");
    const suppr =  document.createElement("button");
    suppr.textContent = "Supprimer";

    /*insertion du bouton supprimer dans son slot */
    slotSup.append(suppr);

    /*création de la rangée */
    ligne.append(id,nomtab,prixtab,slotSup);
    return ligne
}

function chargerTableau(){
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    /**création du tableau de saveur à partir de saveurs */
    for(let i = 0; i < saveurs.length; i++){
        const sav = creerSaveur(saveurs[i].saveur, saveurs[i].prix, i+1);
        tbody.appendChild(sav);
    }
}

function supprimerSaveur(sav){
    if (sav.target.matches("button")){
        let ligne = sav.target.closest("tr");
        let identif = ligne.sectionRowIndex;
        saveurs.splice(identif,1);
        chargerTableau();
    }
}



function ajouterSaveur(event){
    event.preventDefault();
    const nomSaveur = document.getElementById("nom");
    const prixSaveur = document.getElementById("prix");

    saveurs.push({
        "saveur": nomSaveur.value,
         "prix": prixSaveur.value});
    chargerTableau();
    formSaveurs.reset();
}

let tbody = document.querySelector("tbody");
tbody.addEventListener("click",supprimerSaveur);

const formSaveurs = document.getElementById("frmAjoutSaveur");
const boutonAjout = formSaveurs.querySelector("button");
boutonAjout.addEventListener("click", ajouterSaveur);

chargerTableau();


} );

