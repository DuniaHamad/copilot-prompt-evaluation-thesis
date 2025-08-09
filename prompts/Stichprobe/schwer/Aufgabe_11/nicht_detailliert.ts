function splitArraySameAverage(nums: number[]): boolean {
    const n = nums.length, sum = nums.reduce((a, b) => a + b, 0);
    for (let k = 1; k <= n / 2; k++) {
        if ((sum * k) % n !== 0) continue;
        const target = (sum * k) / n;
        const dp: Set<number>[] = Array.from({ length: k + 1 }, () => new Set());
        dp[0].add(0);
        for (const num of nums) {
            for (let i = k - 1; i >= 0; i--) {
                for (const s of dp[i]) dp[i + 1].add(s + num);
            }
        }
        if (dp[k].has(target)) return true;
    }
    return false;
}