//Schreibe eine Funktion findPeakElement, die in einem 0-indizierten Array nums (Array von Ganzzahlen) einen Index eines Peak-Elements zurückgibt. Ein Peak-Element ist ein Element, das strikt größer ist als seine direkten Nachbarn. Die Funktion soll genau einen solchen Index finden und zurückgeben, auch wenn mehrere Peaks existieren. Die Rückgabe ist eine Ganzzahl, die den Index eines Peak-Elements angibt. Es gilt: nums[i] ≠ nums[i+1] für alle gültigen i, und es wird angenommen, dass die außerhalb liegenden Nachbarn nums[-1] und nums[n] den Wert -∞ haben. Die Laufzeit der Funktion muss logarithmisch sein, also O(log n). Verwende zur effizienten Lösung eine binäre Suche. Beispiel: Bei Eingabe nums = [1, 2, 3, 1] soll die Funktion 2 zurückgeben, da nums[2] = 3 größer als seine Nachbarn 2 und 1 ist.



//ab hier ist generierter Code
/**
 * Gibt den Index eines Peak-Elements in einem Array zurück.
 * Ein Peak-Element ist strikt größer als seine direkten Nachbarn.
 * Die Laufzeit ist O(log n) durch binäre Suche.
 * @param nums Array von Ganzzahlen
 * @returns Index eines Peak-Elements
 */
function findPeakElementDetail(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            // Peak liegt links (inklusive mid)
            right = mid;
        } else {
            // Peak liegt rechts
            left = mid + 1;
        }
    }
    return left;
}

// Beispiel:
//console.log(findPeakElement([1, 2, 3, 1])); // Ausgabe: 2