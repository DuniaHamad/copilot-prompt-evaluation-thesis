function splitArraySameAverageDetail(nums: number[]): boolean {
    const n = nums.length;
    const totalSum = nums.reduce((a, b) => a + b, 0);

    // Early pruning: If it's impossible mathematically
    let possible = false;
    for (let k = 1; k <= Math.floor(n / 2); k++) {
        if ((totalSum * k) % n === 0) {
            possible = true;
            break;
        }
    }
    if (!possible) return false;

    // dp[i][j]: can we pick i numbers with sum j?
    const dp: Set<number>[] = Array.from({ length: n + 1 }, () => new Set<number>());
    dp[0].add(0);

    for (const num of nums) {
        for (let i = n - 1; i >= 0; i--) {
            for (const s of dp[i]) {
                dp[i + 1].add(s + num);
            }
        }
    }

    for (let k = 1; k <= Math.floor(n / 2); k++) {
        if ((totalSum * k) % n !== 0) continue;
        const target = (totalSum * k) / n;
        if (dp[k].has(target)) return true;
    }
    return false;
}