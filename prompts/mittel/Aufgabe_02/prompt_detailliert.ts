/* Gegeben ist ein Array `stockPrices`, wobei jedes Element `[day, price]` den Preis einer Aktie an einem bestimmten Tag angibt. Die Tage sind alle unterschiedlich, aber nicht unbedingt sortiert. Ziel ist es, ein Liniendiagramm zu zeichnen, indem man die Punkte nach ihrem Tag sortiert und anschließend die benachbarten Punkte verbindet.

Wir wollen nun herausfinden, wie viele gerade Linienabschnitte mindestens benötigt werden, um den gesamten Kursverlauf abzubilden. Ein Linienabschnitt ist eine Folge von Punkten, die alle auf einer Geraden liegen, das heißt, die Steigung zwischen allen benachbarten Punkten in diesem Abschnitt ist gleich.

Du sollst also die minimale Anzahl von solchen Linienabschnitten berechnen, indem du das Array zuerst nach Tagen sortierst, dann für jede benachbarte Punkt-Paarung die Steigung berechnest und schließlich die Anzahl der maximalen zusammenhängenden Segmente mit identischer Steigung zählst.

**Einschränkungen:**

- 1 <= stockPrices.length <= 10^5
- 1 <= day_i, price_i <= 10^9
- Alle Tage `day_i` sind einzigartig.

---

**Beispiel:**

Input: `[[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]]`

Output: `3`

Erklärung: Der Kursverlauf kann in drei Geradenabschnitte zerlegt werden, wie im Beispiel dargestellt.
 */

function minimumLinesDetail(stockPrices: number[][]): number {
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