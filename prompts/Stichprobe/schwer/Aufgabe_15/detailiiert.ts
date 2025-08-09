type Interval = [number, number, number];

function maxWeightIntervalsDetail(intervals: Interval[]): number[] {
    const n = intervals.length;
    let bestWeight = -1;
    let bestIndices: number[] = [];

    // Prüfe alle Kombinationen von 1 bis 4 Intervallen
    for (let k = 1; k <= 4; k++) {
        // Generiere alle Kombinationen von k Indizes
        const comb = combinations([...Array(n).keys()], k);
        for (const indices of comb) {
            // Hole die Intervalle
            const selected = indices.map(i => intervals[i]);
            // Prüfe, ob sie sich nicht überschneiden
            if (isNonOverlapping(selected)) {
                const sumWeight = selected.reduce((sum, x) => sum + x[2], 0);
                // Vergleiche Gewicht und Lexikografie
                if (
                    sumWeight > bestWeight ||
                    (sumWeight === bestWeight && lexLess(indices, bestIndices))
                ) {
                    bestWeight = sumWeight;
                    bestIndices = indices.slice();
                }
            }
        }
    }
    return bestIndices;

    // Hilfsfunktion: Prüft, ob Intervalle sich nicht überschneiden
    function isNonOverlapping(arr: Interval[]): boolean {
        arr.sort((a, b) => a[0] - b[0]);
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1][1] >= arr[i][0]) return false; // Berühren oder überschneiden
        }
        return true;
    }

    // Hilfsfunktion: Lexikografischer Vergleich
    function lexLess(a: number[], b: number[]): boolean {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] < b[i]) return true;
            if (a[i] > b[i]) return false;
        }
        return a.length < b.length;
    }

    // Hilfsfunktion: Alle Kombinationen von k Elementen aus arr
    function combinations(arr: number[], k: number): number[][] {
        const result: number[][] = [];
        function backtrack(start: number, path: number[]) {
            if (path.length === k) {
                result.push(path.slice());
                return;
            }
            for (let i = start; i < arr.length; i++) {
                path.push(arr[i]);
                backtrack(i + 1, path);
                path.pop();
            }
        }
        backtrack(0, []);
        return result;
    }
}

// Beispiel-Test
console.log(maxWeightIntervals([[1,3,2],[4,5,2],[1,5,5],[6,9,3],[6,7,1],[8,9,1]])); // [2,3]