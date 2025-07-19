//Gib die Anzahl der gemeinsamen Teiler von zwei positiven Zahlen a und b zurück.

// ab hier ist generierter Code
/**
 * Gibt die Anzahl der gemeinsamen Teiler von zwei positiven Zahlen a und b zurück.
 * @param a Erste positive Zahl
 * @param b Zweite positive Zahl
 * @returns Anzahl der gemeinsamen Teiler
 */
function anzahlGemeinsameTeiler(a: number, b: number): number {
    // Berechne den größten gemeinsamen Teiler (ggT)
    function ggT(x: number, y: number): number {
        while (y !== 0) {
            [x, y] = [y, x % y];
        }
        return x;
    }

    const ggt = ggT(a, b);
    let count = 0;
    for (let i = 1; i <= Math.sqrt(ggt); i++) {
        if (ggt % i === 0) {
            count++; // i ist ein Teiler
            if (i !== ggt / i) count++; // ggt/i ist ein anderer Teiler
        }
    }
    return count;
}

// Beispiel:
console.log(anzahlGemeinsameTeiler(12, 18)); // Ausgabe: 4 (1, 2, 3, 6)