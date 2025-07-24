//Schreibe eine Funktion, die für jede Anfrage das maximale XOR mit einem Element aus einem Array berechnet.


//ab hier ist generierter Code
/**
 * Für jede Anfrage wird das maximale XOR mit einem Element aus dem Array nums berechnet.
 * @param nums Array von Zahlen
 * @param queries Array von Anfragen (jede Anfrage ist eine Zahl)
 * @returns Array mit maximalem XOR für jede Anfrage
 */
function maxXorQueries(nums: number[], queries: number[][]): number[] {
    return queries.map(([x, m]) => {
        let maxXor = -1;
        for (const num of nums) {
            if (num <= m) {
                maxXor = Math.max(maxXor, x ^ num);
            }
        }
        return maxXor;
    });
}

// Beispieltests:
console.log(maxXorQueries([0,1,2,3,4], [[3,1],[1,3],[5,6]])); // [3, 3, 7]