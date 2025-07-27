//Schreibe eine Funktion namens putMarbles, die eine Liste weights (Array von ganzen Zahlen) und eine ganze Zahl k als Eingabe erhält. Die Funktion soll die Murmeln, deren Gewichte in weights stehen, in genau k zusammenhängende Gruppen aufteilen, sodass keine Gruppe leer ist. Die Kosten jeder Gruppe ergeben sich aus der Summe des ersten und letzten Gewichts in dieser Gruppe. Die Funktion gibt eine ganze Zahl zurück, die die Differenz zwischen der maximal möglichen und der minimal möglichen Gesamtsumme der Kosten aller k Gruppen darstellt. Dabei gilt: Die Gruppen sind Teilbereiche des Arrays ohne Lücken (zusammenhängend). Beispiel: Für weights = [1,3,5,1] und k = 2 beträgt die Ausgabe 4, da die maximale Gesamtsumme 10 und die minimale 6 ist. Die Funktion soll effizient arbeiten, da weights bis zu 10^5 Elemente enthalten kann. Nutze nur Standardbibliotheken.



// ab hier ist generierter Code
function putMarbles(weights: number[], k: number): number {
    if (k === 1) return 0;

    // Schnittstellen-Kosten berechnen: weights[i] + weights[i+1] für i = 0..n-2
    const cuts: number[] = [];
    for (let i = 0; i < weights.length - 1; i++) {
        cuts.push(weights[i] + weights[i + 1]);
    }

    // Sortieren für effiziente Auswahl der größten/kleinsten (k-1) Schnittstellen
    cuts.sort((a, b) => a - b);

    let minSum = 0, maxSum = 0;
    for (let i = 0; i < k - 1; i++) {
        minSum += cuts[i];
        maxSum += cuts[cuts.length - 1 - i];
    }

    return maxSum - minSum;
}

// Beispiel:
// putMarbles([1,3,5,1], 2) // → 4