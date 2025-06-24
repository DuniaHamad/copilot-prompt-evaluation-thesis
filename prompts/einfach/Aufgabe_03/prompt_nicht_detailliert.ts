//Schreibe eine Funktion, die den häufigsten Begriff in einem Text zurückgibt, ohne bestimmte ausgeschlossene Wörter zu berücksichtigen. Satzzeichen und Groß-/Kleinschreibung sollen ignoriert werden.

function mostCommonWord(paragraph: string, banned: string[]): string {
    // Satzzeichen entfernen und in Kleinbuchstaben umwandeln
    const clean = paragraph.replace(/[^\w\s]/g, ' ').toLowerCase();
    const words = clean.split(/\s+/);

    const bannedSet = new Set(banned.map(w => w.toLowerCase()));
    const count: Record<string, number> = {};

    for (const word of words) {
        if (word && !bannedSet.has(word)) {
            count[word] = (count[word] || 0) + 1;
        }
    }

    let maxWord = '';
    let maxCount = 0;
    for (const [word, c] of Object.entries(count)) {
        if (c > maxCount) {
            maxCount = c;
            maxWord = word;
        }
    }

    return maxWord;
}