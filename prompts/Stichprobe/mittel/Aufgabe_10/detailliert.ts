function findKthLargestDetail(nums: number[], k: number): number {
    function quickSelect(left: number, right: number, kSmallest: number): number {
        if (left === right) return nums[left];

        // Choose a random pivot
        const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
        const pivotValue = nums[pivotIndex];

        // Move pivot to end
        [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

        // Partition
        let storeIndex = left;
        for (let i = left; i < right; i++) {
            if (nums[i] > pivotValue) { // Descending order
                [nums[storeIndex], nums[i]] = [nums[i], nums[storeIndex]];
                storeIndex++;
            }
        }
        // Move pivot to its final place
        [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];

        // The pivot is in its final sorted position
        if (storeIndex === kSmallest) {
            return nums[storeIndex];
        } else if (storeIndex < kSmallest) {
            return quickSelect(storeIndex + 1, right, kSmallest);
        } else {
            return quickSelect(left, storeIndex - 1, kSmallest);
        }
    }

    // k-th largest is (k-1) in sorted descending order
    return quickSelect(0, nums.length - 1, k - 1);
}