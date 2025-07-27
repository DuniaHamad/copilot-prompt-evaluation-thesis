//Schreibe eine Funktion, die die Anzahl der verschiedenen Primfaktoren des Produkts eines gegebenen Arrays positiver Ganzzahlen bestimmt. 
// Das Eingabearray nums enthält zwischen 1 und 10.000 ganze Zahlen im Bereich von 2 bis 1000. 
// Die Funktion soll als Rückgabewert die Anzahl der unterschiedlichen Primzahlen liefern, die im Produkt aller Elemente von nums enthalten sind. 
// Es wird erwartet, dass die Primfaktoren effizient bestimmt werden, ohne das gesamte Produkt direkt zu berechnen, um Überläufe zu vermeiden. 
// 
// Beispiel: Bei nums = [2, 4, 3, 7, 10, 6] ergibt das Produkt 10080, dessen Primfaktoren {2, 3, 5, 7} sind – also ist der Rückgabewert 4. 
// Nur Standardbibliotheken dürfen verwendet werden.



// ab hier ist generierter Code
/**
 * Bestimmt die Anzahl der verschiedenen Primfaktoren des Produkts eines Arrays positiver Ganzzahlen,
 * ohne das Produkt direkt zu berechnen.
 * @param nums Array von positiven Ganzzahlen (2 ≤ nums[i] ≤ 1000)
 * @returns Anzahl der unterschiedlichen Primzahlen im Produkt aller Elemente von nums
 */
function countDistinctPrimeFactorsDetail(nums: number[]): number {
    // Alle Primzahlen bis 1000 mit dem Sieb des Eratosthenes vorab berechnen
    const MAX = 1000;
    const isPrime = Array(MAX + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= MAX; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= MAX; j += i) {
                isPrime[j] = false;
            }
        }
    }
    const primes: number[] = [];
    for (let i = 2; i <= MAX; i++) {
        if (isPrime[i]) primes.push(i);
    }

    // Set für die gefundenen Primfaktoren
    const factors = new Set<number>();

    // Für jede Zahl im Array deren Primfaktoren bestimmen
    for (const num of nums) {
        let n = num;
        for (const p of primes) {
            if (p * p > n) break;
            if (n % p === 0) {
                factors.add(p);
                while (n % p === 0) n /= p;
            }
        }
        if (n > 1) factors.add(n);
    }

    return factors.size;
}

// Beispiel:
console.log(countDistinctPrimeFactorsDetail([2, 4, 3, 7, 10, 6])); // Ausgabe: 4 (2, 3, 5, 7)