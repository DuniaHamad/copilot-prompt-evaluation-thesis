//Zähle die verschiedenen Primfaktoren im Produkt eines Zahlenarrays


//ab hier ist generierter Code
/**
 * Zählt die verschiedenen Primfaktoren im Produkt eines Zahlenarrays.
 * @param arr Array von positiven ganzen Zahlen
 * @returns Anzahl der verschiedenen Primfaktoren im Produkt aller Zahlen
 */
function countDistinctPrimeFactors(arr: number[]): number {
    const primeFactors = new Set<number>();

    // Hilfsfunktion zur Primfaktorzerlegung einer Zahl
    function factorize(n: number) {
        let d = 2;
        while (n > 1 && d * d <= n) {
            if (n % d === 0) {
                primeFactors.add(d);
                while (n % d === 0) {
                    n = n / d;
                }
            }
            d++;
        }
        if (n > 1) {
            primeFactors.add(n);
        }
    }

    for (const num of arr) {
        if (num > 1) {
            factorize(num);
        }
    }

    return primeFactors.size;
}

// Beispiel:
console.log(countDistinctPrimeFactors([12, 15])); // Ausgabe: 3 (2, 3, 5)