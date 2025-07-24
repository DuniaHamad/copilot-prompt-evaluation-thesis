//Schreibe eine Funktion, die prüft, ob man ein Array in zwei nicht-leere Teilarrays aufteilen kann, die denselben Durchschnitt haben


//ab hier ist generierter Code
/**
 * Prüft, ob ein Array in zwei nicht-leere Teilarrays mit gleichem Durchschnitt aufgeteilt werden kann.
 * @param nums - Array von Zahlen
 * @returns true, wenn möglich, sonst false
 */
export function splitSameAverage(nums: number[]): boolean {
    const n = nums.length;
    const sum = nums.reduce((a, b) => a + b, 0);

    // Hilfsfunktion: Prüft, ob es eine Teilmenge der Länge k mit Summe (sum * k / n) gibt
    function canSplit(k: number): boolean {
        if ((sum * k) % n !== 0) return false;
        const target = (sum * k) / n;
        const dp = new Set<number>();
        dp.add(0);
        for (const num of nums) {
            const next = new Set(dp);
            for (const s of dp) {
                next.add(s + num);
            }
            dp.clear();
            for (const val of next) dp.add(val);
        }
        return dp.has(target);
    }

    for (let k = 1; k <= Math.floor(n / 2); k++) {
        if (canSplit(k)) return true;
    }
    return false;
}

// Beispiel:
// splitSameAverage([1,2,3,4,5,6,7,8]) // true