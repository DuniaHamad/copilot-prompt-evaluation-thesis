//Schreibe eine Funktion, die für eine Liste von Autos berechnet, wann jedes Auto mit dem direkt vor ihm fahrenden Auto kollidiert oder ob es niemals zu einer Kollision kommt. 
// Die Eingabe ist ein Array von Arrays cars, wobei jedes Element aus zwei Ganzzahlen besteht: position (die Distanz des Autos vom Straßenanfang in Metern, aufsteigend sortiert) und speed (die Geschwindigkeit des Autos in Metern pro Sekunde). 
// Die Funktion soll ein Array von Fließkommazahlen zurückgeben, wobei der Wert an Index i die Zeit in Sekunden angibt, nach der das i-te Auto mit dem nächsten Auto zusammenstößt, oder -1, wenn keine Kollision stattfindet. 
// Es gilt, dass wenn zwei Autos kollidieren, sie eine Flotte bilden, die mit der langsameren Geschwindigkeit weiterfährt. 
// Es wird angenommen, dass keine zwei Autos zur selben Zeit an der gleichen Position starten, und Positionen sind strikt aufsteigend.
// 
//  Beispiel: Bei Eingabe [[1,2],[2,1],[4,3],[7,2]] ist die Ausgabe [1.0,-1.0,3.0,-1.0], da das erste Auto nach 1 Sekunde das zweite einholt und das dritte nach 3 Sekunden das vierte. 
// Die Berechnung soll numerisch genau bis mindestens fünf Nachkommastellen sein. 
// Verwende eine effiziente Lösung, die auch große Eingaben (bis 10^5 Autos) performant verarbeitet.



//ab hier ist generierter Code
/**
 * Berechnet für jedes Auto die Zeit bis zur Kollision mit dem direkt davor fahrenden Auto,
 * oder -1 falls keine Kollision stattfindet. Nach einer Kollision fahren Autos als Flotte mit der langsameren Geschwindigkeit weiter.
 * @param cars Array von [position, speed], aufsteigend nach position sortiert
 * @returns Array mit Kollisionszeiten (mind. 5 Nachkommastellen) oder -1
 */
function getCollisionTimesDetail(cars: number[][]): number[] {
    const n = cars.length;
    const res = Array(n).fill(-1);
    // Stack speichert Indizes der Autos, mit denen eine Kollision möglich ist
    const stack: number[] = [];

    for (let i = n - 1; i >= 0; i--) {
        const [posI, speedI] = cars[i];
        // Prüfe, ob das aktuelle Auto ein Auto vor sich einholen kann
        while (stack.length > 0) {
            const j = stack[stack.length - 1];
            const [posJ, speedJ] = cars[j];
            // Wenn das vordere Auto gleich schnell oder schneller ist, nie Kollision
            if (speedI <= speedJ) {
                stack.pop();
                continue;
            }
            // Zeit bis zur Kollision
            const t = (posJ - posI) / (speedI - speedJ);
            // Prüfe, ob das vordere Auto vorher schon kollidiert und als Flotte langsamer wird
            if (res[j] === -1 || t <= res[j] + 1e-8) {
                res[i] = parseFloat(t.toFixed(5));
                break;
            }
            stack.pop();
        }
        stack.push(i);
    }
    return res;
}

// Beispiel:
console.log(getCollisionTimesDetail([[1,2],[2,1],[4,3],[7,2]])); // [1.0, -1.0, 3.0, -1.0]