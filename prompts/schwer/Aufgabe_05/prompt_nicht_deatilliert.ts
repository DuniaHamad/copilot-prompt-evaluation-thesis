//Prompt1: Find the smallest base k ≥ 2 where n in base k is all ones.
// Prompt2: Given n as a string, find the smallest base k where n's digits are all '1's.
// Prompt3: Given n as a string, find the smallest base k ≥ 2 such that n equals 1 + k + k^2 + ... + k^(m-1) for some m ≥ 2.
// Prompt4: Given a string n representing an integer, find the smallest base k ≥ 2 such that n can be expressed as a repunit number with m digits (1 + k + k² + ... + k^(m-1)) for some integer m ≥ 2. Return k as a string.


//ab hier ist der generierte Code
/**
 * Given a string n representing an integer, find the smallest base k ≥ 2 such that
 * n can be expressed as a repunit number with m digits (1 + k + k² + ... + k^(m-1))
 * for some integer m ≥ 2. Return k as a string.
 * @param nStr The number n as a string
 * @returns The smallest base k as a string
 */
function smallestRepunitBase(nStr: string): string {
    const n = BigInt(nStr);

    // Try all possible lengths m (number of digits) from highest down to 2
    for (let m = Math.floor(Math.log(Number(n)) + 1); m >= 2; m--) {
        let low = 2n, high = n;
        while (low <= high) {
            let k = (low + high) / 2n;
            // sum = (k^m - 1) / (k - 1)
            let sum = (k ** BigInt(m) - 1n) / (k - 1n);
            if (sum === n) return k.toString();
            if (sum < n) low = k + 1n;
            else high = k - 1n;
        }
    }
    // If not found, n in base n-1 is always '11'
    return (n - 1n).toString();
}