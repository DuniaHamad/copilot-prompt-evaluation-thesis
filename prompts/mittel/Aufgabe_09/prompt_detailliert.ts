// Schreibe eine Funktion in TypeScript, die die Anzahl aller alternierenden Teilarrays in einem gegebenen binären Array zählt.
// Ein binäres Array nums besteht ausschließlich aus den Werten 0 und 1. Ein Teilarray ist eine zusammenhängende Teilsequenz von nums. Ein Teilarray gilt als alternierend, wenn keine zwei aufeinanderfolgenden Elemente denselben Wert haben – das bedeutet, dass sich 0 und 1 durchgehend abwechseln.

// Die Funktion soll folgenden Signatur folgen:
// function countAlternatingSubarrays(nums: number[]): number
// Eingabeparameter ist nums – ein Array von Zahlen (number[]), wobei jedes Element entweder 0 oder 1 ist.
// Als Ausgabe soll die Funktion eine Zahl (number) zurückgeben, die angibt, wie viele der möglichen Teilarrays von nums alternierend sind.

// Alle möglichen Teilarrays müssen berücksichtigt werden, also auch die mit nur einem Element. Die Länge des Arrays nums kann bis zu 10⁵ betragen, daher soll die Lösung effizient sein – bevorzugt mit linearer oder linearnaher Laufzeit.

// Beispiel:
// Input: nums = [1, 0, 1, 0]
// Output: 10
// Begründung: Alle möglichen Teilarrays in diesem Fall sind alternierend: [1], [0], [1], [0], [1,0], [0,1], [1,0], [1,0,1], [0,1,0], [1,0,1,0]

// Verwende keine externen Bibliotheken. Die Lösung soll klar, effizient und gut lesbar sein.


//ab hier ist generierter Code
/**
 * Zählt die Anzahl aller alternierenden Teilarrays in einem binären Array.
 * Ein Teilarray ist alternierend, wenn keine zwei aufeinanderfolgenden Elemente denselben Wert haben.
 * @param nums Binäres Array (nur 0 und 1)
 * @returns Anzahl der alternierenden Teilarrays
 */
function countAlternatingSubarraysDetail(nums: number[]): number {
    let total = 0;
    let length = 1;

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] !== nums[i - 1]) {
            length++;
        } else {
            length = 1;
        }
        total += length;
    }

    return total;
}

// Beispieltests:
console.log(countAlternatingSubarrays([1, 0, 1, 0])); // 10
console.log(countAlternatingSubarrays([0, 1, 1, 1])); // 5
console.log(countAlternatingSubarrays([0, 0, 0]));    // 3
console.log(countAlternatingSubarrays([1, 0, 0, 1])); // 5

