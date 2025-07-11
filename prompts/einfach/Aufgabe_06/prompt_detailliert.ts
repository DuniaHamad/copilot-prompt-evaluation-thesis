//Schreibe eine TypeScript-Funktion count_equivalent_domino_pairs, die eine Liste von Dominosteinen erhält und die Anzahl aller Paare zählt, die äquivalent sind. 
// Jeder Dominostein ist eine Liste mit zwei Ganzzahlen zwischen 1 und 9, z. B. [a, b].
//  Zwei Dominosteine gelten als äquivalent, wenn sie entweder identisch sind (a == c und b == d) oder gespiegelt gleich sind (a == d und b == c). 
// Die Eingabe ist eine Liste dominoes mit n Elementen, wobei 1 <= n <= 4 * 10^4 gilt und jedes dominoes[i] eine Liste mit genau zwei Ganzzahlen ist. 
// Die Funktion soll eine Ganzzahl zurückgeben, die die Anzahl aller gültigen Paare (i, j) mit 0 <= i < j < n angibt, bei denen dominoes[i] äquivalent zu dominoes[j] ist. 
// 
// Nutze zur Effizienz eine geeignete Datenstruktur, z. B. ein Wörterbuch (HashMap), um Duplikate schnell zu zählen. 
// Beispiel: Für dominoes = [[1,2],[2,1],[3,4],[5,6]] soll die Ausgabe 1 sein, da nur [1,2] und [2,1] ein gültiges Paar bilden.



//ab hier ist generierter code
/**
 * Zählt die Anzahl aller äquivalenten Dominopaare in einer Liste.
 * Zwei Dominosteine [a, b] und [c, d] sind äquivalent, wenn (a == c && b == d) oder (a == d && b == c).
 * @param dominoes Liste von Dominosteinen, jeweils [a, b]
 * @returns Anzahl der äquivalenten Paare (i, j) mit 0 <= i < j < n
 */
function count_equivalent_domino_pairs(dominoes: number[][]): number {
    const map = new Map<string, number>();
    let count = 0;
    for (const [a, b] of dominoes) {
        // Normalisiere den Dominostein, sodass [a, b] und [b, a] denselben Schlüssel haben
        const key = a < b ? `${a},${b}` : `${b},${a}`;
        const prev = map.get(key) || 0;
        count += prev;
        map.set(key, prev + 1);
    }
    return count;
}