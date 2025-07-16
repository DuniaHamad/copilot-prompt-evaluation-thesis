// Schreibe eine Funktion, die einen String text (Typ: String, nur Kleinbuchstaben) erhält und die Länge der längsten zusammenhängenden Teilzeichenkette aus gleichen Buchstaben zurückgibt, nachdem genau einmal zwei beliebige Zeichen im String vertauscht wurden.
//  Die Funktion gibt eine ganze Zahl (Integer) zurück, die die maximale Länge dieser wiederholten Zeichenkette beschreibt. 
// Es gilt, dass der String mindestens ein Zeichen enthält und höchstens 20.000 Zeichen lang ist. 
// Der Tausch von zwei Zeichen ist optional, also es kann auch ohne Tausch die längste Teilzeichenkette genommen werden. 
// Die Funktion soll berücksichtigen, dass durch den Tausch zwei getrennte Teilketten des gleichen Zeichens verbunden oder eine Teilkette um ein Zeichen verlängert werden kann. 
// 
// Beispiel: Eingabe "ababa" → Ausgabe 3, da durch einen Tausch eine Teilkette "aaa" möglich ist. 
// Verwende eine effiziente Methode, die sowohl Einzelblöcke als auch die Möglichkeit eines Verbindens zweier Blöcke mit genau einem unterschiedlichen Zeichen dazwischen berücksichtigt.

function maxLaengeNachTauschdetailliert(text: string): number {
    // Zähle die Häufigkeit jedes Zeichens
    const freq = new Map<string, number>();
    for (const c of text) freq.set(c, (freq.get(c) ?? 0) + 1);

    let maxLen = 1;
    let i = 0;
    const n = text.length;

    // Blöcke identifizieren: [start, end, char]
    const blocks: {start: number, end: number, char: string, len: number}[] = [];
    while (i < n) {
        let j = i;
        while (j < n && text[j] === text[i]) j++;
        blocks.push({start: i, end: j - 1, char: text[i], len: j - i});
        i = j;
    }

    // Prüfe jeden Block
    for (let b = 0; b < blocks.length; b++) {
        const {char, len} = blocks[b];
        // Block alleine + evtl. ein weiteres Zeichen holen
        let curr = len;
        if (freq.get(char)! > len) curr++;
        maxLen = Math.max(maxLen, curr);

        // Zwei Blöcke mit einem Zeichen Abstand verbinden
        if (
            b + 2 < blocks.length &&
            blocks[b + 1].len === 1 &&
            blocks[b].char === blocks[b + 2].char
        ) {
            // Kombiniere Blöcke b und b+2, evtl. noch ein weiteres Zeichen holen
            let combined = blocks[b].len + blocks[b + 2].len;
            if (freq.get(char)! > combined) combined++;
            maxLen = Math.max(maxLen, combined);
        }
    }

    return Math.min(maxLen, n);
}