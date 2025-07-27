//prompt 1: Schreibe eine Funktion, die zählt, wie viele Möglichkeiten es gibt, eine Zahl als Summe aufeinanderfolgender positiver Zahlen darzustellen
//Prompt 8: Gegeben eine positive ganze Zahl n, bestimme, auf wie viele Arten man n als Summe von mindestens einer Folge von aufeinanderfolgenden positiven ganzen Zahlen schreiben kann. Die Funktion soll diese Anzahl zurückgeben.

//ab hier ist generierter Code
function anzahlSummenFolgen(n: number): number {
    let count = 0;
    // k = Länge der Folge (mindestens 2)
    for (let k = 2; k * (k + 1) / 2 <= n; k++) {
        // Startglied a muss positiv sein
        // n = k*a + k*(k-1)/2  => a = (n - k*(k-1)/2) / k
        const a = (n - (k * (k - 1)) / 2) / k;
        if (a > 0 && Number.isInteger(a)) {
            count++;
        }
    }
    return count;
}

// Beispiel:
console.log(anzahlSummenFolgen(15)); // Ausgabe: 3 (15=1+2+3+4+5, 4+5+6, 7+8)