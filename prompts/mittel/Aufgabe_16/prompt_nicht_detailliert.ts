//Gib alle vollständig gekürzten Brüche zwischen 0 und 1 mit Nenner bis n zurück


// ab hier ist generierter Code
/**
 * Gibt alle vollständig gekürzten Brüche zwischen 0 und 1 mit Nenner bis n zurück.
 * @param n Maximaler Nenner (n > 0)
 * @returns Array von Strings der Form "Zähler/Nenner"
 */
function gekuerzteBruecheBisN(n: number): string[] {
    function ggt(a: number, b: number): number {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    const result: string[] = [];
    for (let denominator = 2; denominator <= n; denominator++) {
        for (let numerator = 1; numerator < denominator; numerator++) {
            if (ggt(numerator, denominator) === 1) {
                result.push(`${numerator}/${denominator}`);
            }
        }
    }
    return result;
}

// Beispiel:
// console.log(gekuerzteBruecheBisN(5)); // ["1/2", "1/3", "2/3", "1/4", "3/4", "1/5", "2/5", "3/5", "4/5"]