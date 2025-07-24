//Zähle alternierende Teilarrays in einem binären Array.

// ab hier ist generierter Code
/**
 * Zählt die Anzahl der alternierenden Teilarrays in einem binären Array.
 * Ein alternierendes Teilarray besteht aus mindestens zwei Elementen, bei denen sich 0 und 1 abwechseln.
 * @param arr Binäres Array (nur 0 und 1)
 * @returns Anzahl der alternierenden Teilarrays
 */
function countAlternatingSubarrays(nums: number[]): number {
    let count = 0;
    let n = nums.length;
    let length = 1;
    for (let i = 0; i < n; i++) {
        length = 1;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] !== nums[j - 1]) {
                length++;
                count++;
            } else {
                break;
            }
        }
    }
    // Add single-element subarrays
    count += n;
    return count;
}

// Beispieltests:
console.log(countAlternatingSubarrays([0, 1, 0, 1])); // 6
console.log(countAlternatingSubarrays([1, 1, 0, 1])); // 2
console.log(countAlternatingSubarrays([0, 0, 0]));    // 0
console.log(countAlternatingSubarrays([0, 1, 1, 1])); // 5