//Schreibe eine Funktion consecutiveNumbersSum, die für eine gegebene positive ganze Zahl n (Typ: Integer) berechnet, auf wie viele Arten sich n als Summe von mindestens zwei oder mehr aufeinanderfolgenden positiven ganzen Zahlen darstellen lässt. Die Funktion soll eine ganze Zahl zurückgeben, die diese Anzahl der möglichen Darstellungen angibt. Dabei gilt: Die Zahlen in der Summe müssen aufeinanderfolgend und alle größer als 0 sein. Beispiel: Für n = 15 gibt es 4 Möglichkeiten, z.B. 1+2+3+4+5 oder 4+5+6. Die Funktion soll effizient arbeiten und keine unnötigen Berechnungen durchführen. Es wird angenommen, dass 1 <= n <= 10^9 gilt.


//ab hier ist generierter Code
function consecutiveNumbersSum(n: number): number {
    let count = 0;
    for (let k = 1; k * (k + 1) / 2 <= n; k++) {
        if ((n - (k * (k - 1)) / 2) % k === 0) {
            const a = (n - (k * (k - 1)) / 2) / k;
            if (a >= 1) {
                count++;
            }
        }
    }
    // Ziehe 1 ab, um die 1-gliedrige Folge (n=n) auszuschließen
    return count - 1;
}

// Beispiele:
console.log(consecutiveNumbersSum(15)); // Ausgabe: 3 (4+5+6, 7+8, 15=15 zählt nicht)
console.log(consecutiveNumbersSum(9));  // Ausgabe: 2 (2+3+4, 4+5)
console.log(consecutiveNumbersSum(5));  // Ausgabe: 1 (2+3)