function maxRepeatedSubstringAfterSwapDeatil(text: string): number {
    const n = text.length;
    if (n === 1) return 1;

    // Zähle die Gesamtanzahl jedes Zeichens
    const totalCount: Record<string, number> = {};
    for (const c of text) {
        totalCount[c] = (totalCount[c] || 0) + 1;
    }

    // Finde alle Blöcke gleicher Buchstaben
    type Block = { char: string, start: number, end: number, length: number };
    const blocks: Block[] = [];
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && text[j] === text[i]) j++;
        blocks.push({ char: text[i], start: i, end: j - 1, length: j - i });
        i = j;
    }

    let maxLen = 0;

    // Prüfe jeden Block
    for (let k = 0; k < blocks.length; k++) {
        const block = blocks[k];
        // Möglichkeit 1: Block um ein Zeichen verlängern, falls noch mehr von diesem Zeichen vorhanden
        if (block.length < totalCount[block.char]) {
            maxLen = Math.max(maxLen, block.length + 1);
        } else {
            maxLen = Math.max(maxLen, block.length);
        }

        // Möglichkeit 2: Zwei Blöcke verbinden, falls sie durch genau ein anderes Zeichen getrennt sind
        if (
            k + 2 < blocks.length &&
            blocks[k].char === blocks[k + 2].char &&
            blocks[k + 1].length === 1
        ) {
            const combined = blocks[k].length + blocks[k + 2].length;
            // Prüfe, ob noch ein weiteres Zeichen zum Verbinden vorhanden ist
            if (combined < totalCount[blocks[k].char]) {
                maxLen = Math.max(maxLen, combined + 1);
            } else {
                maxLen = Math.max(maxLen, combined);
            }
        }
    }

    return maxLen;
}