//Implementiere eine Funktion, die aus einer gegebenen Liste von Intervallen ausgewählt wird. Jedes Intervall ist definiert durch drei Ganzzahlen: den Startwert li, den Endwert ri und ein Gewicht weighti. 
// Die Funktion erhält als Eingabe ein Array von Intervallen intervals, wobei jedes Element ein Tripel [li, ri, weighti] ist. 
// Ziel ist es, bis zu vier Intervalle auszuwählen, die sich nicht überschneiden. Überschneiden bedeutet, dass sich Intervalle weder innerhalb ihrer Bereiche noch an ihren Grenzen berühren dürfen (also kein gemeinsamer Punkt erlaubt). 
// Die Auswahl soll so getroffen werden, dass die Summe der Gewichte der gewählten Intervalle maximal ist. 
// Sollte es mehrere Lösungen mit gleicher maximaler Summe geben, ist diejenige mit den lexikografisch kleinsten Indizes der Intervalle zurückzugeben. 
// Die Funktion gibt ein Array mit den Indizes der gewählten Intervalle zurück. 
// 
// Beispiel: Für die Eingabe [[1,3,2],[4,5,2],[1,5,5],[6,9,3],[6,7,1],[8,9,1]] ist die korrekte Ausgabe [2,3], da Intervalle an diesen Indizes mit Gewichten 5 und 3 die höchste kombinierte Gewichtung erzielen und sich nicht überschneiden. 
// Alle Indizes beziehen sich auf die Positionen im Eingabe-Array (0-basiert). Die Start- und Endwerte der Intervalle sind positive Ganzzahlen mit 1 <= li <= ri <= 10^9. Die Gewichtungen sind positive Ganzzahlen. Die Funktion sollte effizient arbeiten und sicherstellen, dass keine zwei ausgewählten Intervalle gemeinsame Punkte haben.


// ab hier ist generierter Code
/**
 * Wählt bis zu 4 nicht-überlappende Intervalle mit maximaler Gewichtssumme.
 * Gibt die lexikografisch kleinsten 0-basierten Indizes der gewählten Intervalle zurück.
 */
function maximumWeightDetail(intervals: [number, number, number][]): number[] {
    const n = intervals.length;
    if (n === 0) return [];
    // Füge den Originalindex hinzu
    const intervalsWithIdx = intervals.map((iv, i) => [...iv, i] as [number, number, number, number]);
    // Sortiere nach Endpunkt
    intervalsWithIdx.sort((a, b) => a[1] - b[1]);
    // DP: dp[i][k] = {sum, path}
    const dp: {sum: number, path: number[]}[][] = Array.from({length: n + 1}, () =>
        Array.from({length: 5}, () => ({sum: 0, path: [] as number[]}))
    );
    // Binäre Suche: letztes nicht-überlappendes Intervall
    function findLastNonOverlapping(idx: number): number {
        let lo = 0, hi = idx - 1, res = -1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (intervalsWithIdx[mid][1] < intervalsWithIdx[idx][0]) {
                res = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return res;
    }
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= 4; k++) {
            // Nicht nehmen
            let best = dp[i-1][k];
            // Nehmen
            const last = findLastNonOverlapping(i-1);
            if (k > 0 && last + 1 >= 0) {
                const prev = dp[last+1][k-1];
                const candSum = prev.sum + intervalsWithIdx[i-1][2];
                const candPath = [...prev.path, intervalsWithIdx[i-1][3]];
                if (
                    candSum > best.sum ||
                    (candSum === best.sum && lexLess(candPath, best.path))
                ) {
                    best = {sum: candSum, path: candPath};
                }
            }
            dp[i][k] = best;
        }
    }
    // Beste Lösung finden
    let bestK = 1, bestSum = 0, bestPath: number[] = [];
    for (let k = 1; k <= 4; k++) {
        if (
            dp[n][k].sum > bestSum ||
            (dp[n][k].sum === bestSum && lexLess(dp[n][k].path, bestPath))
        ) {
            bestSum = dp[n][k].sum;
            bestK = k;
            bestPath = dp[n][k].path;
        }
    }
    // Rückgabe: sortiere die Indizes für die lexikografisch kleinste Reihenfolge
    return [...bestPath].sort((a, b) => a - b);

    // Vergleicht die sortierten Kopien der Pfade lexikografisch
    function lexLess(a: number[], b: number[]): boolean {
        const sa = [...a].sort((x, y) => x - y);
        const sb = [...b].sort((x, y) => x - y);
        for (let i = 0; i < Math.max(sa.length, sb.length); i++) {
            if ((sa[i] ?? Infinity) < (sb[i] ?? Infinity)) return true;
            if ((sa[i] ?? Infinity) > (sb[i] ?? Infinity)) return false;
        }
        return false;
    }
}

// Beispieltests
// console.log(maximumWeight([[1,3,2],[4,5,2],[1,5,5],[6,9,3],[6,7,1],[8,9,1]])); // [2,3]
// console.log(maximumWeight([[5,8,1],[6,7,7],[4,7,3],[9,10,6],[7,8,2],[11,14,3],[3,5,5]])); // [1,3,5,6]