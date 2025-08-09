function maxRepeatedSubstringAfterSwap(text: string): number {
    if (text.length === 1) return 1;
    const total: Record<string, number> = {};
    for (const c of text) total[c] = (total[c] || 0) + 1;

    let maxLen = 0, i = 0;
    while (i < text.length) {
        let j = i;
        while (j < text.length && text[j] === text[i]) j++;
        let len = j - i;
        maxLen = Math.max(maxLen, len < total[text[i]] ? len + 1 : len);

        // Zwei Blöcke mit einem Zeichen dazwischen verbinden
        if (
            j + 1 < text.length &&
            text[i] === text[j + 1] &&
            text[j] !== text[i]
        ) {
            let k = j + 1;
            while (k < text.length && text[k] === text[i]) k++;
            let combined = (j - i) + (k - (j + 1));
            maxLen = Math.max(maxLen, combined < total[text[i]] ? combined + 1 : combined);
        }
        i = j;
    }
    return maxLen;
}