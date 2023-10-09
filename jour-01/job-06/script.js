function mySquareArray(array) {
    if (Array.isArray(array)) {
        const squaredArray = [];
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === "number") {
                squaredArray.push(array[i] * array[i]);
            } else {
                console.log("Erreur : Le tableau contient des éléments qui ne sont pas des nombres.");
                return null;
            }
        }
        return squaredArray;
    } else {
        console.log("Erreur : Le paramètre n'est pas un tableau.");
        return null;
    }
}

document.body.innerHTML = "Tableau au carré : " + mySquareArray([3, 8, 4, 2, 5]);
