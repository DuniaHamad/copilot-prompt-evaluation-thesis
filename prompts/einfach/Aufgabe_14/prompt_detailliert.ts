//Schreibe eine Funktion findeKleinsteZahl in einer Programmiersprache deiner Wahl, die zwei Eingabeparameter erhält: n (Ganzzahl, Startwert) und t (Ganzzahl, Divisor). 
// Die Funktion soll die kleinste Zahl größer oder gleich n zurückgeben, deren Produkt aller Ziffern durch t ohne Rest teilbar ist. 
// Die Ausgabe ist eine Ganzzahl, die diese Bedingung erfüllt. 
// Dabei gilt: 1 <= n <= 100 und 1 <= t <= 10. 
// 
// Beispiel: Für n = 15 und t = 3 ist die Ausgabe 16, da die Ziffern von 16 (1 × 6 = 6) durch 3 teilbar sind, während 15 dies nicht erfüllt. 
// Die Funktion soll effizient prüfen und sicherstellen, dass sie das kleinste passende Ergebnis liefert.



// ab hier ist generierter Code
/**
 * Gibt die kleinste Zahl >= n zurück, deren Ziffernprodukt durch t ohne Rest teilbar ist.
 * @param n Startwert (inklusive)
 * @param t Divisor für das Ziffernprodukt
 * @returns Kleinste passende Zahl >= n
 */
function findeKleinsteZahl(n: number, t: number): number {
    for (let x = n; ; x++) {
        let produkt = 1;
        let temp = x;
        while (temp > 0) {
            produkt *= temp % 10;
            temp = Math.floor(temp / 10);
        }
        if (produkt % t === 0) {
            return x;
        }
    }
}

// Beispielaufruf:
console.log(findeKleinsteZahl(15, 3)); // Ausgabe: 16