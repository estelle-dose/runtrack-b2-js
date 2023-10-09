function myArraySum(array) {
    if (Array.isArray(array)) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === "number") {
                sum += array[i];
            } else {
                console.log("Erreur : Le tableau contient des éléments qui ne sont pas des nombres.");
                return null;
            }
        }
        return sum;
    } else {
        console.log("Erreur : Le paramètre n'est pas un tableau.");
        return null;
    }
}

document.body.innerHTML = "La somme des éléments du tableau est : " + myArraySum([4, 24, 52, 14, 32, 56]);
