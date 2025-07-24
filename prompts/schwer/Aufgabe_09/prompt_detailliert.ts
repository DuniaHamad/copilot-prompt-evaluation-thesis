//Schreibe eine Funktion in TypeScript, die für eine Liste von Anfragen jeweils den maximalen möglichen bitweisen XOR-Wert zwischen einem gegebenen Wert xi und einem Element aus dem Array nums berechnet. Dabei dürfen nur solche Elemente aus nums berücksichtigt werden, die kleiner oder gleich mi sind. Die Funktion erhält zwei Parameter: nums: number[], ein Array nicht-negativer Ganzzahlen, und queries: number[][], wobei jedes innere Array genau zwei Elemente [xi, mi] enthält. Die Funktion gibt ein Array von Zahlen zurück, wobei jedes Element dem maximalen XOR-Wert für die jeweilige Anfrage entspricht oder -1, falls kein Element aus nums kleiner oder gleich mi ist. Beispiel: Bei nums = [0, 1, 2, 3, 4] und queries = [[3, 1], [1, 3], [5, 6]] ist das Ergebnis [3, 3, 7]. Die Lösung soll effizient für große Eingaben funktionieren, idealerweise unter O(n log n + q log n). Die Verwendung eines binären Tries zur Optimierung der XOR-Suche ist erlaubt. Es sollen keine externen Libraries verwendet werden.



//ab hier ist generierter Code
class TrieNode {
    children: [TrieNode?, TrieNode?] = [undefined, undefined];
}

function insert(root: TrieNode, num: number) {
    let node = root;
    for (let i = 31; i >= 0; i--) {
        const bit = (num >> i) & 1;
        if (!node.children[bit]) node.children[bit] = new TrieNode();
        node = node.children[bit]!;
    }
}

function getMaxXor(root: TrieNode, num: number): number {
    let node = root;
    let xor = 0;
    for (let i = 31; i >= 0; i--) {
        const bit = (num >> i) & 1;
        const toggledBit = bit ^ 1;
        if (node.children[toggledBit]) {
            xor |= (1 << i);
            node = node.children[toggledBit]!;
        } else if (node.children[bit]) {
            node = node.children[bit]!;
        } else {
            return xor;
        }
    }
    return xor;
}

export function maxXorQueriesDetail(nums: number[], queries: number[][]): number[] {
    nums.sort((a, b) => a - b);
    const queriesWithIndex = queries.map(([xi, mi], idx) => ({xi, mi, idx}));
    queriesWithIndex.sort((a, b) => a.mi - b.mi);

    const res: number[] = Array(queries.length).fill(-1);
    const trie = new TrieNode();
    let i = 0;

    for (const {xi, mi, idx} of queriesWithIndex) {
        while (i < nums.length && nums[i] <= mi) {
            insert(trie, nums[i]);
            i++;
        }
        if (i === 0) {
            res[idx] = -1;
        } else {
            res[idx] = getMaxXor(trie, xi);
        }
    }
    return res;
}

// Beispieltest:
console.log(maxXorQueries([0, 1, 2, 3, 4], [[3, 1], [1, 3], [5, 6]])); // [3, 3, 7]