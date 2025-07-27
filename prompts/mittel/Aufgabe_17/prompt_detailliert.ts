//Schreibe eine Funktion, die die minimale Länge eines Strings t berechnet, dessen Anagramme aneinandergereiht den gegebenen String s bilden. 
// Die Eingabe ist ein String s (bestehend aus Kleinbuchstaben), der eine Verkettung von Anagrammen von t darstellt. 
// Die Funktion soll als Ausgabe eine Ganzzahl zurückgeben, die die minimale mögliche Länge von t angibt. 
// Dabei gilt: s enthält nur Kleinbuchstaben, und die Länge von s kann bis zu 10^5 betragen. 
// Ein Anagramm ist eine Umordnung der Buchstaben eines Strings. 
// 
// Beispiel: Für s = "abba" ist die Ausgabe 2, da t = "ab" sein kann. Für s = "cdef" ist die Ausgabe 4, da t = "cdef" möglich ist. 
// Die Lösung soll effizient sein und auch bei großen Eingaben performant arbeiten.



// ab hier ist generierter Code
/**
 * Berechnet die minimale Länge eines Strings t, dessen Anagramme aneinandergereiht den gegebenen String s bilden.
 * @param s - Eingabestring, Verkettung von Anagrammen von t
 * @returns Minimale mögliche Länge von t
 */
function minAnagramOriginLength(s: string): number {
    // Prüfe für jede mögliche Länge len, ob s nur aus Anagrammen von t der Länge len besteht
    for (let len = 1; len <= s.length; len++) {
        if (s.length % len !== 0) continue;
        const tSorted = s.slice(0, len).split('').sort().join('');
        let valid = true;
        for (let i = 0; i < s.length; i += len) {
            const part = s.slice(i, i + len);
            if (part.split('').sort().join('') !== tSorted) {
                valid = false;
                break;
            }
        }
        if (valid) return len;
    }
    return s.length;
}