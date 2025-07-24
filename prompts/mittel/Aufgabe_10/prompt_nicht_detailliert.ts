//Finde das k-größte Element in einer Liste


//ab hier ist generierter Code
export function findKthLargest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("Ungültiger Wert für k");
    }
    // Kopiere das Array, sortiere absteigend und gib das k-te Element zurück
    const sorted = [...arr].sort((a, b) => b - a);
    return sorted[k - 1];
}

// Beispiel:
// console.log(findKthLargest([3, 1, 5, 2, 4], 2)); // 4