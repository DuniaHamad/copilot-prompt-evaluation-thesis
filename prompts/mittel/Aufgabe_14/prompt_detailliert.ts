//Schreibe eine Funktion namens minMoves, die berechnet, wie viele Schritte mindestens nötig sind, um alle Zahlen in einem ganzzahligen Array gleich zu machen. 
// Die Funktion erhält ein Array nums mit n Ganzzahlen (List[int]). In jedem Schritt darfst du genau n - 1 Elemente um +1 erhöhen. 
// Die Funktion soll einen einzelnen Integer zurückgeben, der angibt, wie viele solcher Schritte notwendig sind, damit alle Elemente im Array denselben Wert haben. 
// Dabei gilt: 1 <= n <= 10^5 und jedes Element liegt im Bereich -10^9 <= nums[i] <= 10^9. 
// Die Rückgabe muss in einen 32-Bit-Integer passen. 
// Als Algorithmushinweis: Es reicht, die Differenz zwischen der Gesamtsumme und dem Produkt aus minimalem Element und Array-Länge zu berechnen. 
// 
// Beispiel: Für nums = [1,2,3] beträgt die Rückgabe 3, da die Zwischenschritte [2,3,3], [3,4,3] und [4,4,4] nötig sind. 
// Verwende keine externen Bibliotheken und konzentriere dich auf Effizienz bei großen Arrays.



// ab hier ist generierter Code
/**
 * Berechnet die minimale Anzahl an Schritten, um alle Zahlen im Array gleich zu machen.
 * In jedem Schritt dürfen genau n - 1 Elemente um +1 erhöht werden.
 * @param nums Array von Ganzzahlen
 * @returns Minimale Anzahl an Schritten als Integer
 */
function minMoves(nums: number[]): number {
    const min = Math.min(...nums);
    const sum = nums.reduce((acc, val) => acc + val, 0);
    return sum - min * nums.length;
}

// Beispielaufruf:
console.log(minMoves([1, 2, 3])); // Ausgabe: 3