function findKthLargest(nums: number[], k: number): number {
    function quickSelect(left: number, right: number, kSmallest: number): number {
        if (left === right) return nums[left];
        const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
        const pivotValue = nums[pivotIndex];
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
        let storeIndex = left;
        for (let i = left; i < right; i++) {
            if (nums[i] > pivotValue) {
                [nums[storeIndex], nums[i]] = [nums[i], nums[storeIndex]];
                storeIndex++;
            }
        }
        [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];
        if (storeIndex === kSmallest) return nums[storeIndex];
        else if (storeIndex < kSmallest) return quickSelect(storeIndex + 1, right, kSmallest);
        else return quickSelect(left, storeIndex - 1, kSmallest);
    }
    return quickSelect(0, nums.length - 1, k - 1);
}