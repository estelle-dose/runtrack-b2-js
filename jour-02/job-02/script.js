// Fonction pour incrémenter le compteur
function myAddCount() {
    // Sélectionnez le paragraphe avec l'id "count-displayer"
    const countDisplayer = document.getElementById("count-displayer");

    // Obtenez la valeur actuelle du compteur et convertissez-la en nombre
    let count = parseInt(countDisplayer.textContent);

    // Incrémentez le compteur
    count++;

    // Mettez à jour le contenu du paragraphe avec la nouvelle valeur
    countDisplayer.textContent = count;
}

// Sélectionnez le bouton avec l'id "add-count-btn"
const addButton = document.getElementById("add-count-btn");

// Ajoutez un écouteur d'événement pour déclencher la fonction myAddCount() au clic sur le bouton
addButton.addEventListener("click", myAddCount);
