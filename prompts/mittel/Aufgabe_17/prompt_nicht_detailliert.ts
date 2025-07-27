//Minimale Ursprungslänge aus Anagrammen berechnen

// ab hier ist generierter Code
function minAnagramLength(s: string): number {
    // Die minimale Ursprungslänge ist die kleinste Länge eines Substrings t,
    // sodass s nur aus Anagrammen von t besteht.
    for (let len = 1; len <= s.length; len++) {
        if (s.length % len !== 0) continue;
        const t = s.slice(0, len);
        const sortedT = t.split('').sort().join('');
        let valid = true;
        for (let i = 0; i < s.length; i += len) {
            const part = s.slice(i, i + len);
            if (part.split('').sort().join('') !== sortedT) {
                valid = false;
                break;
            }
        }
        if (valid) return len;
    }
    return s.length;
}