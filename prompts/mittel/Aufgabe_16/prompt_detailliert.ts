//Schreibe eine Funktion, die als Eingabe eine ganze Zahl n (Integer) erhält, welche die maximale Größe des Nenners angibt. 
// Die Funktion soll eine Liste aller vollständig gekürzten Brüche (Brüche, bei denen Zähler und Nenner keinen gemeinsamen Teiler außer 1 haben) zwischen 0 und 1 (ausschließlich) mit Nennern von 2 bis n zurückgeben. 
// Die Ausgabe ist eine Liste von Strings im Format "Zähler/Nenner". 
// Dabei sind Zähler natürliche Zahlen größer als 0 und kleiner als der Nenner. Es dürfen keine Brüche zurückgegeben werden, die weiter gekürzt werden können. Beispiel: Für n = 3 lautet die Ausgabe ["1/2", "1/3", "2/3"], da alle diese Brüche vollständig gekürzt sind. 
// Die Funktion soll keine externen Bibliotheken verwenden und möglichst effizient arbeiten.


// ab hier ist generierter Code
/**
 * Gibt alle vollständig gekürzten Brüche zwischen 0 und 1 mit Nenner von 2 bis n zurück.
 * @param n Maximale Nennergröße (n > 1)
 * @returns Array von Strings im Format "Zähler/Nenner"
 */
function vollstaendigGekuerzteBrueche(n: number): string[] {
    // Hilfsfunktion zur Berechnung des größten gemeinsamen Teilers (ggT)
    function ggt(a: number, b: number): number {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    const brueche: string[] = [];
    for (let nenner = 2; nenner <= n; nenner++) {
        for (let zaehler = 1; zaehler < nenner; zaehler++) {
            if (ggt(zaehler, nenner) === 1) {
                brueche.push(`${zaehler}/${nenner}`);
            }
        }
    }
    return brueche;
}

// Beispiel:
// console.log(vollstaendigGekuerzteBrueche(3)); // ["1/2", "1/3", "2/3"]