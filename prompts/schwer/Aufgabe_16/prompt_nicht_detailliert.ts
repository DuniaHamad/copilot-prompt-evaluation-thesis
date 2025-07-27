// Schreibe eine Funktion, die eine Liste von Zahlen und eine Zahl k erhält. 
// Die Liste soll in k zusammenhängende Teilbereiche (Segmente) aufgeteilt werden. 
// Gib die minimale mögliche Differenz zwischen der größten und der kleinsten Segment-Summe der Ränder (also jeweils das erste und letzte Segment) zurück.

/**
 * Gibt die Differenz zwischen maximalem und minimalem Score beim Aufteilen der Gewichte in k zusammenhängende Bags zurück.
 * Score: Summe aus weights[first] + weights[last] für jedes Bag.
 * @param weights Array von Zahlen
 * @param k Anzahl der Bags
 * @returns Differenz zwischen maximalem und minimalem Score
 */
function minDiffRandSegmentSums(weights: number[], k: number): number {
    // Wenn k == 1, gibt es nur eine Möglichkeit, Differenz ist 0
    if (k === 1) return 0;

    // Wir betrachten die "Schnittstellen" zwischen den Bags:
    // Für jedes Bag (außer dem ersten und letzten) zählt das Gewicht an der Schnittstelle doppelt (als Ende des einen und Anfang des nächsten Bags).
    // Die Kosten für die Aufteilung sind immer: weights[0] + weights[n-1] + Summe der größten (k-1) Schnittstellen für max, kleinsten (k-1) für min.

    // Erzeuge die Liste der möglichen Schnittstellen-Kosten:
    // Schnittstelle i trennt nach i: [0..i] | [i+1..n-1]
    // Die Kosten an der Schnittstelle sind weights[i] + weights[i+1]
    const n = weights.length;
    const cuts: number[] = [];
    for (let i = 0; i < n - 1; i++) {
        cuts.push(weights[i] + weights[i + 1]);
    }

    // Sortiere die Schnittstellen-Kosten
    cuts.sort((a, b) => a - b);

    // Für das Maximum: Summe der (k-1) größten Schnittstellen
    // Für das Minimum: Summe der (k-1) kleinsten Schnittstellen
    let minScore = 0;
    let maxScore = 0;
    for (let i = 0; i < k - 1; i++) {
        minScore += cuts[i];
        maxScore += cuts[cuts.length - 1 - i];
    }

    // Die Differenz ist maxScore - minScore
    return maxScore - minScore;
}

// Beispiel-Tests
// console.log(minDiffRandSegmentSums([1,3,5,1], 2)); // 4
// console.log(minDiffRandSegmentSums([1,3], 2)); // 0