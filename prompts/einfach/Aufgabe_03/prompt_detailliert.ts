// Schreibe eine Python-Funktion most_common_word, die zwei Parameter erwartet:

// paragraph (ein String mit englischem Fließtext, der auch Satzzeichen wie !?',;. enthalten kann)

// banned (eine Liste von Wörtern, die ausgeschlossen werden sollen)

// Ziel ist es, das häufigste Wort im paragraph zurückzugeben, das nicht in der banned-Liste enthalten ist.

// Anforderungen:

// Groß- und Kleinschreibung sollen ignoriert werden (z. B. Ball, BALL, ball sind gleich).

// Satzzeichen sollen entfernt werden.

// Gib das häufigste Wort in Kleinbuchstaben als String zurück.

// Es wird garantiert, dass mindestens ein gültiges Wort vorhanden ist, das nicht gebannt ist.

// Nutze idealerweise Standardbibliotheken (z. B. re oder collections.Counter), aber keine externen Pakete.

function mostCommonWordDetail(paragraph: string, banned: string[]): string {
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