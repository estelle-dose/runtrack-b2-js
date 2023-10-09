// script.js

// Fonction pour afficher la valeur de l'input dans le paragraphe
function myDisplayText() {
    const textDisplayer = document.getElementById("text-displayer");
    const inputText = document.getElementById("input-text").value;
    textDisplayer.textContent = inputText;
}

// Fonction pour mettre le texte en gras
function myTurnBold() {
    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.style.fontWeight = "bold";
    textDisplayer.style.fontStyle = "normal";
}

// Fonction pour mettre le texte en italique
function myTurnItalic() {
    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.style.fontStyle = "italic";
    textDisplayer.style.fontWeight = "normal";
}

// Fonction pour enlever tous les effets appliqués au texte
function myClearText() {
    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.style.fontWeight = "normal";
    textDisplayer.style.fontStyle = "normal";
}

