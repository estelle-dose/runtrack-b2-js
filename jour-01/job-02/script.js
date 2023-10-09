function myCountChar(haystack, needle) {
    if (typeof haystack === "string" && typeof needle === "string" && needle.length === 1) {
        let count = 0;
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle) {
                count++;
            }
        }
        return count;
    } else {
        console.log("Erreur : Les paramètres ne sont pas valides.");
        return null;
    }
}

document.body.innerHTML = "Le nombre d'occurrences de 'o' dans 'HelloWorld' est : " + myCountChar("HelloWorld", "o");
