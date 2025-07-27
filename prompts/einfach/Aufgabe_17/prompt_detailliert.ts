//Schreibe eine Funktion in TypeScript namens plusOne, die ein Array digits: number[] als Eingabe erhält. Dieses Array repräsentiert eine nicht-negative ganze Zahl, wobei jede Ziffer der Zahl als einzelner Eintrag im Array gespeichert ist und die Ziffern von der höchsten zur niedrigsten Stelle geordnet sind. 
// Die Funktion soll die Zahl um eins erhöhen und das Ergebnis als neues Array gleicher Struktur zurückgeben. 
// Das Array enthält keine führenden Nullen, und jede Ziffer ist eine ganze Zahl zwischen 0 und 9. 
// Die Länge des Arrays liegt zwischen 1 und 100. Wenn ein Übertrag entsteht (z. B. bei Eingabe [9,9,9]), soll dieser korrekt behandelt werden, indem ggf. eine neue Ziffer am Anfang ergänzt wird. 
// Die Funktion darf keine Umwandlung der Ziffern in Strings oder numerische Ganzzahlen vornehmen, sondern soll ausschließlich mit Arrays arbeiten. 
// 
// Beispiel: Eingabe [4,3,2,1] ergibt Ausgabe [4,3,2,2]; Eingabe [9] ergibt Ausgabe [1,0].



// ab hier ist generierter Code
/**
 * Erhöht eine durch ein Array von Ziffern dargestellte Zahl um eins.
 * @param digits Array von Ziffern (jede Ziffer zwischen 0 und 9, keine führenden Nullen)
 * @returns Neues Array, das die um eins erhöhte Zahl repräsentiert
 */
function plusOneDeatil(digits: number[]): number[] {
    // Wir iterieren von hinten nach vorne durch das Array
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            // Wenn die aktuelle Ziffer kleiner als 9 ist, einfach erhöhen und zurückgeben
            const result = digits.slice();
            result[i]++;
            return result;
        }
        // Wenn die Ziffer 9 ist, setzen wir sie auf 0 und machen mit der nächsten weiter
        digits[i] = 0;
    }
    // Wenn wir hier ankommen, waren alle Ziffern 9, also fügen wir eine 1 am Anfang hinzu
    return [1, ...digits];
}

// Beispiele:
// plusOne([4,3,2,1]) // → [4,3,2,2]
// plusOne([9])       // → [1,0]
// plusOne([9,9,9])   // → [1,0,0,0]