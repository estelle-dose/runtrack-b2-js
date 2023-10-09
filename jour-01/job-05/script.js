function myPrimeList(limit) {
    if (typeof limit === "number" && limit >= 2) {
        const primes = [];
        for (let num = 2; num <= limit; num++) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(num);
            }
        }
        return primes;
    } else {
        console.log("Erreur : Le paramètre doit être un nombre entier supérieur ou égal à 2.");
        return null;
    }
}

document.body.innerHTML = "Nombres premiers jusqu'à 18 : " + myPrimeList(18);
