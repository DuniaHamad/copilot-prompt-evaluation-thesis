//Wann kollidiert jedes Auto mit dem nächsten? Gib Zeiten oder -1 zurück


// ab hier ist generierter Code
/**
 * Gegeben sind n Autos auf einer Linie, jedes mit Position und Geschwindigkeit.
 * Für jedes Auto soll bestimmt werden, wann es mit dem direkt vor ihm fahrenden Auto kollidiert.
 * Gibt für jedes Auto die Kollisionszeit zurück oder -1, falls keine Kollision stattfindet.
 * 
 * @param positions Array mit den Startpositionen der Autos (von hinten nach vorne sortiert)
 * @param speeds Array mit den Geschwindigkeiten der Autos (gleiche Reihenfolge wie positions)
 * @returns Array mit Kollisionszeiten (float) oder -1
 */
function getCollisionTimes(cars: number[][]): number[] {
    const n = cars.length;
    const res = Array(n).fill(-1);
    const stack: number[] = [];

    for (let i = n - 1; i >= 0; i--) {
        const [posI, speedI] = cars[i];
        while (stack.length > 0) {
            const j = stack[stack.length - 1];
            const [posJ, speedJ] = cars[j];
            if (speedI <= speedJ) {
                stack.pop();
                continue;
            }
            const t = (posJ - posI) / (speedI - speedJ);
            if (res[j] === -1 || t <= res[j]) {
                res[i] = t;
                break;
            }
            stack.pop();
        }
        stack.push(i);
    }
    return res;
}

// Beispiel:
console.log(getCollisionTimes([[1, 3], [3, 2], [5, 1]])); // Beispielausgabe: [2, 2, -1]