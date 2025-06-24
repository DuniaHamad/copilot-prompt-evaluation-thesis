//Prompt: Implementiere eine Funktion, die ermittelt, wie weit man in einer Reihe von Gebäuden kommt, wenn man nur begrenzt Ziegelsteine und Leitern hat, um Höhenunterschiede beim Überqueren höherer Gebäude zu überwinden.



/**
 * Ermittelt, wie weit man in einer Reihe von Gebäuden kommt, wenn man nur begrenzt Ziegelsteine und Leitern hat.
 * @param heights - Array mit den Höhen der Gebäude.
 * @param bricks - Anzahl verfügbarer Ziegelsteine.
 * @param ladders - Anzahl verfügbarer Leitern.
 * @returns Index des letzten erreichten Gebäudes.
 */
function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    // Effizienter Min-Heap für die größten Sprünge, für die wir Leitern verwenden könnten
    const minHeap: number[] = [];
    function push(val: number) {
        minHeap.push(val);
        let i = minHeap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (minHeap[parent] <= minHeap[i]) break;
            [minHeap[parent], minHeap[i]] = [minHeap[i], minHeap[parent]];
            i = parent;
        }
    }
    function pop(): number | undefined {
        if (minHeap.length === 0) return undefined;
        const min = minHeap[0];
        const end = minHeap.pop()!;
        if (minHeap.length > 0) {
            minHeap[0] = end;
            let i = 0;
            while (true) {
                let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
                if (left < minHeap.length && minHeap[left] < minHeap[smallest]) smallest = left;
                if (right < minHeap.length && minHeap[right] < minHeap[smallest]) smallest = right;
                if (smallest === i) break;
                [minHeap[i], minHeap[smallest]] = [minHeap[smallest], minHeap[i]];
                i = smallest;
            }
        }
        return min;
    }

    for (let i = 0; i < heights.length - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        if (diff > 0) {
            push(diff);
            if (minHeap.length > ladders) {
                bricks -= pop()!;
                if (bricks < 0) return i;
            }
        }
    }
    return heights.length - 1;
}