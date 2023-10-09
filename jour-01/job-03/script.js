function myIsInString(haystack, needle) {
    if (typeof haystack === "string" && typeof needle === "string") {
        return haystack.includes(needle);
    } else {
        console.log("Erreur : Les paramètres ne sont pas valides.");
        return null;
    }
}

document.body.innerHTML = "La chaîne 'llo' se trouve dans 'HelloWorld' : " + myIsInString("HelloWorld", "llo");
document.body.innerHTML += "<br>La chaîne 'rele' se trouve dans 'HelloWorld' : " + myIsInString("HelloWorld", "rele");
