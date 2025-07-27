//Finde den kürzesten Substring aus s, der alle Buchstaben aus t enthält

//ab hier ist generierter Code
/**
 * Findet den kürzesten Substring von s, der alle Buchstaben aus t enthält.
 * @param s Der Quellstring
 * @param t Die zu enthaltenden Buchstaben
 * @returns Der kürzeste Substring, der alle Buchstaben aus t enthält, oder ein leerer String, falls keiner existiert.
 */
function minWindow(s: string, t: string): string {
    if (t.length === 0 || s.length === 0) return "";

    const need: Record<string, number> = {};
    for (const c of t) need[c] = (need[c] || 0) + 1;

    let have = 0, left = 0, minLen = Infinity, minStart = 0;
    const window: Record<string, number> = {};

    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        window[c] = (window[c] || 0) + 1;

        if (need[c] && window[c] === need[c]) have++;

        while (have === Object.keys(need).length) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            const leftChar = s[left];
            window[leftChar]--;
            if (need[leftChar] && window[leftChar] < need[leftChar]) have--;
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

// Beispielaufruf:
console.log(minWindow("ADOBECODEBANC", "ABC")); // Ausgabe: "BANC"