//Schreibe eine TypeScript-Funktion namens largestOverlap, die zwei binäre quadratische Matrizen als Eingabe erhält und die maximale Überlappung berechnet, die durch Verschieben der ersten Matrix über die zweite entsteht. 
// Die Eingabewerte sind img1 und img2, jeweils vom Typ number[][], bestehend aus 0 und 1. Beide Matrizen haben die gleiche Größe n mit 1 ≤ n ≤ 30. 
// Die Funktion soll ermitteln, wie viele Positionen nach optimaler Verschiebung in beiden Matrizen gleichzeitig den Wert 1 enthalten. Dabei darf img1 beliebig oft nach oben, unten, rechts oder links verschoben werden, jedoch nicht rotiert. 
// Elemente, die dabei über die Grenzen hinausragen, gelten als gelöscht. Die Funktion gibt einen number-Wert zurück, der die maximale Anzahl überlappender Einsen beschreibt. 
// 
// Beispiel: Für img1 = [[1,1,0],[0,1,0],[0,1,0]] und img2 = [[0,0,0],[0,1,1],[0,0,1]] soll das Ergebnis 3 sein. 


//Ab Hier ist generierter Code
/**
 * Berechnet die maximale Überlappung zweier binärer Matrizen durch Verschieben von img1 über img2.
 * @param img1 Erste binäre Matrix (number[][])
 * @param img2 Zweite binäre Matrix (number[][])
 * @returns Maximale Anzahl überlappender Einsen
 */
function largestOverlapdetailliert(img1: number[][], img2: number[][]): number {
    const n = img1.length;
    let maxOverlap = 0;

    for (let dx = -n + 1; dx < n; dx++) {
        for (let dy = -n + 1; dy < n; dy++) {
            let overlap = 0;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    const x = i + dx;
                    const y = j + dy;
                    if (x >= 0 && x < n && y >= 0 && y < n) {
                        if (img1[i][j] === 1 && img2[x][y] === 1) {
                            overlap++;
                        }
                    }
                }
            }
            maxOverlap = Math.max(maxOverlap, overlap);
        }
    }
    return maxOverlap;
}