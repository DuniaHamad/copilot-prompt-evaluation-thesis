//Wähle bis zu 4 nicht überlappende Intervalle mit größter Gewichtssumme


//ab hier ist generierter Code
// Erwartet: intervals = [[start, end, weight], ...]
// Rückgabe: Liste der Indizes der bis zu 4 nicht überlappenden Intervalle mit maximaler Gewichtssumme

function maximumWeight(intervals: number[][]): number[] {
    if (intervals.length === 0) return [];
    // Intervalle mit Index merken
    const intervalsWithIndex = intervals.map((iv, idx) => [...iv, idx]);
    // Nach Endzeit sortieren
    intervalsWithIndex.sort((a, b) => a[1] - b[1]);
    const n = intervalsWithIndex.length;
    // dp[i][k]: {sum: Gewichtssumme, prev: Vorgängerindex, pick: true/false}
    const dp: {sum: number, prev: number, pick: boolean}[][] = Array.from({length: n+1}, () => Array(5).fill(null).map(() => ({sum:0, prev:-1, pick:false})));
    // Hilfsfunktion: binäre Suche nach letztem nicht überlappenden Intervall
    function findLastNonOverlapping(idx: number): number {
        let lo = 0, hi = idx - 1, res = -1;
        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (intervalsWithIndex[mid][1] <= intervalsWithIndex[idx][0]) {
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
            if (
                dp[i-1][k].sum > dp[i][k].sum ||
                (dp[i-1][k].sum === dp[i][k].sum && (
                    dp[i-1][k].prev < dp[i][k].prev // lexikographisch kleinere Lösung bevorzugen
                ))
            ) {
                dp[i][k] = {...dp[i-1][k], prev: i-1, pick: false};
            }
            // Nehmen
            const last = findLastNonOverlapping(i-1);
            const candSum = dp[last+1][k-1].sum + intervalsWithIndex[i-1][2];
            if (
                candSum > dp[i][k].sum ||
                (candSum === dp[i][k].sum && (
                    // lexikographisch kleinere Lösung bevorzugen
                    (dp[last+1][k-1].prev < dp[i][k].prev)
                ))
            ) {
                dp[i][k] = {sum: candSum, prev: last+1, pick: true};
            }
        }
    }
    // Rückwärts die gewählten Indizes rekonstruieren
    let res: number[] = [];
    let i = n, k = 4;
    while (i > 0 && k > 0) {
        if (dp[i][k].pick) {
            res.push(intervalsWithIndex[i-1][3]);
            i = dp[i][k].prev;
            k--;
        } else {
            i--;
        }
    }
    res.reverse();
    // Sortiere Ergebnis für lexikographisch kleinste Lösung
    return res.sort((a, b) => a - b);
}