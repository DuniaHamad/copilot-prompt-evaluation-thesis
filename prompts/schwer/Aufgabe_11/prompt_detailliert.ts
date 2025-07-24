
// Schreibe eine Funktion splitArraySameAverage(nums: number[]): boolean, die prüft, ob das gegebene Array nums von Ganzzahlen in zwei nicht-leere Teilarrays A und B aufgeteilt werden kann, sodass der Durchschnitt von A gleich dem Durchschnitt von B ist.

// Eingabe:
// nums – ein Array von Ganzzahlen (number[]), mit 1 ≤ nums.length ≤ 30, und jedem Element 0 ≤ nums[i] ≤ 10.000.

// Ausgabe:
// Ein Boolean (true oder false), der angibt, ob eine solche Aufteilung möglich ist.

// Bedingungen:

// Beide Teilarrays A und B müssen mindestens ein Element enthalten (nicht leer sein).

// Die Durchschnittswerte berechnen sich als Summe der Elemente geteilt durch Anzahl der Elemente.

// Es muss existieren eine Aufteilung von nums in A und B mit average(A) == average(B).

// Beispiel:
// Input: [1,2,3,4,5,6,7,8]
// Output: true
// Erklärung: z.B. A = [1,4,5,8], B = [2,3,6,7] beide mit Durchschnitt 4.5.

// Nutze eine effiziente Methode, um Teilmengen zu prüfen, z.B. Backtracking oder dynamische Programmierung.

//ab hier ist generierter Code
/**
 * Prüft, ob das Array in zwei nicht-leere Teilarrays mit gleichem Durchschnitt aufgeteilt werden kann.
 * @param nums - Array von Ganzzahlen
 * @returns true, wenn möglich, sonst false
 */
export function splitArraySameAverage(nums: number[]): boolean {
    const n = nums.length;
    const sum = nums.reduce((a, b) => a + b, 0);

    // Für jede mögliche Teilmengen-Größe k (1 <= k < n)
    for (let k = 1; k <= Math.floor(n / 2); k++) {
        // Prüfe, ob eine Teilmenge der Länge k mit Summe (sum * k / n) existieren kann
        if ((sum * k) % n !== 0) continue;
        const target = (sum * k) / n;

        // DP: dp[i][s] = true, wenn Summe s mit i Elementen möglich ist
        const dp = Array.from({ length: k + 1 }, () => new Set<number>());
        dp[0].add(0);

        for (const num of nums) {
            for (let i = k; i >= 1; i--) {
                for (const prev of dp[i - 1]) {
                    dp[i].add(prev + num);
                }
            }
        }
        if (dp[k].has(target)) return true;
    }
    return false;
}

// Beispiel:
// splitArraySameAverage([1,2,3,4,5,6,7,8]) // true