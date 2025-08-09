//Finde den kürzesten Substring aus s, der alle Buchstaben aus t enthält

function min_window(s: string, t: string): string {
    if (!s || !t) return "";

    const need = new Set(t);
    let left = 0, minLen = Infinity, minStart = 0;
    let count = new Map<string, number>();
    let have = 0;

    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        if (need.has(c)) {
            count.set(c, (count.get(c) ?? 0) + 1);
            if (count.get(c) === 1) have++;
        }

        while (have === need.size) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            const leftChar = s[left];
            if (need.has(leftChar)) {
                count.set(leftChar, count.get(leftChar)! - 1);
                if (count.get(leftChar) === 0) have--;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

// Beispiel:
console.log(min_window("ADOBECODEBANC", "ABC")); // "BANC"
console.log(min_window("a", "aa")); // ""