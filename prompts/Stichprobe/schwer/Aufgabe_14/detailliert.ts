//Schreibe eine Funktion min_window(s: str, t: str) -> str, die den kürzesten Teilstring aus s zurückgibt, der alle Zeichen aus t einschließlich ihrer Häufigkeit enthält. 
// Dabei ist s ein beliebiger String mit maximal 100.000 Zeichen, bestehend aus Groß- und Kleinbuchstaben, und t ein Ziel-String mit denselben Zeichenarten, dessen Zeichen vollständig (inkl. Duplikate) im Ergebnis vorkommen müssen. Gibt es kein gültiges Fenster, soll ein leerer String zurückgegeben werden. 
// Die Lösung soll in O(m + n) Laufzeit realisiert werden, wobei m die Länge von s und n die von t ist. 
// Nutze bevorzugt einen Sliding-Window-Ansatz mit HashMaps zur Laufzeitoptimierung. 
// 
// Beispiel: Für s = "ADOBECODEBANC" und t = "ABC" soll "BANC" zurückgegeben werden. 
// Für s = "a" und t = "aa" ist das Ergebnis "", da der zweite Buchstabe fehlt. 
// Achte auf exakte Zeichenzählung und Groß-/Kleinschreibung.

function min_windowDetail(s: string, t: string): string {
    if (!s || !t) return "";

    const need = new Map<string, number>();
    for (const c of t) {
        need.set(c, (need.get(c) ?? 0) + 1);
    }

    const have = new Map<string, number>();
    let required = need.size;
    let formed = 0;
    let left = 0;
    let minLen = Infinity;
    let minStart = 0;

    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        have.set(c, (have.get(c) ?? 0) + 1);

        if (need.has(c) && have.get(c) === need.get(c)) {
            formed++;
        }

        while (formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            const leftChar = s[left];
            have.set(leftChar, (have.get(leftChar) ?? 0) - 1);
            if (need.has(leftChar) && have.get(leftChar)! < need.get(leftChar)!) {
                formed--;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

// Beispiele:
console.log(min_window("ADOBECODEBANC", "ABC")); // "BANC"
console.log(min_window("a", "aa")); // ""