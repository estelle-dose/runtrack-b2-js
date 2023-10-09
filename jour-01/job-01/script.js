function myUpperCase(string) {
    if (typeof string === "string") {
        return string.toUpperCase();
    } else {
        console.log("Erreur : le paramètre n'est pas une chaîne de caractères.");
        return null;
    }
}

document.body.innerHTML = myUpperCase("Hello World");