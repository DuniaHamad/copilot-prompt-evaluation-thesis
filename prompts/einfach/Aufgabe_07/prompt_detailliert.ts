// Schreibe eine TypeScript-Funktion, die prüft, ob ein gegebenes Array deck so in Gruppen aufgeteilt werden kann, dass jede Gruppe aus genau x Karten besteht, wobei x > 1, und alle Karten in einer Gruppe denselben Zahlenwert besitzen.
// Der Eingabeparameter ist deck: number[], ein Array von Ganzzahlen, wobei deck[i] den Wert der i-ten Karte darstellt.
// Die Funktion soll einen boolean zurückgeben: true, wenn eine solche Gruppierung möglich ist, andernfalls false.
// Folgende Bedingungen müssen erfüllt sein: Alle Gruppen müssen die gleiche Größe x > 1 haben, und innerhalb jeder Gruppe dürfen nur Karten mit identischem Wert vorkommen. Die Anzahl der Gruppen ist beliebig.
// Ein effizienter Lösungsansatz besteht darin, zunächst die Häufigkeit jedes Kartenwertes zu zählen und dann den größten gemeinsamen Teiler (ggT) aller Häufigkeiten zu bestimmen. Ist der ggT größer als 1, ist eine gültige Gruppierung möglich.
// Beispiel 1:
// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Erklärung: Mögliche Gruppen: [1,1], [2,2], [3,3], [4,4].
// Beispiel 2:
// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Erklärung: Es gibt keine Gruppengröße > 1, die für alle Werte funktioniert.
// Verwende nur Standardfunktionen von TypeScript bzw. JavaScript. Du kannst Hilfsfunktionen wie gcd selbst definieren oder implementieren.


//ab hier ist generierter Code
/**
 * Prüft, ob das Array deck in Gruppen gleicher Größe x > 1 aufgeteilt werden kann,
 * wobei jede Gruppe nur Karten mit identischem Wert enthält.
 * @param deck Array von Kartenwerten
 * @returns true, wenn eine solche Gruppierung möglich ist, sonst false
 */
function kannInGruppenAufgeteiltWerden(deck: number[]): boolean {
    if (deck.length < 2) return false;

    // Zähle die Häufigkeit jedes Kartenwerts
    const haeufigkeit = new Map<number, number>();
    for (const karte of deck) {
        haeufigkeit.set(karte, (haeufigkeit.get(karte) ?? 0) + 1);
    }

    // Hilfsfunktion zur Berechnung des ggT
    function gcd(a: number, b: number): number {
        return b === 0 ? a : gcd(b, a % b);
    }

    // Berechne ggT aller Häufigkeiten
    let gemeinsamerTeiler = 0;
    for (const wert of haeufigkeit.values()) {
        gemeinsamerTeiler = gcd(gemeinsamerTeiler, wert);
    }

    return gemeinsamerTeiler > 1;
}