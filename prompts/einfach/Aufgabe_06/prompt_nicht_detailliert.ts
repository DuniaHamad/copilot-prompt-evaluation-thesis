// prompt1: Count equivalent domino pairs in a list.


//ab hier ist generierter code
/**
 * Zählt die Anzahl äquivalenter Dominopaare in einer Liste.
 * Zwei Dominosteine [a, b] und [c, d] sind äquivalent, wenn (a == c && b == d) oder (a == d && b == c).
 * @param dominoes Array von Domino-Paaren
 * @returns Anzahl der äquivalenten Paare
 */
function numEquivDominoPairs(dominoes: number[][]): number {
    const map = new Map<string, number>();
    let count = 0;
    for (const [a, b] of dominoes) {
        const key = a < b ? `${a},${b}` : `${b},${a}`;
        const prev = map.get(key) || 0;
        count += prev;
        map.set(key, prev + 1);
    }
    return count;
}