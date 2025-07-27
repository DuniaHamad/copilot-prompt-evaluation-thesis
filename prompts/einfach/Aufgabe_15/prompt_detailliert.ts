//Schreibe eine Funktion namens laengeLetztesWort, die als Eingabe einen String s (Text mit Wörtern und Leerzeichen) erhält. 
// Die Funktion gibt als Ausgabe eine Ganzzahl zurück, die die Länge des letzten Wortes im String s angibt. 
// Ein Wort besteht aus zusammenhängenden Buchstaben ohne Leerzeichen. 
// Der Eingabestring kann am Anfang oder Ende beliebig viele Leerzeichen enthalten. 
// Es wird angenommen, dass mindestens ein Wort im String vorhanden ist. 
// Die Funktion soll nur die Länge des letzten Wortes zurückgeben, ohne Leerzeichen mitzuzählen. 
// 
// Beispiel: Für s = " fly me to the moon " ist die Ausgabe 4, weil „moon“ das letzte Wort ist. 
// Verwende effiziente String-Operationen zur Lösung.



// ab hier ist generierter Code
/**
 * Gibt die Länge des letzten Wortes im String s zurück.
 * Ein Wort besteht aus zusammenhängenden Buchstaben ohne Leerzeichen.
 * @param s - Eingabestring mit Wörtern und Leerzeichen
 * @returns Länge des letzten Wortes
 */
function laengeLetztesWort(s: string): number {
    // Entferne führende und abschließende Leerzeichen
    s = s.trim();
    // Finde das letzte Wort, indem von hinten nach vorne gesucht wird
    let letzteLaenge = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') break;
        letzteLaenge++;
    }
    return letzteLaenge;
}

// Beispiele:
console.log(laengeLetztesWort(" fly me to the moon ")); // 4
console.log(laengeLetztesWort("Hello World")); // 5
console.log(laengeLetztesWort("luffy is still joyboy")); // 6