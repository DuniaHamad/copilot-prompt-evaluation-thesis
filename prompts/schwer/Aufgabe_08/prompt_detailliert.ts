//Schreibe eine TypeScript-Funktion namens distinctEchoSubstrings, die alle unterschiedlichen, nicht-leeren Teilstrings eines gegebenen Strings text zählt, die in der Form a + a vorkommen – das heißt, sie bestehen aus zwei direkt aufeinanderfolgenden identischen Hälften. Der Eingabeparameter text ist ein string, der ausschließlich Kleinbuchstaben enthält und zwischen 1 und 2000 Zeichen lang ist. Die Funktion soll einen number-Wert zurückgeben, der angibt, wie viele verschiedene Substrings dieses Kriterium erfüllen. Gültige Echo-Substrings haben eine gerade Länge und die erste Hälfte muss exakt gleich der zweiten sein. Beispiel: Für den Input text = "abcabcabc" ist das Ergebnis 3, da "abcabc", "bcabca" und "cabcab" Echo-Substrings sind. Bei text = "leetcodeleetcode" ergibt sich 2, nämlich "ee" und "leetcodeleetcode". Die Lösung soll effizient genug für Strings mit bis zu 2000 Zeichen sein, und es dürfen nur Standardfunktionen von TypeScript bzw. JavaScript verwendet werden.




//ab hier ist generierter Code
/**
 * Zählt alle unterschiedlichen Echo-Substrings eines Strings.
 * Ein Echo-Substring hat gerade Länge und besteht aus zwei identischen Hälften.
 * @param text Eingabestring aus Kleinbuchstaben, Länge 1 bis 2000
 * @returns Anzahl der verschiedenen Echo-Substrings
 */
function distinctEchoSubstrings(text: string): number {
    const n = text.length;
    const seen = new Set<string>();

    for (let len = 2; len <= n; len += 2) {
        for (let i = 0; i + len <= n; i++) {
            const mid = i + len / 2;
            const first = text.slice(i, mid);
            const second = text.slice(mid, i + len);
            if (first === second) {
                seen.add(text.slice(i, i + len));
            }
        }
    }
    return seen.size;
}

// Beispieltests:
console.log(distinctEchoSubstrings("abcabcabc")); // Ausgabe: 3 ("abcabc", "bcabca", "cabcab")
console.log(distinctEchoSubstrings("leetcodeleetcode")); // Ausgabe: 2 ("ee", "leetcodeleetcode")