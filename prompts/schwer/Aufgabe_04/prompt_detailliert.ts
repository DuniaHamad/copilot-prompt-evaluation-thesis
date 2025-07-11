//Schreibe eine Funktion maxEnvelopes, die als Eingabe eine Liste von Umschlägen erhält, wobei jeder Umschlag durch ein Zahlenpaar [w, h] (Breite und Höhe) repräsentiert wird. Die Funktion soll die maximale Anzahl von Umschlägen berechnen, die als sogenannte „Russian Doll Envelopes“ ineinander passen – d. h. ein Umschlag kann nur dann in einen anderen gesteckt werden, wenn sowohl die Breite als auch die Höhe strikt kleiner sind als beim äußeren Umschlag. Eine Drehung der Umschläge ist nicht erlaubt.

//Der Eingabeparameter ist envelopes: List[List[int]], wobei 1 ≤ len(envelopes) ≤ 10⁵ und jede Breite und Höhe im Bereich 1 bis 10⁵ liegt. 

// Die Funktion soll eine Ganzzahl (int) zurückgeben, die die maximale Anzahl ineinander passender Umschläge angibt. Nicht alle Umschläge müssen verwendet werden.

//Zur Effizienzsteigerung wird empfohlen, die Umschläge zunächst nach Breite aufsteigend und bei gleicher Breite nach Höhe absteigend zu sortieren. 

// Anschließend kann die Longest Increasing Subsequence (LIS) über die Höhen berechnet werden, z. B. mithilfe von Binary Search in O(n log n).//


function maxEnvelopesdetailliert(envelopes: number[][]): number {
    // Sortiere nach Breite aufsteigend, bei gleicher Breite nach Höhe absteigend
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    // Extrahiere die Höhen
    const heights = envelopes.map(e => e[1]);
    // Longest Increasing Subsequence (LIS) mit Binary Search
    const dp: number[] = [];
    for (const h of heights) {
        let left = 0, right = dp.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (dp[mid] < h) left = mid + 1;
            else right = mid;
        }
        dp[left] = h;
    }
    return dp.length;
}