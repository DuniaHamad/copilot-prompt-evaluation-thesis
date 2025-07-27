//Schreibe eine Funktion istQuadrat, die prüft, ob vier gegebene Punkte im 2D-Raum ein Quadrat bilden. Die Eingabeparameter sind vier Arrays p1, p2, p3 und p4, jeweils mit zwei Ganzzahlen [x, y], die die Koordinaten der Punkte darstellen. Die Funktion gibt einen booleschen Wert zurück: true, wenn die vier Punkte ein Quadrat mit vier gleich langen Seiten und vier rechten Winkeln bilden, sonst false. Alle Seiten müssen eine positive Länge haben. Die Punkte sind in beliebiger Reihenfolge gegeben. Beispiel: Eingabe p1=[0,0], p2=[1,1], p3=[1,0], p4=[0,1] ergibt Ausgabe true. Achte darauf, dass die Funktion auch Fälle mit überlappenden oder identischen Punkten korrekt behandelt. Verwende zur Prüfung der Seiten- und Diagonallängen geeignete Distanzberechnungen und vergleiche diese für Gleichheit und Winkel. Die Funktion soll nur Standardbibliotheken verwenden und keine grafischen Ausgaben erzeugen.


//ab hier ist generierter Code
function istQuadrat(
    p1: [number, number],
    p2: [number, number],
    p3: [number, number],
    p4: [number, number]
): boolean {
    // Hilfsfunktion: quadrierte Distanz zwischen zwei Punkten
    function dist2(a: [number, number], b: [number, number]): number {
        return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
    }

    // Alle 6 möglichen Abstände berechnen
    const punkte: [number, number][] = [p1, p2, p3, p4];
    const dists: number[] = [];
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            dists.push(dist2(punkte[i], punkte[j]));
        }
    }

    // Sortieren, damit gleiche Längen nebeneinander liegen
    dists.sort((a, b) => a - b);

    // Ein Quadrat hat 4 gleiche Seiten (kürzere Distanz) und 2 gleiche Diagonalen (längere Distanz)
    const [side, diag] = [dists[0], dists[5]];

    // Seitenlänge muss > 0 sein, 4 Seiten gleich, 2 Diagonalen gleich
    if (
        side > 0 &&
        dists.filter(d => d === side).length === 4 &&
        dists.filter(d => d === diag).length === 2
    ) {
        return true;
    }
    return false;
}

// Beispiel 1:
console.log(istQuadrat([0,0], [1,1], [1,0], [0,1])); // true

// Beispiel 2:
console.log(istQuadrat([0,0], [1,1], [1,0], [0,12])); // false
