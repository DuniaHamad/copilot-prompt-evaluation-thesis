//Finde ein Element im Array, das größer als seine Nachbarn ist.


//ab hier ist generierter Code
/**
 * Findet den Index eines Elements im Array, das größer als seine direkten Nachbarn ist.
 * Gibt den Index des ersten gefundenen Elements zurück oder -1, falls keines existiert.
 * @param arr Array von Zahlen
 * @returns Der Index des gefundenen Elements oder -1
 */
function findPeakElement(arr: number[]): number {
    for (let i = 0; i < arr.length; i++) {
        const left = i === 0 ? -Infinity : arr[i - 1];
        const right = i === arr.length - 1 ? -Infinity : arr[i + 1];
        if (arr[i] > left && arr[i] > right) {
            return i;
        }
    }
    return -1; // Gibt -1 zurück, wenn kein Peak gefunden wurde
}

// Beispiel:
console.log(findPeakElement([1, 2, 3, 1])); // Ausgabe: 2