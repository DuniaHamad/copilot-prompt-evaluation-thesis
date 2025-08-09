function countAlternatingSubarraysProbe(nums: number[]): number {
    let total = 0, length = 1;
    for (let i = 1; i < nums.length; i++) {
        length = nums[i] !== nums[i - 1] ? length + 1 : 1;
        total += length;
    }
    return total + (nums.length > 0 ? 1 : 0);
}