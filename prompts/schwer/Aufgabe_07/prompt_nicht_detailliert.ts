//Zähle Permutationen nach einem Muster aus 'D' und 'I'.

//ab hier ist generierter Code

/**
 * Zählt die Anzahl der Permutationen von [0, 1, ..., n], die einem Muster aus 'D' und 'I' folgen.
 * @param pattern Ein String aus 'D' und 'I', z.B. "DID"
 * @returns Anzahl der gültigen Permutationen
 */
function countPermutations(pattern: string): number {
    const n = pattern.length;
    const memo = new Map<string, number>();

    function dfs(index: number, used: number, prev: number): number {
        if (index === n + 1) return 1;
        const key = `${index},${used},${prev}`;
        if (memo.has(key)) return memo.get(key)!;

        let total = 0;
        for (let i = 0; i <= n; i++) {
            if ((used & (1 << i)) === 0) {
                if (
                    index === 0 ||
                    (pattern[index - 1] === 'I' && prev < i) ||
                    (pattern[index - 1] === 'D' && prev > i)
                ) {
                    total += dfs(index + 1, used | (1 << i), i);
                }
            }
        }
        memo.set(key, total);
        return total;
    }

    return dfs(0, 0, -1);
}

// Beispiel:
console.log(countPermutations("DID")); // Ausgabe: 5