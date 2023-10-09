function myArraySort(array, sorting) {
    if (Array.isArray(array) && (sorting === "ASC" || sorting === "DESC")) {
        const sortedArray = [...array];

        if (sorting === "ASC") {
            sortedArray.sort((a, b) => a - b);
        } else if (sorting === "DESC") {
            sortedArray.sort((a, b) => b - a);
        }

        return sortedArray;
    } else {
        console.log("Erreur : Les paramètres ne sont pas valides.");
        return null;
    }
}

document.body.innerHTML = "Tableau trié en ordre croissant : " + myArraySort([3, 8, 4, 2, 5], "ASC");
document.body.innerHTML += "<br>Tableau trié en ordre décroissant : " + myArraySort([-1, -4, 2, 5, 6, 9], "DESC");
