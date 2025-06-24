// Schreibe eine Funktion, die folgende Aufgabe löst:

// Du erhältst ein Array heights, das die Höhen von Gebäuden in einer Reihe darstellt. Du startest bei Gebäude 0 und möchtest so weit wie möglich nach rechts gehen. Dabei kannst du bei einem Übergang von Gebäude i zu Gebäude i+1 entweder:

// Wenn das nächste Gebäude gleich hoch oder niedriger ist als das aktuelle, einfach weitergehen ohne Ressourcen zu verbrauchen.

// Wenn das nächste Gebäude höher ist, musst du den Höhenunterschied mit Ziegelsteinen ausgleichen (jeder Höhenmeter kostet einen Ziegelstein) oder eine Leiter verwenden (jede Leiter kann einen beliebigen Höhenunterschied überspringen).

// Du hast eine begrenzte Anzahl Ziegelsteine (bricks) und Leitern (ladders).

// Die Funktion soll zurückgeben, welchen Index des Gebäudes du maximal erreichen kannst, wenn du Ziegelsteine und Leitern optimal einsetzt.



class MinHeap {
    private heap: number[] = [];
    insert(val: number) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }
    extractMin(): number | undefined {
        if (this.heap.length === 0) return undefined;
        const min = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            let i = 0;
            while (true) {
                let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
                if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
                if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
                if (smallest === i) break;
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            }
        }
        return min;
    }
    size() {
        return this.heap.length;
    }
}

/**
 * Gibt den maximal erreichbaren Gebäude-Index zurück, wenn Ziegelsteine und Leitern optimal eingesetzt werden.
 * @param heights - Array der Gebäudehöhen.
 * @param bricks - Anzahl verfügbarer Ziegelsteine.
 * @param ladders - Anzahl verfügbarer Leitern.
 * @returns Index des letzten erreichbaren Gebäudes.
 */
function furthestBuildingDetail(heights: number[], bricks: number, ladders: number): number {
    const minHeap = new MinHeap();
    for (let i = 0; i < heights.length - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        if (diff > 0) {
            minHeap.insert(diff);
            if (minHeap.size() > ladders) {
                bricks -= minHeap.extractMin()!;
                if (bricks < 0) return i;
            }
        }
    }
    return heights.length - 1;
}