// Aufgabe: Berechne wiederholt die Quersumme eines Strings s aus Ziffern.
// Gegeben sind der String s und eine Zahl k.
// Solange die Länge von s größer als k ist, führe folgende Schritte aus:
// 1. Teile s in aufeinanderfolgende Gruppen der Länge k auf (letzte Gruppe kann kürzer sein).
// 2. Berechne die Summe der Ziffern jeder Gruppe.
// 3. Ersetze jede Gruppe durch die entsprechende Summe als String.
// 4. Verbinde alle Summen zu einem neuen String s.
// Wiederhole den Prozess, bis s eine Länge ≤ k hat.
// Gib den resultierenden String s zurück.

function digitSumDetail(s: string, k: number): string {
    while (s.length > k) {
        let temp = "";
        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k);
            let sum = 0;
            for (let ch of group) {
                sum += Number(ch);
            }
            temp += sum.toString();
        }
        s = temp;
    }
    return s;
}; 