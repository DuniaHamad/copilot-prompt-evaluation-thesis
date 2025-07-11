// 1.Prompt Schreibe eine Funktion, die bestimmt, wie viele Umschläge ineinander passen, ohne dass sie gedreht werden.

function maxEnvelopes(envelopes: number[][]): number {
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    const heights = envelopes.map(e => e[1]);
    const dp: number[] = [];
    for (const h of heights) {
        let left = 0, right = dp.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (dp[mid] < h) left = mid + 1;
            else right = mid;
        }
        dp[left] = h;
    }
    return dp.length;
}