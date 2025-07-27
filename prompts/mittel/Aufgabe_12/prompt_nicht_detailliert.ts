//Prüfe, ob vier Punkte im 2D-Raum ein Quadrat bilden

//ab hier ist generierter Code
// Schreibe eine TypeScript-Funktion isSquare, die prüft, ob vier Punkte im 2D-Raum ein Quadrat bilden.
// Jeder Punkt wird als Tupel [x, y] übergeben. Die Funktion erhält ein Array von vier Punkten und gibt true zurück, wenn diese ein Quadrat bilden, sonst false.

function isSquare(points: [number, number][]): boolean {
    if (points.length !== 4) return false;

    // Hilfsfunktion zur Berechnung des quadratischen Abstands zwischen zwei Punkten
    function dist2(a: [number, number], b: [number, number]): number {
        return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
    }

    // Alle Abstände berechnen
    const dists: number[] = [];
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            dists.push(dist2(points[i], points[j]));
        }
    }

    // Es muss genau 2 verschiedene Distanzen geben: Seiten und Diagonalen
    dists.sort((a, b) => a - b);
    const [side, diag] = [dists[0], dists[5]];

    // Ein Quadrat hat 4 gleiche Seiten und 2 gleiche Diagonalen (und keine Null-Abstände)
    return (
        side > 0 &&
        dists.filter(d => d === side).length === 4 &&
        dists.filter(d => d === diag).length === 2
    );
}

// Beispieltests
console.log(isSquare([[0,0],[1,0],[1,1],[0,1]])); // true
console.log(isSquare([[0,0],[2,0],[2,1],[0,1]])); // false

function validSquare(
    p1: [number, number],
    p2: [number, number],
    p3: [number, number],
    p4: [number, number]
): boolean {
    return isSquare([p1, p2, p3, p4]);
}