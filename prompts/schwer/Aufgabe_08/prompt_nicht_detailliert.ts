//Zähle Echo-Substrings in einem String.

//ab hier ist generierter Code
/**
 * Zählt die Anzahl der Echo-Substrings in einem String.
 * Ein Echo-Substring ist ein nicht-leerer Substring, der aus zwei identischen, aufeinanderfolgenden Teilstrings besteht.
 * Beispiel: "abcabc" enthält "abcabc" als Echo-Substring.
 */
function countEchoSubstrings(text: string): number {
    const n = text.length;
    const seen = new Set<string>();
    let count = 0;

    for (let len = 1; len <= Math.floor(n / 2); len++) {
        for (let i = 0; i + 2 * len <= n; i++) {
            const first = text.substr(i, len);
            const second = text.substr(i + len, len);
            if (first === second) {
                const echo = text.substr(i, 2 * len);
                if (!seen.has(echo)) {
                    seen.add(echo);
                    count++;
                }
            }
        }
    }
    return count;
}

// Beispiel:
console.log(countEchoSubstrings("abcabcabc")); // Ausgabe: 2 ("abcabc", "bcabca")