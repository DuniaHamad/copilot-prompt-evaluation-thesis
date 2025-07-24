//Schreibe eine TypeScript-Funktion namens findKthLargest, die das k-größte Element in einem Array von Ganzzahlen bestimmt. Die Funktion erhält zwei Parameter: nums, ein Array mit bis zu 100.000 Ganzzahlen im Bereich von -10⁴ bis 10⁴, und k, eine Ganzzahl zwischen 1 und der Länge von nums. Die Rückgabe soll eine einzelne Ganzzahl sein – das k-größte Element in der sortierten Reihenfolge, wobei Duplikate berücksichtigt werden. Es soll nicht das k-eindeutige, sondern das k-größte Element gezählt werden. Die Funktion darf das Array nicht vollständig sortieren. Stattdessen soll eine effiziente Lösung wie ein Min-Heap der Größe k oder der Quickselect-Algorithmus verwendet werden, um die Laufzeit zu optimieren. Beispiel: Für nums = [3, 2, 1, 5, 6, 4] und k = 2 soll 5 zurückgegeben werden, da 6 das größte und 5 das zweitgrößte Element ist. Die Lösung soll ausschließlich auf Standardbibliotheken basieren.


// ab hier ist generierter Code
// Bestimmt das k-größte Element in einem Array von Ganzzahlen mit einem Min-Heap
export function findKthLargest(nums: number[], k: number): number {
    // Min-Heap als Array, Heap-Größe = k
    const heap: number[] = nums.slice(0, k);
    heap.sort((a, b) => a - b); // Initialer Heap

    function siftUp(idx: number) {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (heap[parent] > heap[idx]) {
                [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
                idx = parent;
            } else break;
        }
    }

    function siftDown(idx: number) {
        const n = heap.length;
        while (true) {
            let smallest = idx;
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;
            if (left < n && heap[left] < heap[smallest]) smallest = left;
            if (right < n && heap[right] < heap[smallest]) smallest = right;
            if (smallest !== idx) {
                [heap[smallest], heap[idx]] = [heap[idx], heap[smallest]];
                idx = smallest;
            } else break;
        }
    }

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > heap[0]) {
            heap[0] = nums[i];
            siftDown(0);
        }
    }
    return heap[0];
}

// Beispiel:
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5