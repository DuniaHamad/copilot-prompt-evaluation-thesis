function most_common_word(paragraph: string, banned: string[]): string {
    // Satzzeichen entfernen und alles in Kleinbuchstaben umwandeln
    const cleaned = paragraph
        .replace(/[!?',;.]/g, ' ')
        .toLowerCase();

    // Wörter extrahieren
    const words = cleaned.split(/\s+/).filter(w => w.length > 0);

    // Gebannte Wörter als Set für schnellen Lookup
    const bannedSet = new Set(banned.map(w => w.toLowerCase()));

    // Zähle die Häufigkeit der Wörter
    const freq: { [key: string]: number } = {};
    for (const word of words) {
        if (!bannedSet.has(word)) {
            freq[word] = (freq[word] || 0) + 1;
        }
    }

    // Finde das häufigste Wort
    let maxWord = '';
    let maxCount = 0;
    for (const [word, count] of Object.entries(freq)) {
        if (count > maxCount) {
            maxWord = word;
            maxCount = count;
        }
    }

    return maxWord;
}