//Erhöhe eine Zahl, die als Array von Ziffern gegeben ist, um eins

// ab hier ist generierter Code
function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

// Beispiel:
// plusOne([1,2,3]) // → [1,2,4]
// plusOne([9,9,9]) // → [1,0,0,0]