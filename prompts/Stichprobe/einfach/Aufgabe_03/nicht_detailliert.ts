function mostCommonWordDetail(text: string, excluded: string[]): string {
    const cleaned = text.replace(/[!?',;.]/g, ' ').toLowerCase();
    const words = cleaned.split(/\s+/).filter(w => w.length > 0);
    const excludedSet = new Set(excluded.map(w => w.toLowerCase()));
    const freq: { [key: string]: number } = {};
    for (const word of words) {
        if (!excludedSet.has(word)) {
            freq[word] = (freq[word] || 0) + 1;
        }
    }
    let result = '';
    let max = 0;
    for (const [word, count] of Object.entries(freq)) {
        if (count > max) {
            result = word;
            max = count;
        }
    }
    return result;
}