function digitSum(n: number): number {
    return Math.abs(n)
        .toString()
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}

function smallestIndex(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        if (digitSum(nums[i]) === i) {
            return i;
        }
    }
    return -1;
}