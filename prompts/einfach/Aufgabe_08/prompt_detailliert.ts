//Schreibe eine Funktion commonFactors, die zwei positive ganze Zahlen a und b (Integer) als Eingabe erhält und als Ausgabe die Anzahl der gemeinsamen positiven Teiler dieser Zahlen zurückgibt. Ein gemeinsamer Teiler ist eine Zahl, die sowohl a als auch b ohne Rest teilt. Die Funktion soll alle Zahlen von 1 bis zum kleineren Wert von a und b prüfen und zählen, wie viele davon gemeinsame Faktoren sind. Eingeschränkt gilt 1 <= a, b <= 1000. Beispiel: Für a = 12 und b = 6 ist die Ausgabe 4, da die gemeinsamen Teiler 1, 2, 3 und 6 sind; für a = 25 und b = 30 ist die Ausgabe 2, da nur 1 und 5 gemeinsame Teiler sind. Die Implementierung soll eine einfache Schleife verwenden, keine speziellen Bibliotheken benötigen und effizient innerhalb der Eingabegrenzen arbeiten.


//ab hier ist generierter Code
/**
 * Gibt die Anzahl der gemeinsamen positiven Teiler von zwei Zahlen a und b zurück.
 * @param a Erste positive ganze Zahl (1 <= a <= 1000)
 * @param b Zweite positive ganze Zahl (1 <= b <= 1000)
 * @returns Anzahl der gemeinsamen positiven Teiler
 */
function commonFactors(a: number, b: number): number {
    let count = 0;
    const limit = Math.min(a, b);
    for (let i = 1; i <= limit; i++) {
        if (a % i === 0 && b % i === 0) {
            count++;
        }
    }
    return count;
}

// Beispiele:
console.log(commonFactors(12, 6));   // Ausgabe: 4 (1, 2, 3, 6)
console.log(commonFactors(25, 30));  // Ausgabe: 2 (1, 5)