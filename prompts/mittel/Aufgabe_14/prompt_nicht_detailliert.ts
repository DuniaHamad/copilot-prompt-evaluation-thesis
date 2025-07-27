//Schreibe eine Funktion, um ein Array aus Zahlen in möglichst wenigen Schritten gleichzumachen

// ab hier ist generierter Code
/**
 * Gibt die minimale Anzahl an Schritten zurück, um alle Elemente eines Arrays gleich zu machen.
 * In jedem Schritt kann man einen Wert eines Elements um 1 verringern.
 * @param arr Array aus Zahlen
 * @returns Minimale Anzahl an Schritten
 */
function minSchritteZumGleichmachen(arr: number[]): number {
    const min = Math.min(...arr);
    return arr.reduce((sum, val) => sum + (val - min), 0);
}

// Beispielaufruf:
console.log(minSchritteZumGleichmachen([5, 6, 8, 8, 5])); // Ausgabe: 7