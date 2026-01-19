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

/**création du tableau de saveur à partir de saveurs */
for(let i = 0; i < saveurs.length; i++){
    const sav = creerSaveur(saveurs[i].saveur, saveurs[i].prix, i+1);
    document.querySelector("tbody").appendChild(sav);
}

} );

