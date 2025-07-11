//Schreibe eine TypeScript-Funktion namens smallestGoodBase, die als Eingabe einen String n erhält, welcher eine positive Ganzzahl im Bereich von 3 bis 10^18 ohne führende Nullen repräsentiert. 
// Die Funktion soll die kleinste Basis k (als String) zurückgeben, wobei k mindestens 2 ist, sodass die Darstellung von n in Basis k ausschließlich aus Einsen besteht, also eine Repunit-Zahl mit mindestens zwei Einsen. 
// Es wird angenommen, dass für jedes n mindestens die Basis n-1 eine solche Darstellung erlaubt (entspricht "11" in Basis n-1).
//  Die Funktion soll effizient arbeiten und für sehr große Zahlen geeignet sein. 
// Zur Lösung kann man über die mögliche Länge m der Repunit-Darstellung iterieren und für jedes m mit binärer Suche den Wert k ermitteln, der die Gleichung n = (k^m - 1) / (k - 1) erfüllt.
// 
//  Beispiel: Für Input "13" ist die Ausgabe "3", da 13 in Basis 3 die Darstellung "111" hat.
// Verwende BigInt, um große Zahlen zu verarbeiten. Eine Repunit-Zahl ist eine Zahl, deren Ziffern in einer Basis nur aus Einsen bestehen und durch eine geometrische Reihe beschrieben werden kann.

/**
 * Gibt die kleinste Basis k ≥ 2 zurück, sodass n in Basis k nur Einsen enthält (Repunit-Zahl).
 * @param nStr String, der eine positive Ganzzahl im Bereich 3 bis 10^18 repräsentiert
 * @returns Die kleinste Basis k als String
 */
function smallestGoodBase(nStr: string): string {
    const n = BigInt(nStr);

    // Maximale mögliche Länge der Repunit-Darstellung
    const maxM = Math.floor(Number(n.toString().length * Math.log(10) / Math.log(2))) + 1;

    for (let m = maxM; m >= 2; m--) {
        let low = 2n, high = n;
        while (low <= high) {
            const k = (low + high) / 2n;
            // Berechne sum = (k^m - 1) / (k - 1)
            let pow = k ** BigInt(m);
            let sum = (pow - 1n) / (k - 1n);

            if (sum === n) return k.toString();
            if (sum < n) low = k + 1n;
            else high = k - 1n;
        }
    }
    // Falls keine Basis gefunden wurde, ist n-1 immer gültig ("11" in Basis n-1)
    return (n - 1n).toString();
}