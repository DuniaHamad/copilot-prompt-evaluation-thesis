/* Sortiere Punkte, verbinde benachbarte mit Linien.  
Finde minimale Anzahl gleich steiler Linien. */
 
function minimumLines(stockPrices: number[][]): number {
     if (stockPrices.length <= 1) return 0;
    stockPrices.sort((a, b) => a[0] - b[0]);

    let count = 1;
    for (let i = 2; i < stockPrices.length; i++) {
        const [x0, y0] = stockPrices[i - 2];
        const [x1, y1] = stockPrices[i - 1];
        const [x2, y2] = stockPrices[i];
        if ((y2 - y1) * (x1 - x0) !== (y1 - y0) * (x2 - x1)) {
            count++;
        }
    }
    return count;
}; 