//Max Länge von gleichen Buchstaben nach einem Tausch im String.

//ab hier ist generierter Code
// Schreibe eine TypeScript-Funktion, die für einen gegebenen String s die maximale Länge einer Sequenz identischer Buchstaben nach genau einem Tausch zweier beliebiger Zeichen im String zurückgibt.
// Beispiel: s = "ababa" -> Output: 3 (nach Tausch der zweiten und dritten Position: "aabaa" oder "baaab")
// Der Eingabeparameter ist s: string. Die Funktion soll eine Zahl zurückgeben.

function maxLaengeNachTausch(s: string): number {
    if (s.length <= 1) return s.length;

    // Zähle die Häufigkeit jedes Zeichens
    const freq = new Map<string, number>();
    for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);

    let maxLen = 1;

    // Für jeden Buchstaben im Alphabet
    for (const [char, count] of freq.entries()) {
        // Finde alle Blöcke dieses Buchstabens
        let i = 0;
        const blocks: number[] = [];
        while (i < s.length) {
            if (s[i] === char) {
                let j = i;
                while (j < s.length && s[j] === char) j++;
                blocks.push(j - i);
                i = j;
            } else {
                i++;
            }
        }

        // Prüfe maximale Blocklänge mit einem Tausch
        for (let b = 0; b < blocks.length; b++) {
            // Block alleine
            let curr = blocks[b];
            // Zwei Blöcke mit einem Zeichen Abstand zusammenlegen
            if (
                b + 1 < blocks.length &&
                blocks[b + 1] > 0 &&
                // Nur ein Zeichen Abstand
                s
                    .slice(
                        blocks.slice(0, b + 1).reduce((a, v) => a + v, 0) + b,
                        blocks.slice(0, b + 1).reduce((a, v) => a + v, 0) + b + 1
                    )
                    .length === 1
            ) {
                // Summe der beiden Blöcke
                let combined = blocks[b] + blocks[b + 1];
                // Es darf maximal so viele wie im String geben
                if (count > combined) combined++;
                curr = Math.max(curr, combined);
            } else if (count > curr) {
                // Sonst kann man einen weiteren Buchstaben holen
                curr++;
            }
            maxLen = Math.max(maxLen, curr);
        }
    }

    return maxLen;
}