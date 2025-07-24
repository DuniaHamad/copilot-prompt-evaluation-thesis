//Schreibe eine Funktion hIndex, die aus einem Array von Ganzzahlen citations den H-Index eines Forschers berechnet.
// Eingabe: citations (Array von Ganzzahlen), wobei citations[i] die Anzahl der Zitate für das i-te Paper darstellt.
// Ausgabe: Eine Ganzzahl, die den maximalen H-Index angibt, also die größte Zahl h, für die mindestens h Paper jeweils mindestens h Zitate haben.
// Bedingungen: Das Array hat mindestens 1 und höchstens 5000 Elemente; jedes Element ist zwischen 0 und 1000.
// Beispiel: Für citations = [3, 0, 6, 1, 5] ist die Ausgabe 3, weil 3 Papers mindestens 3 Zitate haben.
// Die Lösung soll effizient sein und keine speziellen Bibliotheken verwenden.



//ab hier ist generierter Code
/**
 * Berechnet den H-Index eines Forschers aus einem Array von Zitierungen.
 * @param citations - Array von Ganzzahlen, citations[i] ist die Anzahl der Zitate für das i-te Paper
 * @returns Der maximale H-Index
 */
export function hIndex(citations: number[]): number {
    // Sortiere die Zitierungen absteigend
    citations.sort((a, b) => b - a);
    let h = 0;
    // Iteriere über die sortierten Zitierungen
    for (let i = 0; i < citations.length; i++) {
        // Prüfe, ob mindestens (i+1) Paper jeweils mindestens (i+1) Zitate haben
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break;
        }
    }
    return h;
}

// Beispiel:
// hIndex([3, 0, 6, 1, 5]) // ergibt 3