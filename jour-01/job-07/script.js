function myNearZero(array) {
    if (Array.isArray(array) && array.length > 0) {
        let nearest = array[0];
        let minDistance = Math.abs(array[0]);

        for (let i = 1; i < array.length; i++) {
            const distance = Math.abs(array[i]);
            if (distance < minDistance || (distance === minDistance && array[i] < nearest)) {
                minDistance = distance;
                nearest = array[i];
            }
        }

        return nearest;
    } else {
        console.log("Erreur : Le paramètre n'est pas un tableau non vide.");
        return null;
    }
}

document.body.innerHTML = "L'entier le plus proche de zéro est : " + myNearZero([3, 8, 4, 2, 5]);
document.body.innerHTML += "<br>L'entier le plus proche de zéro est : " + myNearZero([-1, -4, 2, 5, 6, 9]);
